# Calculation Tree Application

This application allows users to start a chain of calculations with a starting number and perform various operations (addition, subtraction, multiplication, division) on the results. Users can register, log in, and participate in creating calculation trees. The application is built using Node.js, Express, MongoDB for the backend, and React for the frontend.

## Features

1. **User Registration**: Unregistered users can create an account with a username and password.
2. **User Authentication**: Registered users can log in with their credentials to receive a JWT.
3. **Role Management**: Upon successful authentication, users are promoted from "unregistered" to "registered".
4. **Calculation Tree**: Registered users can start a calculation with a starting number and perform various operations to build a tree of calculations.
5. **Operation Management**: Users can add operations to existing calculations and respond to any calculations by publishing new ones.

## File Structure
    |
    ├── controllers
    │   └── authController.js
    │   └── calculationController.js
    ├── middleware
    │   ├── authMiddleware.js
    ├── models
    │   ├── Calculation.js
    │   └── User.js
    ├── routes
    │   ├── authRoutes.js
    │   ├── calculationsRoutes.js
    └── index.js

## Files Description
- **controllers/authController.js**: Handles user registration and authentication.
- **controllers/calculationController.js**: Handles operations related to calculations.
- **middleware/authMiddleware.js**: Middleware to check if a request is authenticated by verifying the JWT.
- **models/Calculation.js**: Mongoose schema and model for calculations and operations.
- **models/User.js**: Mongoose schema and model for user data, including username, password, and role.
- **routes/auth.js**: Routes for user registration and login.
- **routes/calculations.js**: Routes for managing calculations and operations.
- **index.js**: Entry point for the Express server, setting up middleware and routes.

