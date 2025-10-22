import React, { useState } from 'react';
import axios from 'axios';
import './home.css'; 
import { ButtonGroup, Button } from 'react-bootstrap';
import SideMenu from './SideMenu'; 
import { Table } from 'react-bootstrap';


function Home() {
  const [arrivals, setArrivals] = useState([]);
  const [departures, setDepartures] = useState([]);
  const [displayData, setDisplayData] = useState([]); 
  const [view, setView] = useState(''); 

  const handleArrivals = async () => {
    try {
      const response = await axios.get('/api/Arrival/display'); 
      setArrivals(response.data);
      setDisplayData(response.data); 
      setView('arrivals'); 
    } catch (error) {
      console.error('Error fetching arrivals:', error);
    }
  };

  const handleDepartures = async () => {
    try {
      const response = await axios.get('/api/Departure/Display'); 
      setDepartures(response.data);
      setDisplayData(response.data); 
      setView('departures'); 
    } catch (error) {
      console.error('Error fetching departures:', error);
    }
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <marquee behavior="scroll" direction="left" scrollamount="10"><h1>Welcome to Trivandrum International Airport </h1></marquee>
        <div className="button-group">
          <ButtonGroup>
            <Button variant="primary" onClick={handleArrivals}>ARRIVALS</Button>
            <Button variant="primary" onClick={handleDepartures}>DEPARTURES</Button>
          </ButtonGroup>
        </div>

        
        <div className="data-display">
          {view === 'arrivals' && (
            <div>
              <h2>Arrivals</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                  <th>Arrival Date</th>
                    <th>Flight No</th>
                    <th>Arrival Time</th>
                    <th>Airline</th>
                    <th>Origin</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((flight, index) => (
                    <tr key={index}>
                      <td>{flight.arrdate}</td>
                      <td>{flight.fno}</td>
                      <td>{flight.arr_time}</td>
                      <td>{flight.fname}</td>
                      <td>{flight.origin}</td>
                      <td>{flight.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          {view === 'departures' && (
            <div>
              <h2>Departures</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                  <th>Departure Date</th>
                    <th>Flight No</th>
                    <th>Departure Time</th>
                    <th>Airline</th>
                    <th>Destination</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((flight, index) => (
                    <tr key={index}>
                      <td>{flight.deptdate}</td>
                      <td>{flight.fno}</td>
                      <td>{flight.dept_time}</td>
                      <td>{flight.fname}</td>
                      <td>{flight.loc}</td>
                      <td>{flight.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
      <SideMenu /> 
    </div>
  );
}

export default Home;