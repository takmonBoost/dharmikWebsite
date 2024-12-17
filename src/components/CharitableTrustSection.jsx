import React from "react";

const CharitableTrustSection = () => {
  return (
    <section className="bg-white py-10 px-1 -mt-16 md:px-20">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      {/* Left Section */}
      <div>
        <h2 className="text-red-600 text-2xl md:text-4xl font-bold mb-2">
          Vishwa Shanti Sewa Charitable Trust
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This a charitable trust which was established in the holy presence
          of Shantidoot Shradhey Shri Devkinandan Thakurji Maharaj, under
          provision of Indian Trust Act on 20th April 2006. The Trust works
          all over India and in other countries of the world for various
          welfare activities.
        </p>
        <p className="italic text-gray-600 leading-relaxed">
          <strong>Shri Devkinandan Thakur Maharaj Ji</strong> is a melodious
          Sankirtanist, and a humble humanitarian. He is awakened Nimbaraki,
          and, devotee of <em>Shri Radha Sarveshwar</em>, optimistic and spell
          binder orator of <em>Bhagwat Katha</em>, and is popularly known as{" "}
          <strong>Thakurji</strong> by the loved one's.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative flex justify-center">
        <img
          src="https://vssct.com/wp-content/uploads/elementor/thumbs/maharaj-ji-qna11ilza70097bg73jf762iz5n0vlv3t8gykg1ekg.png"
          alt="Shri Devkinandan Thakurji Maharaj"
          className="w-full md:max-w-xs lg:max-w-md"
        />
       
      </div>
    </div>
  </section>
  );
};

export default CharitableTrustSection;
