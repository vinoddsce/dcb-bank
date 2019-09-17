import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';

import './LoginUser.css';

class LoginUser extends Component {

    constructor() {
        super();
        this.state = {
            userType: '',
            signInBank: '',
            email: '',
            password: '',
            errors: {},
            bankList: [
                { value: '', name: 'Select Bank' },
                { value: 'DCB', name: 'DCB Bank' },
                { value: 'HDFC', name: 'HDFC Bank' }
            ],
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({
            signInBank: e.target.value,
            email: '',
            password: '',
        })
    }

    handleUserChange(e) {
        this.setState({
            userType: e.target.value,
            email: '',
            password: '',
            signInBank: '',

        })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        console.log("this.props.auth", this.props.auth);
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors, signInBank, userType, bankList, password } = this.state;
        return (

            <div className="Login-User-component">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 col-lg-4"></div>
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <div className="Login-User">
                                    <p className="Login-User-Header">Login</p> 
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <select
                                            className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.name
                                            })}
                                            name="signInBank"
                                            value={signInBank}
                                            onChange={this.handleDropdownChange}
                                        >
                                            {bankList.map((e, key) => {
                                                return <option value={e.value} key={key} >{e.name}</option>;
                                            })}
                                        </select>
                                        {errors.signInBank && (<div className="invalid-feedback">{errors.signInBank}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.email
                                            })}
                                            name="email"
                                            onChange={this.handleInputChange}
                                            value={this.state.email}
                                        />
                                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.password
                                            })}
                                            name="password"
                                            onChange={this.handleInputChange}
                                            value={password}
                                        />
                                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block user-sign-in-btn">
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                        <div className="col-md-4 col-lg-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

LoginUser.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(LoginUser)