import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Signup.css';
import signupBackground from '../../assets/images/doc_image.jpg'; // Make sure you have the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 d-none d-lg-flex signup-image-container">
            <div className="signup-image" style={{ backgroundImage: `url(${signupBackground})` }}></div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="signup-form">
              <h1 className="text-center">Signup</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Signup</button>
              </form>
              <div className="text-center mt-3">
                <span>Already have an account? </span>
                <Link to="/login">Login</Link>
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

export default Signup;
