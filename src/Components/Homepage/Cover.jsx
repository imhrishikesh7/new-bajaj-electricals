import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cover = ({ dataSource }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (typeof dataSource === "string") {
      // Fetch data from external JSON file
      fetch(dataSource)
        .then((response) => response.json())
        .then((data) => setSlides(data))
        .catch((error) => console.error("Error loading slides:", error));
    } else if (Array.isArray(dataSource)) {
      // Directly use provided array
      setSlides(dataSource);
    } else {
      console.error("Invalid data source for Carousel");
    }
  }, [dataSource]);

  const settings = {
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <div className="custom-dash"></div>,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="carousel-container md:h-[80vh]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.img} className="w-full" alt= "" />
            {/* <img src="./home/Banner.png" alt="" /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cover;
