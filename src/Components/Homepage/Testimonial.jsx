import React from 'react';
import Title from '../Global/Title';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    image: "./home/test-img.webp",
    name: "Jane Smith",
    company: "Fementum Odio Co.",
    remark: "Amazing service!",
    message: "I had an incredible experience with this company. The team was professional and delivered outstanding results.",
    rating: 5,
  },
  {
    id: 2,
    image: "./home/test2.png",
    name: "Neha Singh",
    company: "Fementum Odio Co.",
    remark: "Great support!",
    message: "The customer service was excellent. They answered all my questions and helped me find the perfect solution.",
    rating: 4,
  },
  {
    id: 3,
    image: "./home/test3.png",
    name: "Vaibhav Maheshwari",
    company: "Fementum Odio Co.",
    remark: "I really appreciate!",
    message: "The customer service was excellent. They answered all my questions and helped me find the perfect solution.",
    rating: 3.5,
  },
];

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
const Testimonial = () => {
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
    <div className='marginal'>
      <Title title1="Loved by" title2="Millions of Consumers" />
      <div className="w-full max-w-screen-xl mx-auto py-2 md:px-6">
        <Slider {...settings} >
          {testimonials.map((testimonial) => (
            <div className='w-full pt-4 pl-2'>
            <div
              key={testimonial.id}
              className="px-4" // Add spacing between cards
            >
              <div className="relative p-6 bg-[#F2F2F2] rounded-2xl shadow-lg">
                {/* Circle Image */}
                {/* <div className="absolute -top-5 -left-6 border-5 border-white w-32 h-32 rounded-full shadow-lg"> */}
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  /> */}
                  <img src="./home/quote.svg" className='absolute top-2 right-2 w-14' alt="" />
                {/* </div> */}

                {/* Testimonial Content */}
                <div className="pt-2">
                  {/* Name with Blue Gradient Background */}
                  <h3 className="text-base font-semibold text-right bg-gradient-to-r from-blue-500 to-blue-900 text-white w-fit py-1 px-4 rounded-full rounded-bl-none">
                    {testimonial.name}
                  </h3>

                  {/* Company Name */}
                  <p className="text-gray-500 text-sm text-right mt-1 w-fit ">{testimonial.company}</p>

                  {/* Remark */}
                  <p className="italic text-2xl font-semibold mt-2">{testimonial.remark}</p>

                  {/* Message */}
                  <p className="text-gray-700 text-[14px] mt-2">{testimonial.message}</p>

                  {/* Rating Stars */}
                  <div className="mt-4">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`inline-block text-xl ${
                          index < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
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
    </div>
  );
};

export default Testimonial;
