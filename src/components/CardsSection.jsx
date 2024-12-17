import React from "react";

const CardsSection = () => {
  return (
    <div className="bg-gray-100 py-6">
      {/* Scrollable Container */}
      <div className="flex overflow-x-auto md:justify-center space-x-4 px-4">
        {/* Card 1 */}
        <div className="min-w-[200px] md:min-w-[250px] bg-white shadow-lg rounded-lg flex items-center justify-center h-32 hover:bg-blue-200 transition-colors duration-300">
          <p className="text-gray-800 font-semibold text-lg md:text-xl">
            आगामी कार्यक्रम
          </p>
        </div>

        {/* Card 2 */}
        <div className="min-w-[200px] md:min-w-[250px] bg-white shadow-lg rounded-lg flex items-center justify-center h-32 hover:bg-green-200 transition-colors duration-300">
          <p className="text-gray-800 font-semibold text-lg md:text-xl">
            फोटो गैलरी
          </p>
        </div>

        {/* Card 3 */}
        <div className="min-w-[200px] md:min-w-[250px] bg-white shadow-lg rounded-lg flex items-center justify-center h-32 hover:bg-yellow-200 transition-colors duration-300">
          <p className="text-gray-800 font-semibold text-lg md:text-xl">
            प्रियाकांत जू गोशाला
          </p>
        </div>

        {/* Card 4 */}
        <div className="min-w-[200px] md:min-w-[250px] bg-white shadow-lg rounded-lg flex items-center justify-center h-32 hover:bg-pink-200 transition-colors duration-300">
          <p className="text-gray-800 font-semibold text-lg md:text-xl">
            प्रियाकांत जू मंदिर
          </p>
        </div>

        {/* Card 5 */}
        <div className="min-w-[200px] md:min-w-[250px] bg-white shadow-lg rounded-lg flex items-center justify-center h-32 hover:bg-purple-200 transition-colors duration-300">
          <p className="text-gray-800 font-semibold text-lg md:text-xl">दान</p>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
