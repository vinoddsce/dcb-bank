import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';

import { MDBDropdown, MDBNavbar, MDBNavbarNav, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import expressIdeaLogo from '../assets/idea_express_logo.gif';


import './Navbar.css';

class Navbar extends Component {

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
      <MDBNavbar className="Navbar-component" dark expand="md" scrolling fixed="middle">
        <img src={expressIdeaLogo} width={"100px"} height={"100px"} />
        <span className="btn Navbar-btn-primary">Idea Expressed</span>
        <MDBNavbarNav right>
          <NavLink className="btn Navbar-btn-primary" to="/register">Sign Up</NavLink>
          <MDBDropdown >
            <MDBDropdownToggle className="btn Navbar-btn-primary" color="primary">
              Sign In
                </MDBDropdownToggle>
            <MDBDropdownMenu className="Navbar-btn-primary-menu">
              <MDBDropdownItem><NavLink className="Navbar-btn-primary-menu-btn" to="/login" style={{ color: '#212529' }} >User</NavLink></MDBDropdownItem>
              <MDBDropdownItem><NavLink className="Navbar-btn-primary-menu-btn" to="/login" style={{ color: '#212529' }} >Admin</NavLink></MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
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
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar);