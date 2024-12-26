import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/slider1.png"
import image2 from "../assets/slider2.png"
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
    image1,
    image2,
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
              className="w-full h-full object-fill "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
