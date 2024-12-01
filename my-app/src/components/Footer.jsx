import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-700 bg-opacity-90 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4  pt-10 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">DENTO</h2>
          <p className="text-gray-300 mb-4">
            Etiam auctor risus, dapibus ac eleifend katen, lacinia sitamet
            denim. Mauris sagittis kansa interdum dignissim.
          </p>
          <ul>
            <li className="mb-2">
               28 Jackson Street, Chicago, 7788569 USA
            </li>
            <li className="mb-2"> +84. 2252. 2250. 122</li>
            <li>📧 info.dento@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Mon-Wed: 8.00-18.00</li>
            <li>Thu-Fri: 8.00-17.00</li>
            <li>Sat: 9.00-17.00</li>
            <li>Sun: 10.00-17.00</li>
            <li>Holiday: Closed</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About</li>
            <li>Contact</li>
            <li>News</li>
            <li>Careers</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Policy</li>
            <li>Advisors</li>
            <li>Dentist</li>
            <li>Legals</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            We will send out weekly newest articles and some great offers.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-transparent border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 p-3 rounded-md text-white hover:bg-blue-600">
              ➤
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-500">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-500">
              Google+
            </a>
            <a href="#" className="hover:text-blue-500">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500">
              Pinterest
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-400">
        <p>
          Copyright ©2024 All rights reserved | This template is made with ❤️ by
          Colorlib
        </p>
      </div>
    </div>
  );
};

export default Footer;
