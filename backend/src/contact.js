import React from 'react';
import './contact.css';
import Marquee from 'react-fast-marquee'; 
import SideMenu from './SideMenu';

const Contact = () => {
  return (
    <div className="contact-page">
     
      <div className="marquee-overlay">
        <Marquee speed={50} gradient={false}>
          <h1>Welcome to Thiruvananthapuram International Airport - Contact Us for Support</h1>
        </Marquee>
      </div>

      
      <div className="contact-container">
        <h2>Contact Us</h2>
        <h3>Address</h3>
        <p>
          Thiruvananthapuram International Airport <br />
          Airport Rd, Chackai <br />
          Thiruvananthapuram, Kerala PIN-695024
        </p>
        <p>If you have any queries, feel free to reach out to us:</p>
        <p>
          Email: <a href="mailto:feedback@flightapptvm.com">feedback@flightapptvm.com</a>
        </p>
        <p>
          Contact Number <br />
          Domestic: 0471-2702311 <br />
          International: +1-800-555-5555
        </p>
      </div>

      <SideMenu />
    </div>
  );
};

export default Contact;
