
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';

import { MDBDropdown, MDBNavbar, MDBNavbarNav, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import expressIdeaLogo from '../assets/idea_express_logo.gif';


import './UserActionNavbar.css';

class UserActionNavbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div style={{ display: 'inline-block', textAlign: 'right', margin: '0px 0px 0px 50px' }}>
                <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        style={{ width: '25px', marginRight: '5px' }} />
                    Logout
                </a>
            </div>
        )
        const guestLinks = (
            <MDBNavbar className="UserActionNavbar-component" dark expand="md" scrolling fixed="middle">
                <NavLink className="btn UserActionNavbar-btn-primary" to="/welcome">Home</NavLink>
                <NavLink className="btn UserActionNavbar-btn-primary" to="/about">About</NavLink>
                <NavLink className="btn UserActionNavbar-btn-primary" to="/achievements">Achievements</NavLink>
                <MDBNavbarNav right>
                    {/* <NavLink className="btn UserActionNavbar-btn-primary" to="/register">Sign Up</NavLink> */}
                </MDBNavbarNav>

            </MDBNavbar>

        )
        return (
            <>
                {isAuthenticated ? authLinks : guestLinks}
            </>

        )
    }
}
UserActionNavbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(UserActionNavbar);