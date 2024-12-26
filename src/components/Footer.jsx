
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-900 text-white py-8 mt-6">
                {/* Inner container with green background */}
                <div className="bg-green-700 py-8 rounded-lg mx-auto max-w-6xl text-center">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Left Section */}
                        <div className="md:w-1/3 text-center md:text-left">
                            <img
                                src="https://vssct.com/wp-content/uploads/2024/04/vssct-logo-1.png" // Replace with actual logo URL
                                alt="Vishwa Shanti Sewa Logo"
                                className="w-60 mx-auto md:mx-0"
                            />
                            <h2 className="text-xl font-bold mt-4">VISHWA SHANTI SEWA</h2>
                            <p className="text-sm mt-2">
                                Vishwa Shanti Sewa Charitable Trust is a charitable trust which
                                was established in the holy presence of Shantidoot Shradhhey Shri
                                Devkinandan Thakurji Maharaj, under provision of Indian Trust Act
                                on 20th April 2006.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4 mt-4">
                                <a href="#" className="hover:text-gray-300">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="hover:text-gray-300">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="hover:text-gray-300">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        {/* Middle Section */}
                        <div className="md:w-1/3 text-center">
                            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
                            <ul className="space-y-2 md:space-y-4 flex flex-col  items-center md:items-start md:pl-20">
                                <li>
                                    <a href="#" className="hover:text-gray-300 flex items-center">
                                        <FaArrowRight className="mr-2" /> Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300 flex items-center">
                                        <FaArrowRight className="mr-2" /> About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300 flex items-center">
                                        <FaArrowRight className="mr-2" /> Donate Now
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300 flex items-center">
                                        <FaArrowRight className="mr-2" /> Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300 flex items-center">
                                        <FaArrowRight className="mr-2" /> Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/3 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
                            <p className="text-sm">
                                <strong>Head Office</strong>
                                <br />
                                Chhatikara Vrindavan Road, Near Vaishno Devi Mandir, Shri Dham
                                Vrindavan, U.P.-281121
                            </p>
                            <p className="mt-4">
                                <a href="tel:+917351112221" className="hover:text-gray-300">
                                    📞 +91-7351112221
                                </a>
                            </p>
                            <p>
                                <a href="tel:+917351113331" className="hover:text-gray-300">
                                    📞 +91-7351113331
                                </a>
                            </p>
                            <p className="mt-4">
                                <a href="mailto:info@vssct.com" className="hover:text-gray-300">
                                    📧 info@vssct.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="bg-gray-100 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center">
                    {/* Left Section */}
                    <div className="text-gray-700 text-sm text-center md:text-left">
                        © All rights reserved 2024{" "}
                        <span className="font-semibold text-blue-600">
                            Vishwa Shanti Sewa Charitable Trust
                        </span>
                    </div>

                    {/* Right Section */}
                    <div className="flex space-x-4 mt-2 md:mt-0 justify-center md:justify-start">
                        <a
                            href="#"
                            className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                        >
                            Terms & Conditions
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                        >
                            Refund Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>

        </>

    );
};

export default Footer;
