Airport Directory System

A Full-Stack Web Application that manages and displays flight arrivals, departures, passenger data, and admin controls. Built with React for the frontend and Spring Boot with MySQL for the backend.

Features

Admin Panel:
- Secure admin login
- Add, update, and view flight details
- Manage passenger information
- Separate sections for Arrivals and Departures

Public Interface:
- View live arrival and departure schedules
- Search for flights by airline, flight number, or destination
- Responsive and user-friendly UI

Backend:
- REST APIs built using Spring Boot
- Integrated with MySQL Database
- Supports CRUD operations for flights and passengers

Tech Stack

Frontend: React.js, Axios, Bootstrap
Backend: Spring Boot, Java, REST API
Database: MySQL
Build Tools: Maven, npm
Hosting : AWS 

Project Structure

airport-directory/
- frontend (React application)
- backend (Spring Boot application)
- README.txt

Installation & Setup

Frontend (React):
cd frontend
npm install
npm start
Open http://localhost:3000 in your browser

Backend (Spring Boot):
cd backend
mvn spring-boot:run
The backend runs on http://localhost:8080
Ensure MySQL service is running and credentials match those in application.properties

Database Setup:
1. Create a MySQL database (for example: airport_db)
2. Update backend/src/main/resources/application.properties with your MySQL username and password
3. Run the backend server to auto-generate the required tables

API Endpoints (Sample)
GET /api/flights - Get all flights
POST /api/flights - Add new flight
GET /api/passengers - Get all passengers
POST /api/login - Admin login

Highlights
- Full-stack CRUD operations implemented
- Clean UI design using React and Bootstrap
- REST API integrated with MySQL database
- Proper folder structure for scalability
- Responsive layout for desktop and mobile

Future Improvements
- JWT-based authentication for admin
- Real-time flight data API integration
- Role-based user system
- Docker containerization

Author
Ashil Ravindran
Email: ashilravindran7@gmail.com


