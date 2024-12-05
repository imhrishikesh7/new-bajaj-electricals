import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none ${isVisible ? 'opacity-100' : 'opacity-0'} hidden sm:block`}
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 100 100"
        className="transform rotate-0"
      >
        <path
          d="M 79.079 30.49 c -0.537 0.63 -1.483 0.708 -2.114 0.171 L 46.5 4.745 l 0 83.755 c 0 0.829 -0.671 1.5 -1.5 1.5 s -1.5 -0.671 -1.5 -1.5 l 0 -83.755 L 13.035 30.661 c -0.63 0.536 -1.577 0.461 -2.114 -0.171 c -0.537 -0.631 -0.46 -1.577 0.17 -2.114 L 44.029 0.357 c 0.016 -0.014 0.038 -0.019 0.054 -0.032 c 0.09 -0.07 0.182 -0.138 0.288 -0.187 c 0.026 -0.012 0.053 -0.016 0.079 -0.026 c 0.032 -0.013 0.063 -0.022 0.095 -0.032 C 44.694 0.032 44.847 0 45 0 c 0 0 0 0 0 0 s 0 0 0 0 c 0.153 0 0.306 0.032 0.455 0.08 c 0.032 0.01 0.063 0.019 0.094 0.032 c 0.026 0.01 0.053 0.015 0.079 0.027 c 0.106 0.049 0.198 0.117 0.288 0.187 c 0.017 0.013 0.038 0.018 0.054 0.032 l 32.937 28.019 C 79.539 28.913 79.616 29.859 79.079 30.49 z"
          style={{
            stroke: 'white',
            strokeWidth: '4',
            fill: 'white',
            fillRule: 'nonzero',
          }}
        />
      </svg>
    </button>
  );
};

export default GoToTopButton;
