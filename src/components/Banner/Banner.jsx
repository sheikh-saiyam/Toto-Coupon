import { useState } from "react";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://i.ibb.co.com/tqYFDx8/green-coupon-with-white-bg-6fb95c.jpg",
      alt: "Image 1",
    },
    {
      src: "https://i.ibb.co.com/YB88mTb/green-coupon-with-white-bg.jpg",
      alt: "Image 1",
    },
    {
      src: "https://i.ibb.co.com/fxGTCzT/green-coupon-with-white-bg-modified.jpg",
      alt: "Image 1",
    },
    {
      src: "https://i.ibb.co.com/xYbchJh/coupon.jpg",
      alt: "Image 3",
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
    <div className="carousel w-full relative rounded-2xl mb-12 lg:mb-24">
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
            className="w-full md:h-[550px] rounded-2xl lg:px-5 "
            alt={image.alt}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 text-white flex justify-center items-center"></div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute flex justify-between lg:justify-between bottom-0 lg:bottom-auto transform lg:-translate-y-1/2 left-0 right-0 lg:left-5 lg:right-5 lg:top-1/2 z-10">
        <button
          onClick={prevSlide}
          className="btn btn-active rounded-none lg:btn-circle"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-active rounded-none lg:btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
