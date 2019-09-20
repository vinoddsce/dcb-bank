import React, { Component } from 'react';
import UserActionNavbar from './UserActionNavbar';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ width: '100%', height: '567px', padding: '50px 20px' }}>
                <UserActionNavbar />
                <p>About Under Construction</p>
            </div>
        );
    }
}

export default About;