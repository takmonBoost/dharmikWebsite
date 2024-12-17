import React from "react";

const UpcomingEvents = () => {
  return (
    <div
      className=" text-white py-10 bg-[url('https://vssct.com/wp-content/uploads/2021/03/tbc-bg-event.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay for readability */}
      <div className=" bg-opacity-60 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 uppercase">
            Upcoming Events
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Event 1 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex-1">
              <h3 className="text-xl font-bold text-red-600 mb-3">
                श्रीमद्भागवत कथा – मुंबई
              </h3>
              <p className="text-gray-700 mb-2">
                📍 कॉर्पोरेट पार्क ग्राउंड, सेक्टर २१, पेंढार मे
                <br />
                ट्रो स्टेशन के पास, खारघर गुरुद्वारा के सामने, खारघर नवी मुंबई
              </p>
              <p className="font-bold text-gray-800">
                दिनांक: 24 से 30 दिसंबर, 2024
              </p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                View Details
              </button>
            </div>

            {/* Event 2 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex-1">
              <h3 className="text-xl font-bold text-red-600 mb-3">
                श्री राम कथा – रोहिणी, दिल्ली
              </h3>
              <p className="text-gray-700 mb-2">
                📍 जापानी पार्क रोहिणी, दिल्ली
              </p>
              <p className="font-bold text-gray-800">
                दिनांक: 15 से 21 दिसंबर, 2024
              </p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                View Details
              </button>
            </div>
          </div>
          {/* View All Events Button */}
          <div className="text-center mt-8">
            <button className="bg-red-600 text-white py-2 px-7 rounded hover:bg-red-700 transition duration-300">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
