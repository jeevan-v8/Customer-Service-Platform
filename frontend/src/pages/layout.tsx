// "use client"

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CustomerServiceForm from "/Users/jeevan/Documents/frontend/src/components/customerserviceform.tsx";

// interface UserInfo {
//   name: string;
//   email: string;
//   image: string;
// }

// const Dashboard: React.FC = () => {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = localStorage.getItem('user-info');
//     if (data) {
//       const userData: UserInfo = JSON.parse(data);
//       setUserInfo(userData);
//     }
//   }, []);

//   // Function to open the form
//   const handleNewRequestClick = () => {
//     setIsFormVisible(true);
//   };

//   // Function to close the form
//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };
//   const handleLogout =() =>{
//     localStorage.removeItem('user-info');
//     navigate('/login');

//   }

//   return (
//     <div className="bg-[#F6F8FE] min-h-screen">
//       {/* Navbar */}
//       <div className="relative bg-[#F6F8FE] shadow-md">
//         <nav className="flex items-center justify-between px-20 py-4">
//           <div className="flex items-center space-x-8">
//             <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
//               Home
//             </h1>
//             <div className="hidden md:flex space-x-6">
//               <a href="/general" className="text-gray-600 hover:text-gray-800 transition-colors">General</a>
//               <a href="/product" className="text-gray-600 hover:text-gray-800 transition-colors">Product Related </a>
//             </div>
//           </div>

//           {/* User Info on the right side */}
//           <div className="flex items-center space-x-4">
//             {userInfo ? (
//               <div className="flex items-center space-x-8">
//                 <span className="text-gray-800 font-semibold">{userInfo?.name}</span>
//                 <img
//                   src={userInfo?.image}
//                   alt="User Profile"
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                  <button
//                     onClick={handleLogout}
//                     className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md">
//                       Logout
//                   </button>
//               </div>
//             ) : (
//               <span className="text-gray-800 font-semibold">Guest</span>
//             )}
//           </div>
//         </nav>
//       </div>

//       {/* "New Request" Button below navbar */}
//       <div className="flex justify-end items-center mt-4 px-20">
//         <button
//           onClick={handleNewRequestClick}
//           className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
//         >
//           New Request
//         </button>
//       </div>

//       {/* Customer Service Form */}
//       {isFormVisible && (
//         <div className="w-[38%] mx-auto my-4 bg-white p-4 shadow-lg rounded-lg">
//           <CustomerServiceForm onCancel={handleCloseForm} onSubmit={handleCloseForm} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// "use client";

// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import CustomerServiceForm from "../components/customerserviceform";

// interface UserInfo {
//   name: string;
//   email: string;
//   image: string;
// }

// const Layout: React.FC = () => {
//   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
//   const navigate = useNavigate();
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   useEffect(() => {
//     const data = localStorage.getItem("user-info");
//     if (data) {
//       const userData: UserInfo = JSON.parse(data);
//       setUserInfo(userData);
//     }
//   }, []);

//     // Function to open the form
//   const handleNewRequestClick = () => {
//     setIsFormVisible(true);
//   };

//   // Function to close the form
//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user-info");
//     navigate("/login");
//   };

//   return (
//     <div className="bg-[#F6F8FE]">
//       {/* Navbar */}
//       <div className="relative bg-[#F6F8FE] shadow-md">
//         <nav className="flex items-center justify-between px-20 py-4">
//           <div className="flex items-center space-x-8">
//             <Link to="/dashboard" className="text-gray-600 hover:text-gray-800 transition-colors">
//               General
//             </Link>
//             <div className="hidden md:flex space-x-6">
//               <Link to="/product" className="text-gray-600 hover:text-gray-800 transition-colors">
//                 Product Related
//               </Link>
//             </div>
//           </div>

//           {/* User Info on the right side */}
//           <div className="flex items-center space-x-4">
//             {userInfo ? (
//               <div className="flex items-center space-x-8">
//                 <span className="text-gray-800 font-semibold">{userInfo.name}</span>
//                 <img
//                   src={userInfo.image}
//                   alt="User Profile"
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <span className="text-gray-800 font-semibold">Guest</span>
//             )}
//           </div>
//         </nav>
//       </div>
//     {/* "New Request" Button below navbar */}
//       <div className="flex justify-end items-center mt-4 px-20">
//         <button
//           onClick={handleNewRequestClick}
//           className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md">
//             New Request
//         </button>
//        </div>

//        {/* Customer Service Form */}
//        {isFormVisible && (
//          <div className="w-[50%] mx-auto my-4 bg-white p-4 shadow-lg rounded-lg">
//            <CustomerServiceForm onCancel={handleCloseForm} onSubmit={handleCloseForm} />
//          </div>
//         )}
//     </div>
//   );
// };

// export default Layout;

"use client";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CustomerServiceForm from "../components/customerserviceform";
import IntercomInitializer from "../components/intercomMessenger";

interface UserInfo {
  name: string;
  email: string;
  image: string;
}

const Layout: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    if (data) {
      const userData: UserInfo = JSON.parse(data);
      setUserInfo(userData);
    }
  }, []);

  // Function to open the form
  const handleNewRequestClick = () => {
    setIsFormVisible(true);
  };

  // Function to close the form
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <div className="bg-[#F6F8FE]">
      {/* Navbar */}
      <div className="relative bg-[#F6F8FE] shadow-md">
        <nav className="flex items-center justify-between px-20 py-4">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800 transition-colors">
              General
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/product" className="text-gray-600 hover:text-gray-800 transition-colors">
                Product Related
              </Link>
              <IntercomInitializer />
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            {userInfo ? (
              <div className="flex items-center space-x-8">
                <span className="text-gray-800 font-semibold">{userInfo.name}</span>
                <img
                  src={userInfo.image}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <button
                  onClick={handleLogout}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <span className="text-gray-800 font-semibold">Guest</span>
            )}
          </div>
        </nav>
      </div>

      {/* "New Request" Button */}
      <div className="flex justify-end items-center mt-4 px-20">
        <button
          onClick={handleNewRequestClick}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          New Request
        </button>
      </div>

      {/* Modal */}
      {isFormVisible && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleCloseForm} // Close modal when clicking outside
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-[50%] bg-white p-6 shadow-lg rounded-lg relative">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
                onClick={handleCloseForm}
              >
                ✖
              </button>
              <CustomerServiceForm onCancel={handleCloseForm} onSubmit={handleCloseForm} />
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Layout;