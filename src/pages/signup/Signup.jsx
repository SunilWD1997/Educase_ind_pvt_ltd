import React from 'react';
import './signup.css';
import { NavLink } from 'react-router-dom';

const Signup = () => {
   
    return (


        <div className="login">

            <div className="content">

                <img className='react_logo' src="/images/react.png" alt="react_icon" />
                <div className="random_text">
                    <p className='text'>some random text, some random</p>
                    <p className='text'>text, some random text, some random text</p>
                </div>

               
                <div className="login_signup">
                    <p><NavLink to='/'>login</NavLink></p>
                    <p><NavLink to='/signup'>signup</NavLink></p>
                    
                </div>

                <form className='input_fields' action="">
                    <input type="email" name="email" autoComplete='off' placeholder='Email Address' />
                    <input type="password" name="password" placeholder='Password' />
                    <input type="password" name="cpassword" placeholder='Comfirm Password' />
                    <button className='submit_btn'>Signup</button>
                    {/* <span className='forgot_pass'>Forgot Password?</span> */}
                </form>

                <p className='login_with'>or signup with</p>

                <div className="social_icons">
                    <img className='icons google' src="/images/google.png" alt="google" />
                    <img className='icons facbook' src="/images/facebook.png" alt="facbook" />
                    <img className='icons twitter' src="/images/twitter.png" alt="twitter" />
                </div>

                <p className='have_account'>Don't have an account? <span >Create new now!</span></p>
                <p className='term_conditions'>By signing up, you're agree with our <span > Terms & Conditions</span></p>

            </div>

        </div>
    )
}

export default Signup