import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Title from "../Global/Title";
import Slider from "react-slick";
import WhatsNewData from "../../json/homepage-json/products.json"; // Ensure this is the correct file for "What's New"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow2 custom-prev" onClick={onClick}>
      &#8249;
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow2 custom-next" onClick={onClick}>
      &#8250;
    </div>
  );
};

const WhatsNew = () => {
  const [activeCategory, setActiveCategory] = useState("fans"); // Default category
  const [sortedProducts, setSortedProducts] = useState([]);

  // Sorting and filtering logic
  useEffect(() => {
    if (WhatsNewData[activeCategory]) {
      const products = WhatsNewData[activeCategory].sort((a, b) => {
        const dateA = new Date(a.addedDate);
        const dateB = new Date(b.addedDate);
        return dateB - dateA; // Most recent first
      });
      setSortedProducts(products);
    } else {
      console.error(`Category "${activeCategory}" not found in WhatsNewData.`);
      setSortedProducts([]);
    }
  }, [activeCategory]);

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
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-900 py-1">
      <div className="marginal">
        <div className="text-white">
          <Title title1="Here’s" title3="What’s New" />
        </div>
        <div className="max-w-screen-xl mx-auto py-2">
          {/* Category Tabs */}
          <div className="flex justify-between items-center mb-4">
            <div className="hidden md:flex bg-white p-1 rounded-full space-x-2">
              {["fans", "mixer-grinders", "water-heaters"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-[2px] rounded-full font-medium ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white"
                      : "hover:bg-blue-200 duration-300 hover:text-[#2c3fa1] transition-color"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Product Slider with Animation */}
          <div className="py-2">
            {sortedProducts.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory} // Trigger animation on tab change
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.3 } },
                    exit: { opacity: 0, transition: { duration: 0.3 } },
                  }}
                >
                  <Slider {...settings}>
                    {sortedProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.4, delay: index * 0.1 }} // Stagger animation
                        className="p-3"
                      >
                        <div className="relative bg-white rounded-xl overflow-hidden shadow-custom hover:shadow-custom-hover transition-shadow duration-300">
                          {index < 2 && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              New
                            </div>
                          )}
                          <img
                            src={product.img}
                            alt={product.title}
                            className="w-[95%] mx-auto h-48 object-contain"
                          />
                          <div className="px-6 py-4 bg-[#f6f6f6] h-[110px]">
                            <h3 className="text-lg font-semibold text-[#478EE2]">
                              {product.title}
                            </h3>
                            <p className="max-1300px:text-[12px] text-[16px] text-gray-600 mt-2">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </Slider>
                </motion.div>
              </AnimatePresence>
            ) : (
              <p className="text-white text-center">No products available in this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
