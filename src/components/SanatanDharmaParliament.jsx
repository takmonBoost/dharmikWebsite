import React from "react";

const SanatanDharmaParliament = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-48 bg-gray-300">
      {/* Main Title */}
      <h1 className="text-3xl md:text-3xl font-bold text-blue-900 mt-20 text-center flex-grow">
        सनातन धर्म संसद – दिल्ली
      </h1>

      {/* Yellow Box at the bottom */}
      <div className="bg-yellow-400  rounded w-1/2 md:w-1/3 lg:w-64 lg:h-10 flex justify-center items-center  ">
        <p className="text-blue-900 text-lg md:text-xl font-medium text-center">
          सनातन धर्म संसद – दिल्ली
        </p>
      </div>
    </div>
  );
};

export default SanatanDharmaParliament;
