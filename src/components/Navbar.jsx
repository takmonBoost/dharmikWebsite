import React, { useState } from 'react';
import navItemsData from '../Data/NavItemsData';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-red-600 font-bold text-lg">
            VISHWA SHANTI SEWA
          </span>
        </div>

        {/* Navigation Items */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItemsData.map((item, index) => (
            <li key={index} className="relative group">
              <div className="flex items-center space-x-1">
                <Link
                  to={item.path}
                  className="text-blue-900 font-medium transition duration-300 hover:bg-green-500 p-2 rounded-md hover:text-white"
                >
                  {item.title}
                </Link>
                {/* Dropdown Arrow */}
                {item.dropdown && (
                  <span className="text-gray-600 ">
                    <FaAngleDown />
                  </span>
                )}
              </div>
              {/* Dropdown */}
              {item.dropdown && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            {/* Hamburger Menu Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md">
          {navItemsData.map((item, index) => (
            <li key={index} className="relative group border-b">
              <div className="flex justify-between items-center px-4 py-2">
                <Link
                  to={item.path}
                  className="text-blue-900 font-medium hover:bg-green-500 p-2 rounded-md hover:text-white w-full"
                >
                  {item.title}
                </Link>
                {/* Dropdown Arrow */}
                {item.dropdown && (
                  <span
                    className="text-gray-600 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    {dropdownOpen === index ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                )}
              </div>

              {/* Dropdown */}
              {item.dropdown && dropdownOpen === index && (
                <div className="bg-gray-100">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-6 py-2 text-gray-700 hover:bg-green-500 hover:text-white"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
