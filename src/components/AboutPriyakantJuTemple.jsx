import React from "react";

const AboutPriyakantJuTemple = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="https://vssct.com/wp-content/uploads/2024/05/15may.jpg" // Replace with the correct image path
            alt="Shri Priyakant Ju Temple"
            className="w-full h-auto rounded-lg shadow-lg lg:max-w-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            About Shri Priyakant Ju Temple
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Priyakant Ju Temple is an example of hard work and dedication of many lakh people
            who came forward and contributed towards the development of this huge temple.
            A great work can never be fulfilled without support from our loved ones.
            Contribution can be big and small but the efforts cannot be ignored. When Ram
            Saitu Bridge has been formed by monkeys, even squirrels participated in the formation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            So Priyakant Ju Temple is the association formed by the collaboration of many people.
            This is the holy place where devotee’s will get blessings showered by God.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Maharajshri’s life is dedicated to social welfare, i.e., your every step of
            activity is related to the welfare of humanity. Mainly, you bring people together
            through the Katha to meet with their social duties concerning the ancient culture
            and civilization. The result may be viewed directly through the huge gathering
            in the Katha. You have an imaginative skill to present your thoughts. You prove
            the mythological stories related to the present situation so easily that common
            people begin to come after the pattern delivered by you without a doubt. Thus,
            a series of social reformation begins here only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPriyakantJuTemple;
