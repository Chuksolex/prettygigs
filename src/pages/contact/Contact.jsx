import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-form-container">
                 
            <h1 style={{fontWeight:"bold", textAlign: "center"}}>Contact Us</h1>
            <p style={{ textAlign: "center"}}>We are here to support your success and growth.</p>
            <p style={{ textAlign: "center"}}> Please let us know how we can assist you?</p>  
          
          {/* <ServiceCarousel style={{width: "90%"}} /> */}
      
       <div className="row card-container">
        {/* Card 1: Service Carousel */}
        

        {/* Card 2: Talent Request */}
        <div className="col-md-6 mb-4">
          <Link to="/project-request" style={{textDecoration:'none'}}>
            <div className="card border border-secondary border-2" style={{ height: '300px', width: '100%' }}>
              <div className="card-body">
                <h2 style={{ fontSize: '2rem', padding: '10px', fontWeight: "bold" }}>Talent Request</h2>
                <p style={{width: "60%", marginLeft: '20%'}}>Provide us with your project details and hiring requirements and we'll get in touch with you.</p>
                <Link to="/project-request">
                  <button className="btn" style={{background: "#E36B09", fontSize: "1.2rem", border: "none", color: "white"}}>Make A Request</button>
                </Link>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 3: Support Request */}
        <div className="col-md-6 mb-4">
          <Link to="/help" style={{textDecoration:'none'}}>
            <div className="card border border-secondary border-2" style={{ height: '300px', width: '100%' }}>
              <div className="card-body">
                <h2 style={{ fontSize: '2rem', padding: '10px', fontWeight: "bold" }}>Support Request</h2>
                <p style={{width: "60%", marginLeft: '20%'}}>Need help or technical assistance with the use of our services? Contact our support team.</p>
                <Link to="/support-request">
                  <button className="btn" style={{background: "#E36B09", fontSize: "1.2rem", border: "none", color: "white"}}>Get A Support</button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
