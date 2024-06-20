import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

import loginBackground from '../../assets/images/doc_image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 d-none d-lg-flex login-image-container">
            <div className="login-image" style={{ backgroundImage: `url(${loginBackground})` }}></div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="login-form">
              <h1>Welcome Back</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" />
                </div>
                <div className="form-group">
                  <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
                </div>
                <button type="submit" className="btn custom-btn-block">Login</button>
              </form>
              <div className="signup-option mt-3">
                <span>Don't have an account?<Link to="/Signup">Signup</Link></span>
              </div>
              <div className="alternative-login mt-3">
                <button className="btn btn-light mr-2">
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faApple} />
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
