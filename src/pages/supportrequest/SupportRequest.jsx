import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SupportRequest.scss';
import ReactGA from "react-ga4";

const SupportRequest = () => {
  ReactGA.send(
    {
      hitType: "pageview",
      page: '/support-request',
      title: "SupportRequest"
    }
  );

  ReactGA.event({
    category: 'User Interaction',
    action: 'Clicked Call to Action Button',
    label: 'SupportRequest',
  });
  
  const { isLoggedIn, currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [supportDetails, setSupportDetails] = useState({
    title: '',
    description: '',
    attachment: null,
    attachmentUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSupportDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 4 * 1024 * 1024) { // Check if file size is less than or equal to 4MB
      setSupportDetails((prevDetails) => ({ ...prevDetails, attachment: file }));
    } else {
      alert('File size exceeds 4MB');
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null); // Reset error state

    if (!isLoggedIn) {
      alert('Please log in or register to submit a support request.');
      navigate('/login');
      return;
    }

    setLoading(true);

    if (validateForm()) {
      try {
        let attachmentUrl = '';

        if (supportDetails.attachment) {
          const formData = new FormData();
          formData.append('file', supportDetails.attachment);
          formData.append('upload_preset', 'prettygigs_support'); // Replace with your Cloudinary upload preset

          const response = await axios.post('https://api.cloudinary.com/v1_1/bemultim/auto/upload', formData); // Replace with your Cloudinary URL
          attachmentUrl = response.data.url;

          console.log("attachment url",  attachmentUrl);
        }

        const supportRequestData = {
          title: supportDetails.title,
          description: supportDetails.description,
          attachmentUrl,
          user: currentUser._id // Assuming the user ID is stored in the currentUser object
        };

        const response = await axios.post('https://phaxnetgigs.onrender.com/api/supportRequest', supportRequestData);
   
        if (response.status === 200) {
          alert('Support request submitted successfully.');
          setSupportDetails({
            title: '',
            description: '',
            attachment: null,
            attachmentUrl: ''
          });
        } else {
          throw new Error('Failed to submit support request. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting support request:', error);
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const validateForm = () => {
    return (
      supportDetails.title.trim() !== '' &&
      supportDetails.description.trim() !== ''
    );
  };

  return (
    <div className="mt-5 supportrequest">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-lg-row">
          <div className="col-lg-6 mb-2">
            <div className="text-center">
              <h1 style={{ fontWeight: 'bold' }}>Support Request</h1>
              <p>We are here to assist you with any issues or questions.</p>
            </div>
          </div>
          <div className="col-lg-6 bg-light">
            <form onSubmit={handleSubmit} className="m-2 mb-4">
              <div className="mb-1 mt-3">
                <label htmlFor="title" className="form-label">
                  Title <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control custom-input w-100"
                  id="title"
                  placeholder="Title the issue"
                  name="title"
                  value={supportDetails.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="description" className="form-label">
                  Description <span>*</span>
                </label>
                <textarea
                  className="form-control fs-6"
                  id="description"
                  placeholder="Describe your issue"
                  name="description"
                  style={{ width: '320px', height: '8rem' }}
                  value={supportDetails.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="attachment" className="form-label">
                  Attach Evidence (optional, max 4MB)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                />
              </div>
              <button className="btn button mb-1 fs-6" type="submit">
                {loading ? "Sending Request..." : "Submit Request"}
              </button>
              {err && <p className="error-message">{err}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportRequest;






