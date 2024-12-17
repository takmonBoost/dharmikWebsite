import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-600"
      onClick={onClick}
    >
      ▶
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-600"
      onClick={onClick}
    >
      ◀
    </div>
  );
};

const ImageSlider = () => {
  const sliderImages = [
    "https://vssct.com/wp-content/uploads/2024/12/delhi-ram-katha-1.jpg",
    "https://vssct.com/wp-content/uploads/2024/12/delhi-ram-katha-1.jpg",
    "https://vssct.com/wp-content/uploads/2024/04/banner-2.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div className="w-full max-w-full relative">
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index} className="h-64 sm:h-80 lg:h-96">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
