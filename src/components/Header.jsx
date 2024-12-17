import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 mb-6">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
        श्री राम कथा - प्रयागराज
        <span className="block border-t-4 border-red-600 mt-1 w-24 mx-auto"></span>
      </h1>

      {/* Date */}
      <p className="text-gray-800 text-lg sm:text-xl">
        <strong className="text-black font-extrabold">दिनांक:</strong> 28 जनवरी से 05 फरवरी 2025
      </p>
    </div>
  );
};

export default Header;
