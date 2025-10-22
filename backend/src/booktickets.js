import React, { useState } from 'react';
import axios from 'axios';
import './booktickets.css';
import SideMenu from './SideMenu';

function BookTickets() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    flight: '',
    location: '',
    date: '',
  });
  const [totalFare, setTotalFare] = useState(0);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [fareToDisplay, setFareToDisplay] = useState(0);
  const [seatError, setSeatError] = useState(false);

  const fareMapping = {
    Emirates: 500,
    "Air India": 400,
    SpiceJet: 300,
    "Kuwait Airways": 450,
    "Ethihad Airways": 550,
    "Qatar Airways": 600,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    
    if (name === 'flight') {
      const selectedFare = fareMapping[value.trim()] || 0;
      setTotalFare(selectedFare);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passengerData = {
      ...formData,
      tstatus: 'departure', 
    };

    try {
      
      const response = await axios.post('/api/Passenger/Insertpass', passengerData);
      
      if (response.data === "Booking Successfull") {
        
        setFareToDisplay(totalFare);
        setTransactionSuccess(true);
      } else {
        
        setSeatError(true);
        alert("Seats are full"); 
        return; 
      }
    } catch (error) {
      console.error("There was an error inserting the passenger!", error);
    }
  };

  
  if (transactionSuccess) {
    return (
      <div className="transaction-container">
        <div className="transaction-success">
          <div className="tickmark">&#10004;</div>
          <h2>Transaction Successful</h2>
          <p>Your booking has been completed successfully!</p>
          <p>Total Fare: ${fareToDisplay}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-tickets-container">
      {seatError && <div className="error-popup">Seats are full for the selected flight!</div>}
      <form onSubmit={handleSubmit}>
        <h2>Book Your Flight</h2>
        <div className="form-group">
          <label>Flight:</label>
          <select
            className="flights"
            name="flight"
            value={formData.flight}
            onChange={handleChange}
            required
          >
            <option value="">Select Flight</option>
            <option value="Emirates">Emirates</option>
            <option value="Air India">Air India</option>
            <option value="SpiceJet">Spice Jet</option>
            <option value="Kuwait Airways">Kuwait Airways</option>
            <option value="Ethihad Airways">Ethihad Airways</option>
            <option value="Qatar Airways">Qatar Airways</option>
          </select>
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Departure Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="passenger-form">
          
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Fare: ${totalFare}</label>
        </div>
        <button type="submit">Book Now</button>
      </form>
      <SideMenu />
    </div>
  );
}

export default BookTickets;
