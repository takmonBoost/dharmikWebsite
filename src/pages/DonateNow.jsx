import React from "react";
import Navbar from "../components/Navbar";
import DonationCard from "../components/DonationCard";
import Footer from "../components/Footer";

const DonateNow = () => {
  return (
    <>
      <Navbar />
      {/* Header Section */}
      <div className="flex flex-col items-center justify-between w-full h-56 bg-gray-300">
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mt-10 mb-4 text-center">
          Donate
        </h1>

        {/* Yellow Box */}
        <div className="bg-yellow-400 rounded-lg w-3/4 md:w-1/3 lg:w-64 lg:h-12 flex justify-center items-center shadow-md">
          <p className="text-blue-900 text-lg md:text-xl font-medium text-center">
            Donate
          </p>
        </div>
      </div>

      {/* Donation Card Section */}
      <div className="flex justify-center mt-10 px-4">
        <DonationCard />
      </div>
      <Footer/>
    </>
  );
};

export default DonateNow;
