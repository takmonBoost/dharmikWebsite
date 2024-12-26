import React from "react";

const AboutSection = () => {
  return (
    <section className="relative ">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('https://vssct.com/wp-content/uploads/2024/05/about-us-1.jpg')", // Replace with the actual image URL
          height: "250px", // Set the height of the background image
          width: "100%", // Set the width of the background image
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0  opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-11">ABOUT OUR ORGANIZATION</h1>
        </div>

    
      </div>
    </section>
  );
};

export default AboutSection;
