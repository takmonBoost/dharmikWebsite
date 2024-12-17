import React from "react";

const EventSchedule = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          श्रीमद् भागवत कथा – आगामी कथा कार्यक्रम
        </h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event 1 */}
          <div className="border-2 border-dashed border-red-500 rounded-lg shadow-lg p-4">
            {/* Video Embed */}
            <div className="relative mb-4">
              <iframe
                className="w-full h-full aspect-video rounded-lg"
                src="https://vssct.com/wp-content/uploads/2024/11/CujvXGJbBXjrqbTr.mp4"
                title="Shrimad Bhagwat Katha Mumbai"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Event Details */}
            <h3 className="text-2xl font-bold text-red-600 mb-2 text-center">
              श्रीमद्भागवत कथा – मुंबई
            </h3>
            <p className="text-gray-700 mb-2 font-semibold text-center ">
              दिनांक:{" "}
              <span className="font-normal text-center">24 से 30 दिसंबर, 2024</span>
            </p>
            <p className="text-gray-700 font-semibold text-center">
              कथा स्थल:{" "}
              <span className="font-normal text-center">
                कॉर्पोरेट पार्क ग्राउंड, सेक्टर २१, पेंढार मेट्रो स्टेशन के पास,
                खारघर गुरुद्वारा के सामने, खारघर नवी मुंबई
              </span>
            </p>
          </div>

          {/* Event 2 */}
          <div className="border-2 border-dashed border-red-500 rounded-lg shadow-lg p-4">
            {/* Video Embed */}
            <div className="relative mb-4">
              <iframe
                className="w-full h-full aspect-video rounded-lg"
                src="https://vssct.com/wp-content/uploads/2024/11/CujvXGJbBXjrqbTr.mp4"
                title="Shree Shiv Mahapuran Katha Bangalore"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Event Details */}
            <h3 className="text-2xl font-bold text-red-600 mb-2 text-center">
              श्रीशिव महापुराण कथा – बैंगलोर
            </h3>
            <p className="text-gray-700 mb-2 font-semibold text-center">
              दिनांक:{" "}
              <span className="font-normal text-center">03 से 09 जनवरी, 2025</span>
            </p>
            <p className="text-gray-700 font-semibold text-center">
              कथा स्थल:{" "}
              <span className="font-normal text-center">
                प्रिंसेस ग्राउंड, गेट नंबर – १, पैलेस ग्राउंड, बैंगलोर
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
