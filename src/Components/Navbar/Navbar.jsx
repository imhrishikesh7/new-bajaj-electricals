import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop dropdown state
  const [hideTimer, setHideTimer] = useState(null); // Timer to prevent flickering
  const [activeMenuItem, setActiveMenuItem] = useState(null); // Tracks active menu item
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false); // New state for mobile "Our Brands" dropdown
  const [isMobileConOpen, setIsMobileConOpen] = useState(false); // New state for mobile "Our Brands" dropdown

  const handleMenuClick = (menu) => {
    setActiveMenuItem((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    // window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (menu) => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      setHideTimer(null);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setHideTimer(timer);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 left-0 w-full bg-white shadow-md z-50"
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/" className="md:w-[8vw] w-28 font-bold text-gray-800"><img className="" src="./global-assets/bel-logo.svg" alt="" /></a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 text-gray-800 text-base max-1300px:text-[14px] font-medium">
            {["Our Brands","Consumer Care", "Corporate" ].map((menu, index) => (
              <li
                key={menu}
                className={`relative group ${activeMenuItem === menu ? "" : ""}`}
                onClick={() => {
                  if (menu === "Corporate") {
                    window.open("https://www.bajajelectricals.com/", "_blank");// Replace with your specific link
                  } else {
                    handleMenuClick(menu);
                  }
                }}
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`cursor-pointer px-4 py-2 rounded-md transition ${activeMenuItem === menu ? "" : "hover:bg-blue-100"
                    }`}
                >
                  {menu}
                  {/* Conditionally render the icon for the second menu item */}
                  {/* {(index === 2 || index === 3) && 
                   <i className="fas fa-chevron-down ml-2 transition-transform duration-300 group-hover:rotate-180"></i>
                  } */}
                </span>

                {/* Dropdown menu logic */}
                {menu === "Our Brands" && activeDropdown === "Our Brands" && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 top-full w-[250px] bg-white shadow-lg mt-2 py-2 rounded-md z-10"
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://shop.bajajelectricals.com/">Bajaj Appliances</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://www.bajajelectricals.com/home-essentials-appliances/lighting/">Bajaj Lighting</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://nexlife.in/">Nex</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://morphyrichardsindia.com/">Morphy Richards</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://www.nirlep.com/">Nirlep</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://illumination.bajajelectricals.com/">Professional Lighting</a></li>
                    </motion.ul>
                  </AnimatePresence>
                )}
                  {menu === "Consumer Care" && activeDropdown === "Consumer Care" && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 top-full w-[200px] bg-white shadow-lg mt-2 py-2 rounded-md z-10"
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://shop.bajajelectricals.com/pages/service-request-form">Service Request Form</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://www.bajajelectricals.com/service-and-support/">Service and Support</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://shop.bajajelectricals.com/pages/register-your-product">Register Your Product</a></li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a target='_blank' href="https://www.bajajelectricals.com/fix-it-yourself/">Fix It Yourself</a></li>
                    </motion.ul>
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>


          <div className="hidden md:block">
            <a target="_blank" href="https://www.amazon.in/stores/BajajElectricals/BajajElectricals/page/0F14D851-B8A4-470B-A842-BD3BDE30E4E7" className="bg-blue-500 text-white  px-4 py-2 max-1300px:text-[12px] rounded-full hover:bg-blue-600 transition">
              Shop Now
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div
            className="md:hidden flex items-center cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span className="block h-1 w-full bg-gray-800"></span>
              <span className="block h-1 w-full bg-gray-800"></span>
              <span className="block h-1 w-full bg-gray-800"></span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-full bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            ></motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50"
            >
              <div className="p-4 flex flex-col gap-6">
                <div
                  className="text-gray-800 font-bold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Close
                </div>
                <ul className="flex flex-col gap-4 text-gray-800 font-medium">
                  <li className="cursor-pointer border-l-2 border-[#035dac] pl-2">Home</li>
                  <li className="cursor-pointer border-l-2 border-[#035dac] pl-2">Corporate</li>
                  <li>
                    <div
                      className="cursor-pointer flex justify-between items-center"
                      onClick={() => setIsMobileBrandsOpen((prev) => !prev)}
                    >
                      <span className="border-l-2 border-[#035dac] pl-2">Our Brands</span>
                      <span>{isMobileBrandsOpen ? "▲" : "▼"}</span>
                    </div>
                    <AnimatePresence>
                      {isMobileBrandsOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#035dac] pl-2 text-gray-600"
                        >
                          <li className="cursor-pointer">Bajaj Appliances</li>
                          <li className="cursor-pointer">Bajaj Lighting</li>
                          <li className="cursor-pointer">Nex</li>
                          <li className="cursor-pointer">Morphy Richards</li>
                          <li className="cursor-pointer">Nirlep</li>
                          <li className="cursor-pointer">
                            Professional Lighting
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  {/* <li className="cursor-pointer border-l-2 border-[#035dac] pl-2">Customer Care</li> */}
                  <li>
                    <div
                      className="cursor-pointer flex justify-between items-center"
                      onClick={() => setIsMobileConOpen((prev) => !prev)}
                    >
                      <span className="border-l-2 border-[#035dac] pl-2">Consumer Care</span>
                      <span>{isMobileConOpen ? "▲" : "▼"}</span>
                    </div>
                    <AnimatePresence>
                      {isMobileConOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#035dac] pl-2 text-gray-600"
                        >
                          <li className="cursor-pointer">Bajaj Appliances</li>
                          <li className="cursor-pointer">Bajaj Lighting</li>
                          <li className="cursor-pointer">Nex</li>
                          <li className="cursor-pointer">Morphy Richards</li>
                          <li className="cursor-pointer">Nirlep</li>
                          <li className="cursor-pointer">
                            Professional Lighting
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  {/* <li className="cursor-pointer border-l-2 border-[#035dac] pl-2">Store Locator</li> */}
                  <li>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                      Shop Now
                    </button>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
