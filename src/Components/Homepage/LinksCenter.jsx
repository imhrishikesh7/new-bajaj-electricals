import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LinksCenter = () => {
    const cardsData = [
        {
            id: 1,
            title: "Bajaj Support",
            description: "Our businesses are spread across Consumer Appliances and Lighting Solutions",
            link: "/card-1"
        },
        {
            id: 2,
            title: "Register Your Product",
            description: "Our businesses are spread across Consumer Appliances and Lighting Solutions",
            link: "/card-2"
        },
        {
            id: 3,
            title: "Service and Support",
            description: "Our businesses are spread across Consumer Appliances and Lighting Solutions",
            link: "/card-3"
        },
        {
            id: 4,
            title: "Partner Connect",
            description: "Our businesses are spread across Consumer Appliances and Lighting Solutions",
            link: "/card-4"
        },
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="marginal">
            {/* For large screens: Show the card layout */}
            <div className="hidden md:flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-3xl p-10 gap-4 w-full md:h-56 my-8 justify-center">
                {cardsData.map((card) => (
                    <motion.div
                        key={card.id}
                        className="relative flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg p-6 cursor-pointer overflow-hidden"
                        initial={{ width: "24%" }}
                        whileHover={{ width: "33%" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                        onHoverStart={() => setHoveredCard(card.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                    >
                        {/* Independent Title: centered when not hovered */}
                        <motion.h3
                            className="text-base font-semibold text-gray-800 mb-1 transition-all duration-500 ease-out"
                            style={{
                                position: 'absolute',
                                top: '40%',
                                zIndex: hoveredCard === card.id ? 0 : 10, // Title disappears when hovered
                                opacity: hoveredCard === card.id ? 0 : 1, // Fades out the title on hover
                            }}
                        >
                            {card.title}
                        </motion.h3>

                        {/* Hidden content with smoother reveal */}
                        <AnimatePresence>
                            {hoveredCard === card.id && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-gray-600 max-1300px:text-[14px] text-base w-full"
                                 >
                                    {/* Content Title (appears only when hovered) */}
                                    <motion.h3
                                        className="text-lg font-semibold text-gray-800 mb-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {card.title}
                                    </motion.h3>
                                    {/* Content description */}
                                    <p className="mb-2">{card.description}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Link appears only when the card is hovered */}
                        {hoveredCard === card.id && (
                            <motion.a
                                href={card.link}
                                className="absolute top-2 w-[45px] right-2 text-blue-500 hover:text-blue-700 underline"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <img src="./home/CTA Arrow.svg" alt="" />
                            </motion.a>
                        )}
                    </motion.div>
                ))}
            </div>


            {/* For mobile screens: Show button links */}
            <div className="md:hidden flex flex-col items-center gap-4">
                {cardsData.map((card) => (
                    <a
                        key={card.id}
                        href={card.link}
                        className="bg-blue-500 text-white rounded-2xl py-3 px-6 text-lg font-semibold w-full text-center"
                    >
                        {card.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LinksCenter;
