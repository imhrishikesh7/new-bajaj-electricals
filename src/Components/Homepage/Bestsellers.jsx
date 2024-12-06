import Title from '../Global/Title'
import React, { useState, useEffect } from "react";
import Bestsellersdata from "../../json/homepage-json/bestsellers.json"
// import { Link } from 'react-router-dom';
const Bestsellers = () => {
    const [tabs, setTabs] = useState([]);
    const [products, setProducts] = useState({});
    const [activeTab, setActiveTab] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        // Directly set the data from the imported JSON file
        setTabs(Bestsellersdata.tabs);
        setProducts(Bestsellersdata.products);
        setActiveTab(Bestsellersdata.tabs[0]); // Set the first tab as active by default
    }, []);

    return (
        <div className="marginal !mt-[7%]">
            <Title title1="Our" title2="Bestsellers" />

            <div className="">
                {/* Tabs - Dropdown for small screens */}
                <div className="mb-4">
                    {/* For larger screens, display tabs as buttons */}
                    <div className="hidden md:flex  space-x-2 mb">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1 rounded-full font-medium ${activeTab === tab
                                    ? "bg-[#e9ebf5] text-[#2c3fa1]"
                                    : "hover:bg-gray-200"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* For smaller screens, show a dropdown */}
                    <div className="md:hidden flex justify-center mb-8">
                        <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            {activeTab ? activeTab : "Select Tab"} {/* Show active tab or default text */}
                            <i className="fas fa-chevron-down ml-2"></i>
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
                                        className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${activeTab === tab
                                            ? "bg-blue-500 text-white"
                                            : "bg-white"
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
                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* Left Column - 2 cards stacked */}
                        <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-[49%] rounded-2xl overflow-hidden">
                            {products[activeTab]?.slice(0, 2).map((product) => (
                                <div
                                    key={product.id}
                                    className="group relative overflow-hidden  bg-white rounded-2xl shadow-lg flex-grow"
                                >
                                    {/* Wrapper div for background image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${product.imageUrl})`, // Assuming product has a unique imageUrl field
                                        }}
                                    ></div>

                                    {/* Content inside the card */}
                                    <a
                                        href=""
                                        className="p-4 rounded-2xl md:h-full h-[140px] bg-black bg-opacity-20 flex flex-col justify-end relative z-10"
                                    >
                                        <h3 className=" text-2xl mb-2 font-bold text-white">{product.title}</h3>
                                        <a
                                            href={products[activeTab][2].description}
                                            className="hidden sm:block text-sm font-semibold px-4 py-2 rounded-full bg-white w-fit text-[#2C3EA1] hover:bg-gray-200"
                                        >
                                            Shop Now
                                        </a>
                                    </a>
                                </div>

                            ))}
                        </div>

                        {/* Right Column - 1 card covering same height as 2 left cards */}
                        <div className="bg-white overflow-hidden md:h-[370px] rounded-2xl shadow-lg w-full sm:w-1/2 md:w-[49%] flex flex-col group">
                            {products[activeTab]?.[2] && (
                                <div className="relative flex-grow overflow-hidden">
                                    {/* Background image wrapper */}
                                    <div
                                        className="absolute inset-0  bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${products[activeTab][2].imageUrl})`,
                                        }}
                                    ></div>

                                    {/* Content that should be placed at the bottom */}
                                    <a href='' className="relative z-10 flex flex-col justify-end p-4 rounded-2xl md:h-full h-[140px] bg-black bg-opacity-20">
                                        <h3 className=" text-2xl font-bold text-white mb-2">
                                            {products[activeTab][2].title}
                                        </h3>
                                        <a
                                            href={products[activeTab][2].description}
                                            className="hidden sm:block text-sm font-semibold px-4 py-2 rounded-full bg-white w-fit text-[#2C3EA1] hover:bg-gray-200"
                                        >
                                            Shop Now
                                        </a>
                                    </a>
                                </div>
                            )}
                        </div>


                    </div>

                )}
            </div>
        </div>
    )
}

export default Bestsellers