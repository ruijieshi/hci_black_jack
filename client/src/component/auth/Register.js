import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


const Register = ({setAlert, register, isAuthenticated}) => {

    // Use hook here to avoid writing the component as a class
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        roleType: ''
    });

    const {name, email, password, password2, roleType} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async(e) => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('The password does not match, please retry.', 'danger');
        } else {
            register({name, email, password, roleType : "something"});
        }
    }

    //Redirect us to profile if login
    if(isAuthenticated) {
        return <Redirect to='/welcome'/>
    }

    return (
        <form className='container'>
        <Fragment>
            <h1 className='large text-primary'>Sign Up</h1>
            <p className='text-primary lead'>
                <i className='fas fa-user' /> Create Your Account
            </p>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
            </form>
            <p className='my-1'>
                Already own an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
        </form>
    );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);