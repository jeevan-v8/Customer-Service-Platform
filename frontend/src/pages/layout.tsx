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