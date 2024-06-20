import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaEdit } from 'react-icons/fa'; // Import Font Awesome edit icon

const Profile = () => {
  // Dummy data
  const doctorName = 'Dr. John Doe';
  const specialization = 'Cardiologist';
  const experience = '10';
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis eu ligula ultricies dictum.';
  const imageUrl = 'https://via.placeholder.com/150'; // Placeholder image URL

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img
              src={imageUrl}
              alt="Doctor's profile"
              className="rounded-circle mx-auto d-block mt-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h3 className="card-title">{doctorName}</h3>
              <p className="card-subtitle mb-2 text-muted">{specialization}</p>
              <p className="card-text">
                <span className="text-muted">Experience:</span> {experience}+ years
              </p>
              <p className="card-text">{description}</p>
              <button className="btn btn-link text-secondary">
                <FaEdit /> Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
