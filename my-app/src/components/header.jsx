import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-100 text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
            <span>28 Jackson Street, Chicago, 7788569 USA</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope text-blue-500 mr-2"></i>
            <span>info.dento@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <i className="fab fa-facebook text-gray-500 hover:text-blue-500 cursor-pointer"></i>
          <i className="fab fa-twitter text-gray-500 hover:text-blue-500 cursor-pointer"></i>
          <i className="fab fa-google text-gray-500 hover:text-blue-500 cursor-pointer"></i>
          <i className="fab fa-linkedin text-gray-500 hover:text-blue-500 cursor-pointer"></i>
          <i className="fab fa-pinterest text-gray-500 hover:text-blue-500 cursor-pointer"></i>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="logo"
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold text-blue-600">DENTO</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">HOME</li>
          <li className="hover:text-blue-500 cursor-pointer">PAGES</li>
          <li className="hover:text-blue-500 cursor-pointer">ABOUT</li>
          <li className="hover:text-blue-500 cursor-pointer">SERVICE</li>
          <li className="hover:text-blue-500 cursor-pointer">PRICING</li>
          <li className="hover:text-blue-500 cursor-pointer">BLOG</li>
          <li className="hover:text-blue-500 cursor-pointer">CONTACT</li>
        </ul>

        {/* Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          BOOKING NOW
        </button>
      </div>
    </div>
  );
};

export default Navbar;
