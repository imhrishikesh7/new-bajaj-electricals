import React, { useState } from 'react';
import Title from '../Global/Title';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    image: "./home/test-img.webp",
    name: "Joshua",
    company: "Fementum Odio Co.",
    remark: "Efficient Heating, Assured Durability",
    message: "Enjoyed quick water heating with a 10-year tank warranty for lasting performance. Benefited from free installation within 8 hours, happy with the convenience and peace of mind with my new Bajaj water heater.",
    rating: 5,
  },
  {
    id: 2,
    image: "./home/test2.png",
    name: "Adarsh Verma",
    company: "Fementum Odio Co.",
    remark: "BAJAJ = Best choice",
    message: "After 2 years of use, the fan provides efficient cooling, great airflow, and a sleek design at a budget price. It’s quiet, energy-efficient, and perfect for medium to large rooms—a reliable and stylish everyday choice.",
    rating: 5,
  },
  {
    id: 3,
    image: "./home/test3.png",
    name: "Prasad T.",
    company: "Fementum Odio Co.",
    remark: "Excellent product",
    message: "The BLDC fan in Red Walnut is fantastic! Easy to install, highly energy-efficient, and much quieter than regular fans. The remote pairs easily and works across rooms—an unexpected, amazing feature. Truly impressed with its performance! 🤩",
    rating: 5,
  },
  {
    id: 4,
    image: "./home/test3.png",
    name: "Kushal Varma",
    company: "Fementum Odio Co.",
    remark: "Efficient and Reliable Steam Iron",
    message: "The Bajaj MX 45 Steam Iron is a fantastic addition to any household. Its sleek, lightweight design ensures comfortable use, while the 1600W heating element provides powerful, consistent steam. The non-stick soleplate glides effortlessly, and adjustable settings make ironing versatile. Safety features like auto-shutoff and anti-drip add convenience.",
    rating: 5,
  },
  {
    id: 5,
    image: "./home/test3.png",
    name: "Sudipto Sardar",
    company: "Fementum Odio Co.",
    remark: "A Quality product from Bajaj, as usual",
    message: "The build quality is excellent, as expected from Bajaj, a trusted name in water heaters and geysers. The product matches the image perfectly. Installation by Urban Company through Amazon was prompt (with an additional charge). It heats quickly and works well. However, connecting pipes aren’t included.",
    rating: 5,
  },
  {
    id: 6,
    image: "./home/test3.png",
    name: "Rahul Sharma",
    company: "Fementum Odio Co.",
    remark: "Very good product",
    message: "The soleplate is non-stick, making it easy to use. The product is durable, and the size is convenient. The iron is lightweight, and the heat control knob is a great feature.",
    rating: 5,
  },
  {
    id: 7,
    image: "./home/test3.png",
    name: "Sindhusagar Mohapatra",
    company: "Fementum Odio Co.",
    remark: "Very very nice 😊👍",
    message: "I’ve been using the Bajaj ceiling fan for months and am very satisfied. It’s affordable, durable, and easy to install with clear instructions. The fan cools rooms efficiently with three speed settings and is energy-efficient. Though slightly noisy at high speeds, it’s a reliable, value-for-money option.",
    rating: 5,
  },
  {
    id: 8,
    image: "./home/test3.png",
    name: "Divesh Jangid",
    company: "Fementum Odio Co.",
    remark: "Good Water heater for everyday usage",
    message: "The Bajaj Shield Series New Shakti 25L Water Heater is fantastic! It heats water efficiently, and the 25L capacity suits small to medium families. Its 5-star energy rating ensures efficiency, while safety features like dry heating and overheating protection add reassurance. The sleek, compact design fits perfectly in my bathroom.",
    rating: 5,
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    &#8249;
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    &#8250;
  </div>
);

const Testimonial = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="marginal">
      <Title title1="Loved by" title2="Millions of Consumers" />
      <div className="w-full max-w-screen-xl mx-auto py-2 md:px-6">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className="w-full pt-4 pl-2 md:h-[330px]" key={testimonial.id}>
              <div className="px-4 h-full">
                <div className="relative p-6 bg-[#F2F2F2] h-full rounded-2xl shadow-lg">
                  <img
                    src="./home/quote.svg"
                    className="absolute top-2 right-2 w-14"
                    alt=""
                  />
                  <div className="pt-2">
                    <h3 className="text-base font-semibold text-right bg-gradient-to-r from-blue-500 to-blue-900 text-white w-fit py-1 px-4 rounded-full rounded-bl-none">
                      {testimonial.name}
                    </h3>
                    <p className="italic text-xl font-semibold mt-4">{testimonial.remark}</p>
                    <p className="text-gray-700 text-[14px] mt-2">
                      {testimonial.message.split(' ').slice(0, 20).join(' ')}...
                    </p>
                 
                    
                      <button className="cta my-4"
                      onClick={() => openModal(testimonial)}
                      >
                        <span className="hover-underline-animation text-blue-400"> Read More </span>
                        <svg
  id="arrow-horizontal"
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="10"
  viewBox="0 0 46 16"
>
  <path
    id="Path_10"
    data-name="Path 10"
    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
    transform="translate(30)"
    fill="#1a54c5"
  ></path>
</svg>

                      </button>

                    <div className="mt-4">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`inline-block text-xl ${index < testimonial.rating
                              ? 'text-yellow-500'
                              : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-lg w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={closeModal}
                className="text-red-500 float-right text-lg font-bold"
              >
                &#10005;
              </button>
              <div>
                <h3 className="text-base font-semibold text-right bg-gradient-to-r from-blue-500 to-blue-900 text-white w-fit py-1 px-4 rounded-full rounded-bl-none">
                  {selectedTestimonial?.name}
                </h3>
                <p className="italic text-xl font-semibold mt-4">
                  {selectedTestimonial?.remark}
                </p>
                <p className="text-gray-700 mt-4">{selectedTestimonial?.message}</p>
                <div className="mt-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`inline-block text-xl ${index < selectedTestimonial.rating
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;