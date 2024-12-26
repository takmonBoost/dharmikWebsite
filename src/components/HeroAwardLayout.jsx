import React from "react";

const HeroAwardLayout = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Parent Container for the Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-7 ">
        {/* Left Side: Image Section */}
        <div className="flex flex-col items-center justify-center text-center md:w-1/2">
          <img
            src="https://vssct.com/wp-content/uploads/2024/12/3dec-400x400.jpg" // Replace with actual image URL or import
            alt="Priyakant Ju Darshan"
            className="w-9/12 h-96 rounded-lg shadow-md aspect-square"
          />
          <h2 className="text-lg font-semibold mt-3">
            Priyakant Ju Darshan 03 December 2024
          </h2>
        </div>

        {/* Right Side: Video Section */}
        <div className="flex flex-col items-center justify-center text-center md:w-1/2">
          <div className="relative mb-4">
            <div className="w-96 max-w-7xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/NvwGsfdRhZI"
                title="Shrimad Bhagwat Katha Mumbai"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                allowFullScreen
              ></iframe>
            </div>
          </div>


          <h2 className="text-lg font-semibold mt-3 max-w-96 -ml-24s">
            The Hero Award, Texas USA | Special Guest Shri Devkinandan Thakur Ji
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroAwardLayout;


