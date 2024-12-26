import React from "react";

const ImageGallery = () => {
  const images = [
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4435-2048x1365.jpg", // Replace with actual image URLs
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4458-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4459-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4512-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4562-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4564-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4568-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4571-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4580-2048x1365.jpg",
    "https://vssct.com/wp-content/uploads/2024/11/BB8I4623-2048x1365.jpg",
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
