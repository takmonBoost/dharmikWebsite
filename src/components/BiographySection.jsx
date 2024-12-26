import React from "react";
import image1 from "../assets/client4jpg.jpg"
const BiographySection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={image1} // Replace with the correct image path
            alt="Shri Anurag Das Ji Maharaj"
            className="w-80 h-60 rounded-lg shadow-lg lg:max-w-sm"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            About Shri Anurag Das Ji Maharaj
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Shri Anurag Das Ji Maharaj Ji is a melodious Sankirtanist, and a
            humble humanitarian. He is an awakened Nimbaraki, and devotee of
            <span className="text-blue-800 font-medium">
              {" "}Shree Radha arveshwar
            </span>
            , Optimistic and spellbinding Orator of
            <span className="text-blue-800 font-medium"> Bhagwat Katha</span>,
            and is popularly known as Thakurji by the loved one’s.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At the age of 13, under the shelter and by the blessings of his
            Sadguru, he studied and learned by heart the entire
            <span className="text-blue-800 font-medium">
              {" "}SHREEMAD BHAGWAT MAHAPURAN
            </span>
            when he was still a boy. He had a simple way of doing it, that of
            not taking his morning breakfast or even lunch unless he memorized
            a prescribed number of verses every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
