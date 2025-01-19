
# Customer-Service-Platform

A web application for managing customer requests and providing real-time support using Intercom. This project consists of separate **Frontend** and **Backend** implementations integrated with Intercom.

---

## Frontend

### Project Info
The frontend is built with **React** and **Tailwind CSS**. It allows users to:
- Log in using Google OAuth.
- Submit service requests with categorized comments.
- Interact with the Intercom Messenger for live support.

---

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jeevan-v8/Customer-Service-Platform.git
   cd frontend    # Navigate to frontend directory
   npm install    # Install dependencies
   npm run dev.   # Start development server
   ```

### Features
- User Authentication: Log in using Google OAuth.
- Request Form: Submit categorized customer requests.
- Intercom Integration: Access the Intercom Messenger for real-time support.

## Technologies Used  

- React
- Tailwind CSS
- Axios
- Typescript  

frontend/
│
├── public/                  # Static files like index.html, images, etc.
│
├── src/                     # Main source code directory
│   ├── components/          # Reusable components (e.g., Navbar, QueryForm)
│   ├── pages/               # React pages (e.g., Dashboard, Login, etc.)
│   ├── services/            # API services (e.g., AuthService, QueryService)
│   ├── App.tsx              # Main entry point for React app
│   ├── index.tsx            # React rendering entry point
│
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Frontend dependencies


## Backend  

The backend handles the core server-side functionalities, including user authentication, form submission APIs, and integration with Intercom for customer support. Built with **Node.js**, **Express.js**, and **MongoDB**, it ensures seamless communication between the frontend and external APIs.  

---

## Project Info  
The backend enables:  
- **Google OAuth**: Secure authentication for users.  
- **Form Management**: Storing and retrieving categorized customer requests.  
- **Intercom Integration**: Automatically creating tickets and syncing user data with Intercom for customer support.  

---

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/jeevan-v8/Customer-Service-Platform.git 
   cd backend   # Navigate to backend
   npm install  # Install dependencies  
   npm run dev  # To start server
   ```
### Create a .env file in the root of the project with the following variables
```bash
PORT=8080
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
INTERCOM_ACCESS_TOKEN=your_intercom_access_token
```

backend/
│
├── controllers/             # Controllers for handling logic (e.g., AuthController, QueryController)
├── routes/                  # API routes (e.g., authRoutes, queryRoutes)
├── models/                  # Mongoose models for MongoDB (e.g., User, Query)
├── services/                # External services (e.g., IntercomService)
├── utils/                   # Utility functions (e.g., JWT utility)
├── .env                     # Environment variables
├── app.js                   # Express app setup
└── package.json             # Backend dependencies


## Features  

- **User Authentication**:  
  - Log in using Google OAuth for secure and seamless authentication.  

- **Form Management**:  
  - Submit customer requests with categorized comments through the `/services` POST API.  
  - Retrieve customer requests filtered by category and email via the `/services` GET API.  

- **Intercom Integration**:  
  - Automatically create tickets and sync user data with the Intercom platform.  

## Technologies Used  

- **Node.js**: Server-side runtime.  
- **Express.js**: Framework for building APIs.  
- **MongoDB**: NoSQL database for storing user and form data.  
- **Intercom API**: Managing customer tickets and support.  
- **Google OAuth**: Secure user authentication and session management. 

## API Endpoints  

### 1. User Authentication  
- **Route**: `/auth/google`  
- **Method**: `GET`  
- **Description**: Initiates Google OAuth login flow.  

### 2. Customer Requests  
- **Route**: `/services`  
- **Methods**:  
  - **POST**: Save a new customer request.  
  - **GET**: Retrieve requests by category and email. 

## Contact
If you have any questions or feedback, feel free to reach out to me:
- Email: [jeevankumar.krm@gmail.com](mailto:jeevankumar.krm@gmail.com)



