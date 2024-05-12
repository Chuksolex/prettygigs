import React from 'react';
import './Terms.scss';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>

      <p>
        Welcome to Prettygigs! These terms and conditions outline the rules and regulations for the use of our platform.
        By accessing Prettygigs, you accept and agree to abide by these terms. If you disagree with any part of these terms, please do not use our platform.
      </p>

      <section>
        <h2>1. Use of Prettygigs</h2>
        <p>
          Prettygigs provides a platform where users can access digital services. To be able to order, message or carry out transactions on Prettygigs platform, Users musted be registered and logged in. Users agree not to use our platform for any illegal or unauthorized purpose.
        </p>
      </section>

      <section>
        <h2>2. User Accounts</h2>
        <p>
          Users are responsible for maintaining the confidentiality of their account information. Prettygigs is not liable for any unauthorized access or use of user accounts.
        </p>
      </section>

      <section>
        <h2>3. Service Transactions</h2>
        <p>
          Prettygigs provides trusted and well known payment gateways for payment for transaction. Users agree to provide accurate information and fulfill their obligations regarding service transactions. Prettygigs does not store your card details on our server, we rather link to the payment gateway (Flutterwave api) where your payment is securely handled on their end. The payment gateway only notifies Prettygigs of the success of the payment so that Prettygigs can render the good service you need.
          Prettygigs will not be held responsible for a user who uses a stolen card to make payment on the platform.
        </p>
      </section>
      <section>
        <h2>4. Refund Policy</h2>
        <p>
          Prettygigs has a transparent refund policy. Users may request a refund under the following conditions:
        </p>
        <ul>
          <li>Services are not delivered as described</li>
          <li>Services are of unsatisfactory quality</li>
          <li>Request is made within the specified refund period of 14 days after the number of reviews described in the gig description has been exhausted</li>
          <li>Service delay was not caused by failure of the User to provide resources needed to fulfil his or her order</li>
          <li>The User did state requirements that were confusing or which led to provision of the wrong service</li>

        </ul>
        <p>
          Prettygigs reserves the right to deny refund requests that do not meet these criteria.
        </p>
      </section>

      <section>
        
        <h2>4. Content</h2>
        <p>
          Users are responsible for the content they post on Prettygigs. Prettygigs reserves the right to remove any content that violates these terms.
        </p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          Prettygigs retains the rights to its intellectual property exceppt for a service the user has paid for and Prettygigs has successfuly completed. Users must obtain permission before using or reproducing any content from our platform.
        </p>
      </section>

      <section>
        <h2>6. Privacy</h2>
        <p>
          Prettygigs values user privacy. Our Privacy Policy outlines how we collect, use, and protect user information. By using Prettygigs, you consent to the terms of our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          Prettygigs reserves the right to terminate or suspend user accounts that violate these terms. Users can terminate their accounts at any time by contacting the Prettygigs Help & support.
        </p>
      </section>

      <section>
        <h2>8. Changes to Terms</h2>
        <p>
          Prettygigs may update these terms periodically. Users will be notified of significant changes. Continued use of Prettygigs after such changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about these terms, please contact us at <a href="mailto:legal@prettygigs.com">legal@prettygigs.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Terms;
