import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';
import './Register.css';

const Patterns = {
    UserNameAllowedCharacters: /^[a-z][a-z\s]*$/,
}

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            mobile: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {},
            bankSelected: '',
            bankList: [
                { value: '', name: 'Select Bank' },
                { value: 'DCB', name: 'DCB Bank' },
                { value: 'HDFC', name: 'HDFC Bank' }
            ],
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleDropdownChange = (e) => {
        this.setState({
            bankSelected: e.target.value,
            email: '',
        })
        console.log("dropdown" + this.state.bankSelected);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate(event) {
        event.preventDefault();
        const val = event.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
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

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors, bankSelected, bankList } = this.state;
        return (

            <div className="Register-component">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="col-md-6 col-md-offset-3">
                            <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.name
                                        })}
                                        maxLength="30"
                                        name="name"
                                        onChange={this.handleInputChange}
                                        onKeyUp={this.validate}
                                        value={this.state.name}
                                    />
                                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                                </div>
                                {<div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.name
                                        })}
                                        name="mobile"
                                        maxLength="10"
                                        onChange={this.handleInputChange}
                                        value={this.state.mobile}
                                    />
                                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                                </div>}
                                <div className="form-group">
                                    <select
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.name
                                        })}
                                        name="bankSelected"
                                        value={bankSelected}
                                        onChange={this.handleDropdownChange}
                                    >
                                        {bankList.map((e, key) => {
                                            return <option value={e.value} key={key} >{e.name}</option>;
                                        })}
                                    </select>
                                </div>
                                {bankSelected && bankSelected !== '' && bankSelected !== undefined &&
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
                                }
                                <div className="">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register))