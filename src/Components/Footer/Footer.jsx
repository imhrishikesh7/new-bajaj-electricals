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
                        <div className="single_footer m-auto md:w-fit w-[60%]">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Our Brands</h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Bajaj Appliances</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Bajaj Lighting</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Nex</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Morphy Richards</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Nirlep</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Professional Lighting</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/4 w-full mx-auto md:mx-0 mb-6">
                        <div className="single_footer single_footer_address m-auto md:w-fit w-[60%]">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Consumer Care</h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Service Request Form</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Service and Support</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Be Our Service Centre</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Register Your Product</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Fix It Yourself</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Partner Login</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/4 w-full mx-auto md:mx-0 mb-6">
                        <div className="single_footer m-auto md:w-fit w-[60%]">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Corporate </h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">About Us</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Our Businesses</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Careers</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">CSR</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">ESG</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Investors</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Media</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/4 w-full mx-auto md:mx-0 mb-6">
                        <div className="single_footer m-auto md:w-fit w-[60%]">
                            <h4 className="text-white text-lg font-bold uppercase mb-6 border-b border-white pb-4">Contact Us</h4>
                            <ul className="space-y-2 text-[14px]">
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Bajaj Offices</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Store Locator</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Consumer Care</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Partners Login</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">RBP</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Unify</a></li>
                                <li><a href="#" className="text-gray-200 transition duration-300 ease-in-out hover:text-[#ff3666]">Any other business app?</a></li>
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
