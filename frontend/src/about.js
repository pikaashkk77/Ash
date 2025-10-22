import React from 'react';
import './about.css';
import SideMenu from './SideMenu';
import Marquee from 'react-fast-marquee';

const About = () => {
  return (
    <div className="about-container">
     
      <div className="marquee-overlay">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <h1>Welcome to Thiruvananthapuram International Airport</h1>
        </marquee>
      </div>

      
      <div className="about-content">
        <div className="text-content">
          <h2>About Us</h2>
          <p>
            At <strong>Trivandrum Airport Directory</strong>, we are committed to revolutionizing the way you experience air travel. Our platform provides comprehensive airport and flight information in real time, ensuring that both passengers and professionals in the aviation industry stay informed and connected.
          </p>

          <h2>Our Vision</h2>
          <p>
            Our vision is to create an all-in-one airport directory platform that not only enhances your travel experience but also simplifies it. Whether you’re planning a trip, looking for the latest flight details, or managing airport operations, <strong>Trivandrum International Airport</strong> is your reliable partner.
          </p>

          <h2>Key Features</h2>
          <p>
            <strong>Trivandrum Airport Directory</strong> offers real-time flight tracking, giving you up-to-the-minute updates on arrivals, departures, gate changes, and delays. Personalized notifications keep you informed of any updates specific to your flights or routes. For passengers, we provide full support, enabling you to book tickets, check airport services, and access important information to make your journey smoother. The app also includes administrative tools tailored for airport staff and managers to efficiently handle flight schedules, passengers, and logistics. Additionally, our interactive map allows travelers to easily navigate airports by identifying key areas such as gates, baggage claims, lounges, and essential services.
          </p>

          <h2>Our Mission</h2>
          <p>
            We aim to simplify the air travel experience by providing accurate, timely information in a user-friendly interface. Our app bridges the gap between passengers and airports, offering tools and services that keep you informed, whether you're catching a flight or managing airport operations.
          </p>

          <h2>Why Choose us?</h2>
          <p>
            <strong>Trivandrum Airport Directory</strong> provides comprehensive coverage for thousands of airports worldwide, ensuring that travelers and professionals have all the information they need at their fingertips. Our platform is efficient and easy to use, designed to deliver a hassle-free experience. We pride ourselves on providing real-time data to reduce stress and uncertainty, allowing you to enjoy a smoother journey. Our customer-centric approach means we focus on making your travel experience as convenient as possible, with services ranging from easy ticket booking to custom flight notifications.
          </p>

          <h2>Your Travel, Simplified</h2>
          <p>
            At <strong>Trivandrum Airport Directory</strong>, we’re here to ensure that your airport experience is stress-free, efficient, and enjoyable. Whether you're a frequent traveler or an aviation professional, our platform offers the tools you need to stay informed and connected, wherever you are.
          </p>
        </div>
        <SideMenu />
      </div>
    </div>
  );
};

export default About