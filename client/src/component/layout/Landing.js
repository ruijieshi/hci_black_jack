import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Welcome to our black jack game!</h1>
                    <p class="lead-1"> Sign up to receive events update </p>
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
                    <br/>
                    <p className='lead-3'>
                        By HCI blackjack group
                    </p>
                    <p className='lead-2'>
                        Disclaimer: The website is only for entertainment only. All the money are no real money.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Landing;
