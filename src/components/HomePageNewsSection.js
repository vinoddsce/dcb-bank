import React, { Component, Fragment } from "react";
import request from "superagent";
import debounce from "lodash.debounce";

import './HomePageNewsSection.css';


import benefitsOfUusingTravelCreditCard from '../assets/benefits_travel_credit_card.jpg';

class HomePageNewsSection extends Component {
    constructor(props) {
        super(props);

        // Sets up our initial state
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            users: [],
        };

        // Binds our scroll event handler
        window.onscroll = debounce(() => {
            const {
                loadUsers,
                state: {
                    error,
                    isLoading,
                    hasMore,
                },
            } = this;

            // Bails early if:
            // * there's an error
            // * it's already loading
            // * there's nothing left to load
            if (error || isLoading || !hasMore) return;

            // Checks that the page has scrolled to the bottom
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                loadUsers();
            }
        }, 100);
    }

    componentWillMount() {
        // Loads some users on initial load
        this.loadUsers();
    }

    loadUsers = () => {
        this.setState({ isLoading: true }, () => {
            request
                .get('https://randomuser.me/api/?results=10')
                .then((results) => {
                    // Creates a massaged array of user data
                    const nextUsers = results.body.results.map(user => ({
                        email: user.email,
                        name: Object.values(user.name).join(' '),
                        photo: user.picture.medium,
                        username: user.login.username,
                        uuid: user.login.uuid,
                    }));

                    // Merges the next users into our existing users
                    this.setState({
                        // Note: Depending on the API you're using, this value may
                        // be returned as part of the payload to indicate that there
                        // is no additional data to be loaded
                        hasMore: (this.state.users.length < 100),
                        isLoading: false,
                        users: [
                            ...this.state.users,
                            ...nextUsers,
                        ],
                    });
                })
                .catch((err) => {
                    this.setState({
                        error: err.message,
                        isLoading: false,
                    });
                })
        });
    }

    render() {
        const {
            error,
            hasMore,
            isLoading,
            users,
        } = this.state;

        return (
            <div className="InfiniteUsers-component">
                <h1>Learning Center</h1>
                {users.map(user => (
                    <Fragment key={user.username}>
                        <hr />
                        <div style={{ display: 'flex', color: '#fffffff' }}>
                            <img
                                alt={user.username}
                                src={benefitsOfUusingTravelCreditCard}
                                style={{
                                    borderRadius: '50%',
                                    height: 72,
                                    marginRight: 20,
                                    width: 72,
                                }}
                            />
                            <div>
                                <h2 style={{ marginTop: 0 }}>
                                    Increase your Credit Card limit with these six smart tips
                                </h2>
                                <p>A lot of Credit Card users often complain that their credit limit is too low to suit their needs and have no clue how to increase the credit limit. This article gives you 6 smart tips to raise the Credit Card limit.</p>

                            </div>
                        </div>
                    </Fragment>
                ))}
                <hr />
                {error &&
                    <div style={{ color: '#900' }}>
                        {error}
                    </div>
                }
                {isLoading &&
                    <div>Loading...</div>
                }
                {!hasMore &&
                    <div>You did it! You reached the end!</div>
                }
            </div>
        );
    }
}

export default HomePageNewsSection;