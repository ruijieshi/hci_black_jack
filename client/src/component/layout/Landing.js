import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Welcome to our black jack game!</h1>
                    <h2> Sign up to receive events update </h2>
                    <p className='lead'>
                        By HCI blackjack group
                    </p>
                    <div className='buttons'>
                        <Link to='/register' className='btn btn-signup'>
                            Sign Up
                        </Link>
                        <Link to='/login' className='btn btn-light'>
                            Login
                        </Link>
                    </div>
                    <p> or </p>
                    <div className='buttons'>
                        <Link to='/welcome' className='btn btn-light'>
                            Continue as guest
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Landing;