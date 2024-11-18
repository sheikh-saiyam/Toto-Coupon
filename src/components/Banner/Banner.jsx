import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://i.ibb.co.com/gJ8CjDD/cool-background.png",
      alt: "Image 1",
      mainHeading: "ToTo-Coupon",
      heading: "Get The Best Coupon Code in Bangladesh",
    },
    {
      src: "https://via.placeholder.com/800x400/9538E2/FFFFFF?text=Image+2",
      alt: "Image 2",
      heading: "Your Heading Here 2",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  return (
    <div className="carousel w-full h-screen relative rounded-2xl mb-24">
      {/* Carousel Items */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img
            src={image.src}
            className="w-full h-full object-cover rounded-2xl"
            alt={image.alt}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 text-white flex justify-center items-center">
            <h2 className="text-3xl font-bold">{image.heading}</h2>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
