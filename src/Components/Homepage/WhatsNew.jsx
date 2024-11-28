import React from "react";
import Title from "../Global/Title";
import Slider from "react-slick";
import products from "../../json/homepage-json/products.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &#8249;
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &#8250;
    </div>
  );
};

const WhatsNew = () => {
  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.addedDate) - new Date(a.addedDate)
  );

  const settings = {
    arrows: true,
    dots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="marginal">
      <Title title1="Here’s" title2="What’s New" />
      <div className="max-w-screen-xl mx-auto py-8">
        <Slider {...settings}>
          {sortedProducts.map((product, index) => (
            <div key={product.id} className="p-3">
              <div className="relative bg-white rounded-lg shadow-custom hover:shadow-custom-hover transition-shadow duration-300">
                {index < 2 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    New
                  </div>
                )}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="px-3 py-4 bg-[#f6f6f6]">
                  <h3 className="text-lg font-semibold text-[#478EE2]">
                    {product.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 mt-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatsNew;
