import React from "react";

const DonationCards = () => {
  // Card Data with Unique Images
  const cards = [
    {
      id: 1,
      title: "राधा मंडल",
      image: "https://vssct.com/wp-content/uploads/2024/12/radha-mandal-one-month.jpg",
      description:
        "२ व्यक्ति – रहना एवं भोजन प्रसाद की सेवा (भोजन एवं रहने की व्यवस्था, लकड़ी प्लाई वाला रूम + बेड एवं बिस्तर + अटैच English शीट वाशरूम)",
      included: "व्यक्ति सेवा 51,000",
    },
    {
      id: 2,
      title: "कृष्ण मंडल",
      image: "https://vssct.com/wp-content/uploads/2024/12/krishna-mandal-one-month.jpg",
      description:
        "२ व्यक्ति – रहना एवं भोजन प्रसाद की सेवा (भोजन एवं रहने की व्यवस्था, टीन के रूम वाटरप्रूफ + बेड एवं बिस्तर + कॉमन शौचालय)",
      included: "व्यक्ति सेवा 21,000",
    },
    {
      id: 3,
      title: "भक्त मंडल",
      image: "https://vssct.com/wp-content/uploads/2024/12/bhakt-mandal-one-month.jpg",
      description:
        "१ व्यक्ति – रहना एवं भोजन प्रसाद की सेवा (भोजन एवं रहने के लिए टेंट वाला हॉल + कॉमन शौचालय (महिला + पुरुष अलग))",
    },
    {
      id: 4,
      title: "पोथी सेवा",
      image: "https://vssct.com/wp-content/uploads/2024/12/pothi-seva.jpg",
      description: "पोथी सेवा",
    },
  ];

  return (
    <div className="relative bg-white py-2 px-1 md:px-20">
      {/* Card Grid */}
      <div className="max-w-7xl mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border-2 border-dashed border-red-300 rounded-lg p-4 text-center shadow-md"
          >
            {/* Image Section */}
            <div className="flex justify-center mb-4">
              <div className="relative w-56 h-32">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-md object-cover border-4 border-gray-200"
                />
              </div>
            </div>
            {/* Card Content */}
            <div className="text-gray-700 mt-28">
              <p className="text-sm font-semibold mb-2">{card.description}</p>
              {card.included && (
                <p className="text-blue-600 font-semibold mt-5">
                  सम्मिलित में ({card.included})
                </p>
              )}
            </div>
            {/* Register Button */}
            <button className="mt-4 bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700">
              रजिस्टर करें
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCards;
