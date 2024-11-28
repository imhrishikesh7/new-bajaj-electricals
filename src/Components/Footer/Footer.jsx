import React from 'react';
const Footer = () => {
    return (
        <div
  className="pt-20 pb-10"
  style={{
    backgroundImage: `url('./global-assets/Bajaj-Electronics-Footer.png')`, // Close the quotation mark properly
    backgroundSize: "cover", // Ensure the image covers the entire div
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent repeating
  }}
>
            <div className="container mx-auto ">
                <div className="flex flex-wrap ">
                    <div className="lg:w-1/4 w-full mx-auto md:mx-0 mb-6">
                        <div className="single_footer m-auto w-fit">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Services</h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Simply dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">The printing and typesetting</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Standard dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/4 w-full mx-auto md:mx-0 mb-6">
                        <div className="single_footer single_footer_address m-auto w-fit">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Page Link</h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Simply dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">The printing and typesetting</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Standard dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/4 w-full mx-auto md:mx-0 mb-6">
                        <div className="single_footer m-auto w-fit">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Services</h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Simply dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">The printing and typesetting</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Standard dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/4 w-full mx-auto md:mx-0 mb-6">
                        <div className="single_footer m-auto w-fit">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Services</h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Simply dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">The printing and typesetting</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Standard dummy text</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:flex justify-evenly items-center border-t-[0.1px] border-white w-full pt-7">
                    <p className="copyright text-white text-sm text-center">
                        Copyright © {new Date().getFullYear()}{" "}
                        <a href="#" className="text-[#01c7e9] hover:text-[#ff3666]">
                            Bajaj Electricals
                        </a>.
                    </p>

                    <div className="social_profile w-fit m-auto mt-4 md:m-0">
                        <ul className="flex space-x-4">
                            <li className=''>
                                <a href="#" className="text-white border-[0.1px] border-white hover:bg-[#ff3666] hover:border-[#ff3666] hover:text-white w-12 h-12 flex justify-center items-center rounded-full border border-transparent transition">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white border-[0.1px] border-white hover:bg-[#ff3666] hover:border-[#ff3666] hover:text-white w-12 h-12 flex justify-center items-center rounded-full border border-transparent transition">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white border-[0.1px] border-white hover:bg-[#ff3666] hover:border-[#ff3666] hover:text-white w-12 h-12 flex justify-center items-center rounded-full border border-transparent transition">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white border-[0.1px] border-white hover:bg-[#ff3666] hover:border-[#ff3666] hover:text-white w-12 h-12 flex justify-center items-center rounded-full border border-transparent transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
