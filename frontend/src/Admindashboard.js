import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admindashboard.css';

const AdminDashboard = () => {
  const [view, setView] = useState('');
  const [flightView, setFlightView] = useState('');
  const [passengerView, setPassengerView] = useState('');
  const [arrivalsDeparturesView, setArrivalsDeparturesView] = useState('');

  const [arrivals, setArrivals] = useState([]);
  const [departures, setDepartures] = useState([]);
  const [passengers, setPassengers] = useState([]);

  const [newArrivalFlight, setNewArrivalFlight] = useState({ fno: '', fname: '', arr_time: '', origin: '', status: '',arrdate:'' });
  const [newDepartureFlight, setNewDepartureFlight] = useState({ fno: '', fname: '', dept_time: '', loc: '', status: '',seats: '',deptdate: '' });
  const [newPassenger, setNewPassenger] = useState({ pid: '', name: '', email: '', phone: '', flight: '', location: '', date: '', tstatus: '' });

  const [isEditingFlight, setIsEditingFlight] = useState(null);
  const [isEditingPassenger, setIsEditingPassenger] = useState(null);

  useEffect(() => {
    fetchArrivals();
    fetchDepartures();
    fetchPassengers();
  }, []);

  const fetchArrivals = async () => {
    const response = await axios.get('/api/Arrival/display');
    setArrivals(response.data);
  };

  const fetchDepartures = async () => {
    const response = await axios.get('/api/Departure/Display');
    setDepartures(response.data);
  };

  const fetchPassengers = async () => {
    const response = await axios.get('/api/Passenger/displaypass');
    setPassengers(response.data);
  };

  const handleAddArrivalFlight = async (e) => {
    e.preventDefault();
    try {
      if (isEditingFlight !== null) {
        await axios.put('/api/Arrival/Update', newArrivalFlight);
      } else {
        await axios.post('/api/Arrival/Insert', newArrivalFlight);
      }
      fetchArrivals();
    } catch (error) {
      console.error(error);
    }
    setNewArrivalFlight({ arrdate:'',fno: '', fname: '', arr_time: '', origin: '', status: '' });
    setIsEditingFlight(null);
  };

  const handleAddDepartureFlight = async (e) => {
    e.preventDefault();
    try {
      if (isEditingFlight !== null) {
        await axios.put('/api/Departure/update', newDepartureFlight);
      } else {
        await axios.post('/api/Departure/insert', newDepartureFlight);
      }
      fetchDepartures();
    } catch (error) {
      console.error(error);
    }
    setNewDepartureFlight({ deptdate:'',fno: '', fname: '', dept_time: '', loc: '',seats:'', status: '' });
    setIsEditingFlight(null);
  };

  const handleAddPassenger = async (e) => {
    e.preventDefault();
    try {
      if (isEditingPassenger !== null) {
        await axios.put(`/api/Passenger/Updatepass`, newPassenger);
      } else {
        await axios.post(`/api/Passenger/Insertpass`, newPassenger);
      }
      fetchPassengers();
    } catch (error) {
      console.error(error);
    }
    setNewPassenger({ pid: '', name: '', email: '', phone: '', flight: '', location: '', date: '', tstatus: '' });
    setIsEditingPassenger(null);
  };

  const handleDeleteFlight = async (type, index) => {
    try {
      const flight = type === 'arrivals' ? arrivals[index] : departures[index];
      if (type === 'arrivals') {
        await axios.delete(`/api/Arrival/Delete/${flight.fno}`);
      } else {
        await axios.delete(`/api/Departure/delete/${flight.fno}`);
      }
      type === 'arrivals' ? fetchArrivals() : fetchDepartures();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePassenger = async (index) => {
    try {
      await axios.delete(`/api/Passenger/Deletepass/${passengers[index].pid}`);
      fetchPassengers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleArrivalsDeparturesToggle = (type) => {
    setArrivalsDeparturesView(type);
    setFlightView('');
  };

  return (
    <div className="admin-dashboard">
      <div className="top-container">
        <button onClick={() => setView('flights')} className={view === 'flights' ? 'active' : ''}>
          Flights
        </button>
        <button onClick={() => setView('passengers')} className={view === 'passengers' ? 'active' : ''}>
          Passengers
        </button>
      </div>

      <div className="section-content">
        {view === 'flights' && (
          <div>
            <div className="section-buttons">
              <button onClick={() => handleArrivalsDeparturesToggle('arrivals')}>Arrivals</button>
              <button onClick={() => handleArrivalsDeparturesToggle('departures')}>Departures</button>
            </div>

            {arrivalsDeparturesView && (
              <div className="section-buttons">
                <button onClick={() => setFlightView('add')}>Add {arrivalsDeparturesView === 'arrivals' ? 'Arrival' : 'Departure'} Flight</button>
                <button onClick={() => setFlightView('display')}>Display {arrivalsDeparturesView === 'arrivals' ? 'Arrival' : 'Departure'} Flights</button>
              </div>
            )}

            {flightView === 'add' && arrivalsDeparturesView === 'arrivals' && (
              <div className="flight-section">
                <form className="flight-form" onSubmit={handleAddArrivalFlight}>
                  <h2>{isEditingFlight !== null ? 'Edit Arrival Flight' : 'Add Arrival Flight'}</h2>
                  <div className="form-group">
                  <label>Arrival Date:</label>
                    <input
                      type="text"
                      value={newArrivalFlight.arrdate}
                      onChange={(e) => setNewArrivalFlight({ ...newArrivalFlight, arrdate: e.target.value })}
                    />
                    <label>Arrival Time:</label>
                    <input
                      type="text"
                      value={newArrivalFlight.arr_time}
                      onChange={(e) => setNewArrivalFlight({ ...newArrivalFlight, arr_time: e.target.value })}
                    />
                    <label>Flight Name:</label>
                    <input
                      type="text"
                      value={newArrivalFlight.fname}
                      onChange={(e) => setNewArrivalFlight({ ...newArrivalFlight, fname: e.target.value })}
                    />
                    <label>Flight Number:</label>
                    <input
                      type="text"
                      value={newArrivalFlight.fno}
                      onChange={(e) => setNewArrivalFlight({ ...newArrivalFlight, fno: e.target.value })}
                    />
                    <label>Origin:</label>
                    <input
                      type="text"
                      value={newArrivalFlight.origin}
                      onChange={(e) => setNewArrivalFlight({ ...newArrivalFlight, origin: e.target.value })}
                    />
                    <label>Status:</label>
                    <input
                      type="text"
                      value={newArrivalFlight.status}
                      onChange={(e) => setNewArrivalFlight({ ...newArrivalFlight, status: e.target.value })}
                    />
                    <button type="submit">{isEditingFlight !== null ? 'Update Flight' : '+ Add Flight'}</button>
                  </div>
                </form>
              </div>
            )}

            {flightView === 'add' && arrivalsDeparturesView === 'departures' && (
              <div className="flight-section">
                <form className="flight-form" onSubmit={handleAddDepartureFlight}>
                  <h2>{isEditingFlight !== null ? 'Edit Departure Flight' : 'Add Departure Flight'}</h2>
                  <div className="form-group">
                  <label>Departure date:</label>
                    <input
                      type="text"
                      value={newDepartureFlight.deptdate}
                      onChange={(e) => setNewDepartureFlight({ ...newDepartureFlight, deptdate: e.target.value })}
                    />
                    <label>Departure Time:</label>
                    <input
                      type="text"
                      value={newDepartureFlight.dept_time}
                      onChange={(e) => setNewDepartureFlight({ ...newDepartureFlight, dept_time: e.target.value })}
                    />
                    <label>Flight Name:</label>
                    <input
                      type="text"
                      value={newDepartureFlight.fname}
                      onChange={(e) => setNewDepartureFlight({ ...newDepartureFlight, fname: e.target.value })}
                    />
                    <label>Flight Number:</label>
                    <input
                      type="text"
                      value={newDepartureFlight.fno}
                      onChange={(e) => setNewDepartureFlight({ ...newDepartureFlight, fno: e.target.value })}
                    />
                    <label>Destination:</label>
                    <input
                      type="text"
                      value={newDepartureFlight.loc}
                      onChange={(e) => setNewDepartureFlight({ ...newDepartureFlight, loc: e.target.value })}
                    />
                    <label>Seats:</label>
                    <input
                      type="text"
                      value={newDepartureFlight.seats}
                      onChange={(e) => setNewDepartureFlight({ ...newDepartureFlight, seats: e.target.value })}
                    />
                    <label>Status:</label>
                    <input
                      type="text"
                      value={newDepartureFlight.status}
                      onChange={(e) => setNewDepartureFlight({ ...newDepartureFlight, status: e.target.value })}
                    />
                    <button type="submit">{isEditingFlight !== null ? 'Update Flight' : '+ Add Flight'}</button>
                  </div>
                </form>
              </div>
            )}

            {flightView === 'display' && arrivalsDeparturesView === 'arrivals' && (
              <div>
                <h2>Arrivals</h2>
                <div className="table">
                  <div className="table-header">
                   <div>Arrival Date</div>
                    <div>Flight No</div>
                    <div>Flight Name</div>
                    <div>Arrival Time</div>
                    <div>Origin</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {arrivals.map((arrival, index) => (
                    <div className="table-row" key={arrival.fno}>
                      <div>{arrival.arrdate}</div>
                      <div>{arrival.fno}</div>
                      <div>{arrival.fname}</div>
                      <div>{arrival.arr_time}</div>
                      <div>{arrival.origin}</div>
                      <div>{arrival.status}</div>
                      <div className="actions">
                        <button onClick={() => {
                          setFlightView('add');
                          setIsEditingFlight(index);
                          arrivalsDeparturesView === 'arrivals' ?setNewArrivalFlight(arrivals[index]): setNewDepartureFlight(departures[index]);
                          setNewArrivalFlight(arrival); setIsEditingFlight(index); }}>Edit</button>
                        <button onClick={() => handleDeleteFlight('arrivals', index)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {flightView === 'display' && arrivalsDeparturesView === 'departures' && (
              <div>
                <h2>Departures</h2>
                <div className="table">
                  <div className="table-header">
                  <div>Departure date</div>
                    <div>Flight No</div>
                    <div>Flight Name</div>
                    <div>Departure Time</div>
                    <div>Destination</div>
                    <div>Seats</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {departures.map((departure, index) => (
                    <div className="table-row" key={departure.fno}>
                      <div>{departure.deptdate}</div>
                      <div>{departure.fno}</div>
                      <div>{departure.fname}</div>
                      <div>{departure.dept_time}</div>
                      <div>{departure.loc}</div>
                      <div>{departure.seats}</div>
                      <div>{departure.status}</div>
                      <div className="actions">
                        <button onClick={() => {
                          setFlightView('add');
                          setIsEditingFlight(index);
                          arrivalsDeparturesView === 'departures' ?setNewArrivalFlight(departures[index]): setNewDepartureFlight(arrivals[index]);
                           setNewDepartureFlight(departure); setIsEditingFlight(index); }}>Edit</button>
                        <button onClick={() => handleDeleteFlight('departures', index)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {view === 'passengers' && (
          <div>
           
            <div className="passenger-section">
              
              <button onClick={() => setPassengerView('display')}>Display Passengers</button>
            </div>

           {passengerView === 'add' && (
              <div className="passenger-form">
                <form onSubmit={handleAddPassenger}>
                  <h2>{isEditingPassenger !== null ? 'Edit Passenger' : 'Add Passenger'}</h2>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      value={newPassenger.name}
                      onChange={(e) => setNewPassenger({ ...newPassenger, name: e.target.value })}
                    />
                    <label>Email:</label>
                    <input
                      type="email"
                      value={newPassenger.email}
                      onChange={(e) => setNewPassenger({ ...newPassenger, email: e.target.value })}
                    />
                    <label>Phone:</label>
                    <input
                      type="text"
                      value={newPassenger.phone}
                      onChange={(e) => setNewPassenger({ ...newPassenger, phone: e.target.value })}
                    />
                    <label>Flight:</label>
                    <input
                      type="text"
                      value={newPassenger.flight}
                      onChange={(e) => setNewPassenger({ ...newPassenger, flight: e.target.value })}
                    />
                    <label>Location:</label>
                    <input
                      type="text"
                      value={newPassenger.location}
                      onChange={(e) => setNewPassenger({ ...newPassenger, location: e.target.value })}
                    />
                    <label>Date:</label>
                    <input
                      type="date"
                      value={newPassenger.date}
                      onChange={(e) => setNewPassenger({ ...newPassenger, date: e.target.value })}
                    />
                    <label>Status:</label>
                    <input
                      type="text"
                      value={newPassenger.tstatus}
                      onChange={(e) => setNewPassenger({ ...newPassenger, tstatus: e.target.value })}
                    />
                    <button type="submit">{isEditingPassenger !== null ? 'Update Passenger' : '+ Add Passenger'}</button>
                  </div>
                </form>
              </div>
            )}

            {passengerView === 'display' && (
              <div>
                <h2>Passengers</h2>
                <div className="table">
                  <div className="table-header">
                    <div>Passenger ID</div>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Flight</div>
                    <div>Location</div>
                    <div>Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {passengers.map((passenger, index) => (
                    <div className="table-row" key={passenger.pid}>
                      <div>{passenger.pid}</div>
                      <div>{passenger.name}</div>
                      <div>{passenger.email}</div>
                      <div>{passenger.phone}</div>
                      <div>{passenger.flight}</div>
                      <div>{passenger.location}</div>
                      <div>{passenger.date}</div>
                      <div>{passenger.tstatus}</div>
                      <div className="actions">
                        <button onClick={() => {
                          setPassengerView('add');setIsEditingPassenger(index);setNewPassenger(passenger);
                          setNewPassenger(passenger); setIsEditingPassenger(index); }}>Edit</button>
                        <button onClick={() => handleDeletePassenger(index)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
