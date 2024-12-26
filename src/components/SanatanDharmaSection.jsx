import React from "react";
import image2 from "../assets/photo1.jpg"
import image3 from "../assets/photo2.jpg"
import image4 from "../assets/photo3.jpg"

const SanatanDharmaSection = () => {
  return (
    <div className="bg-pink-50 py-8 px-4">
      {/* Section Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        सनातन धर्म संसद - दिल्ली
      </h1>
      <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
        देश भर में जगह जगह सनातन यात्राओं के माध्यम से लोगो में सनातन धर्म और श्री कृष्ण
        जन्मभूमि के विषय में जागृति लाने का कार्य किया है
      </p>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 ">
        {/* First Image */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={image2} // Replace with the actual image URL
            alt="Event 1"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Second Image */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={image3} // Replace with the actual image URL
            alt="Event 2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Third Image */}
        <div className="overflow-hidden rounded-lg shadow-md ">
          <img
            src={image4} // Replace with the actual image URL
            alt="Event 3"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Fourth Image */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://vssct.com/wp-content/uploads/2024/11/IMG_0189-2048x1367.jpg" // Replace with the actual image URL
            alt="Event 4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300">
          View All Katha Pics
        </button>
      </div>

    </div>
  );
};

export default SanatanDharmaSection;
