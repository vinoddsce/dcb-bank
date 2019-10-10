import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';


import { MDBDropdown, MDBNavbar, MDBNavbarNav, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import expressIdeaLogo from './assets/ideaxpress_logo.png';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PrivateRoute } from './components/PrivateRoute';
import Welcome from './components/Welcome';
import UserActionNavbar from './components/UserActionNavbar';
import Footer from './components/Footer';
import LoginUser from './components/LoginUser';
import Achievements from './components/Achievements';
import About from './components/About';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
} else {
  console.log("jwtToken NOT FOUND !!!!!");
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      language: 'en',
      theme: 'light'
    }
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleLanguage(newLang) {
    this.setState({
      language: newLang
    });
  }
  toggleTheme(newTheme) {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <MDBNavbar className="Navbar-component" dark expand="md" scrolling fixed="middle">

<div className="Navbar-component-logo-container">
  <Link className="Navbar-component-logo" to="/home"><img src={expressIdeaLogo} width={"100px"} height={"70px"} /></Link>
</div>


{/* <span className="btn Navbar-btn-primary">Idea Expressed</span> */}
<MDBNavbarNav right>
  <NavLink className="btn Navbar-btn-primary" to="/register">Sign Up</NavLink>
  <Link className="btn Navbar-btn-primary" ></Link>
  <MDBDropdown >
    <MDBDropdownToggle className="Navbar-btn-primary" >
      Sign In
        </MDBDropdownToggle>
    <MDBDropdownMenu className="Navbar-btn-primary-menu">
      <MDBDropdownItem><Link className="Navbar-btn-primary-menu-btn" to="/loginUser" style={{ color: '#212529' }} >User</Link></MDBDropdownItem>
      <MDBDropdownItem><Link className="Navbar-btn-primary-menu-btn" to="/login" style={{ color: '#212529' }} >Admin</Link></MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</MDBNavbarNav>

</MDBNavbar>

            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/home" />)} />
              {/* <Route path="/home" component={Home} /> */}
              {/* <PrivateRoute path="/home" component={Home} /> */}
              <Route path="/register" component={Register} />
              <Route path="/loginUser" component={LoginUser} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/achievements" component={Achievements} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
