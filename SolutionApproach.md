<div align = 'center'>

# Solution Approach

</div>

## **1. Introduction**
The **Customer Service Platform** is designed to streamline customer interactions by enabling users to submit categorized queries and seamlessly integrates with Intercom for real-time support. The solution ensures secure user authentication, efficient query management, and effective communication between users and support agents.

---

## **2. Objectives**
The primary objectives of the solution are:
- **Secure user authentication** using Google OAuth.
- **Efficient query categorization** and management.
- **Seamless integration** with Intercom for enhanced user-agent communication.
- **Persistent data storage** and retrieval using MongoDB.

---

## **3. System Architecture**
### High-Level Architecture:
- **Frontend**: Built with **React** and **Tailwind CSS**, the frontend handles user interactions, query submissions, and displays categorized data.
- **Backend**: Developed using **Node.js** and **Express.js**, the backend manages authentication, API endpoints, and integration with Intercom.
- **Database**: **MongoDB** is used for persistent storage of user and query data.

---

## **4. Key Features**
- **Secure Authentication**: Google OAuth ensures safe login and session management.
- **Query Categorization**: Organized display and retrieval of queries by category.
- **Real-Time Support**: Intercom integration facilitates instant communication between users and support agents.
- **Data Persistence**: MongoDB ensures reliable storage and retrieval of data.

---

<div style="page-break-after: always;"></div>

# Solution Workflow

### **4.1 User Authentication**
1. Users log in via **Google OAuth**.
2. The backend verifies the Google token and generates a session for the user.
3. On successful login, users are redirected to the dashboard.

---

### **4.2 Query Submission and Management**
1. Users can create a new request by selecting a category and adding a comment.
2. The frontend sends the request data to the backend via the `/services` POST API.
3. The backend saves the data in **MongoDB** under the appropriate category.
4. Queries are displayed in their respective categories on the dashboard.

---

### **4.3 Intercom Integration**
1. The **Intercom widget** is embedded in the frontend for direct communication with support agents.
2. Each query submitted by the user is also sent to **Intercom** via the backend.
3. Support agents can interact with users directly through **Intercom**.

---

### **4.4 Logout Functionality**
1. Users can securely log out by clicking the **Logout** button, which ends the session and redirects them to the login page.

---

## **5. Technologies Used**
| **Component**        | **Technology**          |
|-----------------------|-------------------------|
| **Frontend**          | React, Tailwind CSS, TypeScript |
| **Backend**           | Node.js, Express.js, TypeScript |
| **Database**          | MongoDB                |
| **Third-Party Tools** | Intercom API, Google OAuth |

---

## **6. Conclusion**
The proposed solution effectively addresses the challenges of managing customer queries by integrating secure authentication, query categorization, and real-time support. The system is scalable, user-friendly, and enhances the overall customer experience.


