import React from "react";
import PropTypes from "prop-types";

const NewsUpdatesSection = ({ sectionTitle, video1, video2 }) => {
  return (
    <div className="bg-white py-8 px-60">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        {sectionTitle}
      </h2>

      {/* Video Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video 1 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-64 md:h-72"
            src={video1.src}
            title={video1.title || "Video 1"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-64 md:h-72"
            src={video2.src}
            title={video2.title || "Video 2"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

NewsUpdatesSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  video1: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  video2: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsUpdatesSection;
