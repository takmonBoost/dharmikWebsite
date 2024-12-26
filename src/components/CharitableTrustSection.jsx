import React from "react";
import image1 from "../assets/client.jpg";

const CharitableTrustSection = () => {
  return (
    <section className="bg-white py-6 px-4 md:px-16 lg:px-20 -mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-red-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Vishwa Shanti Sewa Charitable Trust
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            This is a charitable trust which was established in the holy
            presence of Shantidoot Shradhey Param Pujya Anurag Das Ji Maharaj,
            under provision of Indian Trust Act on 20th April 2006. The Trust
            works all over India and in other countries of the world for various
            welfare activities.
          </p>
          <p className="italic text-gray-600 text-sm sm:text-base leading-relaxed">
            <strong>Param Pujya Anurag Das Ji Maharaj</strong> is a melodious
            Sankirtanist, and a humble humanitarian. He is awakened Nimbaraki,
            and devotee of <em>Shri Radha Sarveshwar</em>, optimistic and spell
            binder orator of <em>Bhagwat Katha</em>, and is popularly known as{" "}
            <strong>Hanuman Dham Wale</strong> by the loved ones.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center w-full mt-10 md:mt-0">
          <img
            src={image1}
            alt="Shri Devkinandan Thakurji Maharaj"
            className="w-40 sm:w-48 md:w-56 lg:max-w-md aspect-square rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CharitableTrustSection;
