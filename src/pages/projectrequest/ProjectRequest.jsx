import React, { useState } from 'react';
import './ProjectRequest.scss';
import ServiceCarousel from '../../components/servicescarousel/ServiceCarousel';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';

const ProjectRequest = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: null,
    projectDescription: '',
    budget: '',
    currency: 'USD', // Default currency
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleDateChange = (date) => {
    setProjectDetails((prevDetails) => ({ ...prevDetails, startDate: date }));
  };

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      phone: { number: value, country: country, formattedValue: formattedValue },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Validate the form and handle submission logic here
    if (validateForm()) {
      console.log('Submitted:', projectDetails);
      // Add logic to submit the form data
      submitProjectRequest();
    }
  };

  const validateForm = () => {
    // Implement your validation logic here
    // Example: Check if required fields are not empty
    return (
      projectDetails.name.trim() !== '' &&
      projectDetails.email.trim() !== '' &&
      projectDetails.phone.number && // Validate phone number presence
      projectDetails.projectDescription.trim() !== '' &&
      (!projectDetails.budget || !isNaN(projectDetails.budget)) // Validate if budget is a number
    );
  };

  const submitProjectRequest = async () => {
    try {
      const response = await fetch('https://phaxnetgigs.onrender.com/api/projectRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectDetails),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.error || 'Failed to submit project request. Check network and info and try again.');
      }

      console.log('Submitted:', data.message); // Log success message from the server
      // Optionally reset form fields or show a success message to the user
      alert(`Thank you ${projectDetails.name} for your request. You will hear from one of our team members soon.`);
      setLoading(false);
    } catch (error) {
      console.error('Error submitting project request:', error);
      setErr(error.message);
      alert(`Something went wrong: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 projectrequest">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-lg-row">
          <div className="col-lg-6 mb-2">
            <div className="text-center">
              <h1 style={{ fontWeight: 'bold' }}>Project Request</h1>
              <p>We are here to support your success and growth.</p>
              <p>Please let us know your hiring need.</p>
            </div>
            <ServiceCarousel />
          </div>
          <div className="col-lg-6 bg-light">
            <form onSubmit={handleSubmit} className="m-2 mb-4">
              <div className="mb-1 mt-3">
                <label htmlFor="name" className="form-label">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control custom-input w-100 "
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={projectDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email <span>*</span>
                </label>
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
              <div className="mb-1">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number <span>*</span>
                </label>
                <div style={{ display: 'flex' }}>
                  <PhoneInput
                    country={'us'}
                    inputStyle={{
                      width: '100%',
                      height: 'calc(1.5em + .75rem + 2px)',
                      fontSize: '1rem',
                      padding: '.375rem .75rem',
                      lineHeight: '1.5',
                      color: '#495057',
                      backgroundColor: '#fff',
                      border: '1px solid #ced4da',
                      borderRadius: '.25rem',
                    }}
                    placeholder="Enter your phone number"
                    value={projectDetails.phone.number || ''}
                    onChange={(value, country, e, formattedValue) =>
                      handlePhoneChange(value, country, e, formattedValue)
                    }
                    required
                  />
                </div>
              </div>

              <div className="mb-1">
                <label htmlFor="projectDescription" className="form-label">
                  Project Description <span>*</span>
                </label>
                <textarea
                  className="form-control fs-6"
                  id="projectDescription"
                  placeholder="Enter project description"
                  name="projectDescription"
                  style={{ width: '320px', height: '8rem' }}
                  value={projectDetails.projectDescription}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="proposedStartDate" className="form-label">
                  Proposed Start Date
                </label>
                <div style={{ maxWidth: '320px' }}>
                  <DatePicker
                    selected={projectDetails.startDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    className="form-control custom-input fs-6"
                    placeholderText="Select date"
                  />
                </div>
              </div>

              <div className="mb-1">
                <label htmlFor="budget" className="form-label">
                  Budget
                </label>
                <div className="input-group">
                  <select
                    className="form-control custom-input-budget1 fs-6"
                    style={{ width: '20%', height: '3rem' }}
                    name="currency"
                    value={projectDetails.currency}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="AUD">AUD</option>
                  </select>
                  <input
                    type="number"
                    className="form-control fs-6"
                    style={{ width: '80%', height: '3rem' }}
                    placeholder="Enter your budget"
                    name="budget"
                    value={projectDetails.budget}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button className="btn button mb-1 fs-6" type="submit">{loading ? "Sending Request..." : "Submit Request"}
              </button>
              <p>{err && err}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRequest;
