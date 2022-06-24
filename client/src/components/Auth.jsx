import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import signinImage from '../assets/signup.jpg';

const initialState = {
  fullName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarUrl: '',
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <div className="auth__form-container">
      <div className="auth__formcontainer_fields">
        <div className="auth__formcontainer_fields-content">
          <p>{isSignup ? 'Sign up' : 'Sign In'}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__formcontainer_fields-content_input">
                <label htmlFor="fullName">FullName:</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__formcontainer_fields-content_input">
              <label htmlFor="fullName">Username:</label>
              <input
                name="username"
                type="text"
                placeholder="User Name"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__formcontainer_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__formcontainer_fields-content_input">
                <label htmlFor="avatarUrl">Avatar Url:</label>
                <input
                  name="avatarUrl"
                  type="text"
                  placeholder="Avatar Url"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__formcontainer_fields-content_input">
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__formcontainer_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? 'Already have an account' : 'Dont have an account?'}
              <span onClick={switchMode}>
                {isSignup ? 'Sign in' : 'Sign Up'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="Sign In" />
      </div>
    </div>
  );
};

export default Auth;
