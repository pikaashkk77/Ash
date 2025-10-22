import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import BookTickets from "./booktickets";
import AdminAccess from "./AdminAccess";
import Admindashboard from './Admindashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-tickets" element={<BookTickets />} />
          <Route path="/admin-dashboard" element={<Admindashboard />} />
          <Route path="/admin-login" element={<AdminAccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
