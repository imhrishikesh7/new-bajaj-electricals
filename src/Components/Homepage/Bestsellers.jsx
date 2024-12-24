import Title from '../Global/Title';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bestsellersdata from "../../json/homepage-json/bestsellers.json";

const Bestsellers = () => {
  const [tabs, setTabs] = useState([]);
  const [products, setProducts] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setTabs(Bestsellersdata.tabs);
    setProducts(Bestsellersdata.products);
    setActiveTab(Bestsellersdata.tabs[0]); // Set the first tab as active by default
  }, []);

  return (
    <div className="marginal !mt-[7%] pb-0">
      <Title title1="Our" title2="Bestsellers" />

      <div>
        {/* Tabs - Dropdown for small screens */}
        <div className="mb-4">
          <div className="hidden md:flex text-white space-x-2 bg-gradient-to-r from-blue-500 to-blue-900 p-1 rounded-full w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-[2px] rounded-full font-medium ${
                  activeTab === tab
                    ? "bg-white text-[#2c3fa1]"
                    : "hover:bg-blue-200 duration-300 hover:text-[#2c3fa1] transition-color"
                }`}
              >
                {tab}   
              </button>
            ))}
          </div>

          {/* For smaller screens, show a dropdown */}
          <div className="md:hidden flex justify-center mb-4">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {activeTab || "Select Tab"} <i className="fas fa-chevron-down ml-2"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-20 mt-2 bg-white shadow-lg rounded-lg w-full max-w-[200px]">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setDropdownOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${
                      activeTab === tab ? "bg-blue-500 text-white" : "bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Cards */}
        {activeTab && (
          <div className="flex py-4 flex-wrap gap-4 justify-center">
            <AnimatePresence mode="wait">
              {/* Left Column - 2 cards */}
              <motion.div
                className="flex flex-col gap-4 w-full sm:w-1/2 md:w-[49%]"
                key={`left-column-${activeTab}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                {products[activeTab]?.slice(0, 2).map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="relative h-[200px] w-full">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <a
                        href={product.description}
                        className="absolute bottom-4 left-4 text-sm font-semibold px-4 py-2 bg-[#FFFF] text-black rounded-full hover:bg-gray-200 duration-300"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Right Column - 1 card */}
              {products[activeTab]?.[2] && (
               <motion.div
               className="relative bg-white rounded-2xl shadow-lg w-full sm:w-1/2 md:w-[49%] flex flex-col overflow-hidden"
               key={`right-column-${activeTab}`}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 0.4, delay: 0.2 }}
             >
               <div className="relative w-full md:h-full h-[200px]">
                 {/* Ensure the image fills the container */}
                 <img
                   src={products[activeTab][2].imageUrl}
                   alt={products[activeTab][2].title}
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 {/* Shop Now Button */}
                 <a
                   href={products[activeTab][2].description}
                   className="absolute bottom-4 left-4 text-sm font-semibold px-4 py-2 bg-[#FFFF] text-black rounded-full hover:bg-gray-200 duration-300"
                 >
                   Shop Now
                 </a>
               </div>
             </motion.div>
             
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bestsellers;
