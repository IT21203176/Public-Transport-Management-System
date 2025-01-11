# Public Transport Ticketing System

## Introduction

The Public Transport Ticketing System is a comprehensive web application designed to streamline the ticket booking and management process for a public transport network. This system provides both a user interface for passengers and an admin panel for the management of routes, stations, and user details. The front end is developed using ReactJS, while the back end utilizes Node.js with Express.js for handling server-side operations. Data is stored in MongoDB, a NoSQL database that provides flexible and scalable storage solutions.

## User Features:

### User Registration & Login:
- Users can register and log in to the system using email or social login (Google).
- Verification emails are sent to ensure user authenticity.

### Reservation System:
- Users can view the available train seats, check the cost of tickets, and make reservations.
- After confirming the reservation, users receive an email with the reservation details and a unique QR code.

### QR Code Validation:
- The QR code can be scanned at the train station to retrieve the ticket, and again during the journey for verification purposes.
- If discrepancies in the departure station are found, passengers will be asked to pay an additional fee.

### Booking History:
- Registered users can view their past bookings from their profile.

## Admin Features:

### User Management:
- Admins can manage user accounts, including the ability to disable or update user details.

### Admin Management:
- The main admin can create new admins, who will receive a confirmation email and can then log in using their unique credentials.

### Route & Train Management:
- Admins can create, update, and delete routes and train details, including station assignments and fare structure.

### Report Management:
- Admins can generate detailed reports for revenue tracking, including monthly and yearly financial reports in visual formats like bar and pie charts.

## Additional Features:

### Discount for Government Employees:
- Government employees can avail of special discounts by providing their NIC, which is validated through a government web service.

### Payment Options:
- Users can make payments via credit card or choose to pay in cash at the station.
- The system includes an option to top-up their account balance for future reservations.

### Real-Time Availability:
- The system updates seat availability in real-time, ensuring accurate information when making reservations.

## Architecture

This application follows the Model-View-Controller (MVC) architecture:

- **Model:** Represents the data (handled by MongoDB).
- **View:** Front-end is built using ReactJS, which serves as the user interface.
- **Controller:** The back-end logic is implemented in Node.js and Express.js, managing data flow between the front-end and database.

## Technologies Used:
- **ReactJS:** Frontend library for building user interfaces.
- **Node.js & Express.js:** Backend framework for server-side operations.
- **MongoDB:** NoSQL database for storing user and ticket data.
- **JWT Authentication:** For secure user login and token-based authorization.
- **QR Code Generation:** For creating and scanning QR codes for ticket validation.
- **Email & SMS Notification:** For sending reservation details and reminders.
- **Google API:** For social login functionality.

## Features Overview

### 1. Social Login
- Users can sign up and log in using their Google account, reducing the manual effort of entering details.

### 2. Real-Time Ticket Availability
- Users can view the available seats and the cost of reservations in real-time before confirming the booking.

### 3. Email & SMS Notifications
- Once a user makes a reservation, they receive a confirmation email with reservation details and a QR code. An SMS is also sent for additional confirmation.

### 4. Discounts for Government Employees
- Special discounts are available for government employees by validating their NIC number through an online service.

### 5. Payment Methods
- Users can make payments through card or cash. They can also top-up their account for future reservations.

### 6. Admin Panel
- The admin panel allows railway administrators to:
  - Manage users, including disabling accounts and updating information.
  - Manage train routes and schedules.
  - Generate detailed financial reports, including graphical reports (pie and bar charts).

## Installation

To run this application locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/public-transport-ticketing-system.git

2. Navigate to the project directory:

   ```bash
   cd public-transport-ticketing-system

3. Install dependencies:

For the backend (Node.js & Express)
    
    ```bash
    cd backend
    npm install

4. For the frontend (ReactJS):

   ```bash
   cd frontend
   npm install

5. Run the backend:

   ```bash
   npm start

6. Run the frontend:

   ```bash
   npm start

The application should now be running locally. You can access the frontend on http://localhost:3000 and the backend API on http://localhost:5000.

## Future Enhancements
- Integration with external payment gateways (e.g., Stripe, PayPal) for smoother transactions.
