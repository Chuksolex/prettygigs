import React from 'react';
import './About.scss';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    
    <div className="about-container">
       <Helmet>
       <link rel="sitemap" type="application/xml" href="/sitemap.xml" />     
              <title>About Us </title>
        <meta name="description" content="Prettygigs is a digital service platform offering various gigs: graphics design, web design, data analytics, writing and so on. ." />

        </Helmet>

      <div className='d-block'>
      <h1 className='aboutHeading'>About Us</h1>
      <p className='aboutIntro'>
        Welcome to Prettygigs, your trusted partner in delivering digital services with excellence.
        At Prettygigs, we believe in the power of quality services and seamless user experiences.
        Our commitment is to provide a platform where creativity meets reliability, and our users can confidently engage in a world of digital gigs.
      </p>


      </div>
      

      

      <div className='left-column'>
        <h2>Our Mission</h2>
        <p>
          Our mission at Prettygigs is to empower individuals and businesses by connecting them with skilled professionals working under our ecosystem.
          We strive to create an agency where talent thrives, and our users can achieve their goals efficiently and effectively.
        </p>
      </div>

      <div className='right-column'>
        <h2>Why Choose Prettygigs?</h2>
        <p>
          <strong>Expertise:</strong> Our team consists of industry experts and talented professionals dedicated to delivering top-notch services.
        </p>
        <p>
          <strong>Reliability:</strong> We understand the importance of reliability in the digital landscape. Prettygigs ensures secure transactions and dependable service delivery.
        </p>
        <p>
          <strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We are committed to providing excellent customer support and a user-friendly experience.
        </p>
        <p>
          <strong>Global Network:</strong> Prettygigs operates internationally, connecting users with a diverse pool of skilled professionals from around the world.
        </p>
      </div>

      <div className='left-column'>
        <h2>Our Team</h2>
        <p>
          Behind Prettygigs is a team of passionate individuals dedicated to making your experience exceptional.
          Our diverse team brings a wealth of experience in technology, design, and business to ensure the success of your digital gigs.
        </p>
      </div>

      <div className='right-column'>
        <h2>Contact Us</h2>
        <p>
          We value your feedback and inquiries. If you have any questions or if there's anything we can assist you with, please reach out to us at <a href="mailto:info@prettygigs.com">info@prettygigs.com</a>.
        </p>
        <div>
        <h2>Company Profile</h2>
        <p>
          Prettygigs is a subsidiary of Bemultimediahost Limited registered under the Company and Allied Matters CAC with RC Number: 1947672
        </p>
      </div>
      </div>
     
    </div>
  );
};

export default About;

