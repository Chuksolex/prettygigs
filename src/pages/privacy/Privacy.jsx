import React from 'react';
import './Privacy.scss';
import ReactGA from "react-ga4";

const Privacy = () => {
  ReactGA.send(
    {
      hitType: "pageview",
      page: '/privacy',
      title: "Privacy"
    }
  );

  ReactGA.event({
    category: 'User Interaction',
    action: 'Clicked Call to Action Button',
    label: 'Privacy',
  });
  
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>

      <p>
        Last updated: [December 18, 2023]
      </p>

      <p>
        Thank you for using Prettygigs, a digital service company specializing in rendering gigs online.
        This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.
        By using Prettygigs, you agree to the terms outlined in this policy.
      </p>

      <section>
        <h2>1. Information We Collect</h2>

        <h3>1.1 Personal Information</h3>
        <p>
          When you use Prettygigs, we may collect personal information, including but not limited to:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Payment information</li>
        </ul>

        <h3>1.2 Cookies and Local Storage</h3>
        <p>
          We use cookies to enhance user experience and for the functioning of our login system.
          These cookies are stored on your device's local storage. You can manage cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the collected information for the following purposes:
        </p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To process payments</li>
          <li>To improve and personalize user experience</li>
          <li>To communicate with users, including updates and promotional offers</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <p>
          Prettygigs takes the security of your data seriously.
          We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
        </p>
      </section>

      <section>
        <h2>4. International Operations</h2>
        <p>
          Prettygigs operates internationally. By using our services, you acknowledge and agree that your personal information may be processed in countries other than your own, including countries with different data protection laws.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          We may use third-party services to facilitate our services and enhance user experience. These third parties may have their own privacy policies governing the use of your information.
        </p>
      </section>

      <section>
        <h2>6. Your Choices</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Opt-out of promotional communications</li>
          <li>Manage cookie preferences</li>
        </ul>
      </section>

      <section>
        <h2>7. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy periodically. We will notify users of any significant changes via email or through our platform.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@prettygigs.com">contact@prettygigs.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
