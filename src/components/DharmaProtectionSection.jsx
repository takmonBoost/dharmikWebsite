import React from "react";

const DharmaProtectionSection = () => {
  const images = [
    // Replace these with the actual image URLs
    "https://vssct.com/wp-content/uploads/2024/11/465794349.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/464876508.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/464974688.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/465521448.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/465596157.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/465623182.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/465657579.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/465682904.jpg",
  ];

  return (
    <div className="bg-gray-50 py-8 px-4 md:px-12 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          धर्म की रक्षा के लिए आह्वान..!!
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          वृंदावन स्थित सुदामा कुटी पहुंचे पूज्य श्री देवकीनंदन ठाकुर जी महाराज ने वहां बड़ी
          संख्या में उपस्थित साधु-संतों और भक्तजनों के बीच खजूरी खास दिल्ली में होने जा रही
          विशाल सनातन धर्म संसद में सभी सनातनियों को पहुंचने का आह्वान किया। आप सभी
          सनातनियों से आग्रह है कि धर्म की रक्षा के लिए आगे आएं और 16 नवम्बर 2024 को
          खजूरी खास दिल्ली में होने जा रही विशाल सनातन धर्म संसद में उपस्थित होकर सनातन
          के इस संकल्प को पूर्ण करने में अपना योगदान दें।
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={src}
              alt={`Event image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DharmaProtectionSection;
