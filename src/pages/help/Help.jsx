import React, { useState } from 'react';
import './Help.scss';
import ServiceCarousel from '../../components/servicescarousel/ServiceCarousel';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';

const Help = () => {
  const [projectDetails, setProjectDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    proposedStartDate: null,
    projectDescription: '',
    budget: '',
    currency: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleDateChange = (date) => {
    setProjectDetails((prevDetails) => ({ ...prevDetails, proposedStartDate: date }));
  };

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      phoneNumber: { number: value, country: country, formattedValue: formattedValue },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form and handle submission logic here
    if (validateForm()) {
      console.log('Submitted:', projectDetails);
      // Add logic to submit the form data
    }
  };

  const validateForm = () => {
    // Implement your validation logic here
    // Example: Check if required fields are not empty
    return (
      projectDetails.name.trim() !== '' &&
      projectDetails.email.trim() !== '' &&
      projectDetails.phoneNumber.trim() !== '' &&
      projectDetails.projectDescription.trim() !== ''
    );
  };

  return (
    <div className="container mt-5 projectrequest">
      <div className="row justify-content-center flex-lg-row">
        {/* On larger screens, title and carousel on the left, form on the right */}
        <div className="col-lg-6 mb-2 d-flex flex-column">
          {/* Title and description component */}
          <div className="text-center">
            <h1 style={{ fontWeight: 'bold' }}>Support Request</h1>
            <p>Do you have questions or need technical assistance?</p>
          </div>

          {/* Carousel component */}
          <ServiceCarousel />
        </div>

        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name <span>*</span></label>
              <input
                type="text"
                className="form-control custom-input"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={projectDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number <span>*</span></label>
              <PhoneInput
                country={'us'}
                placeholder="Enter your phone number"
                value={projectDetails.phoneNumber.number || ''}
                onChange={(value, country, e, formattedValue) =>
                  handlePhoneChange(value, country, e, formattedValue)
                }
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email <span>*</span></label>
              <input
                type="email"
                className="form-control custom-input"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={projectDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="projectDescription" className="form-label">Message <span>*</span></label>
              <textarea
                className="form-control"
                id="projectDescription"
                placeholder="Enter project description"
                name="projectDescription"
                style={{ width: '30rem', height: '10rem' }}
                value={projectDetails.projectDescription}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button className='btn btn-primary button' type="submit">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
