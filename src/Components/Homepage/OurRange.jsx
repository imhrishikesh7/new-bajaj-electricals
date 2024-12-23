import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Title from '../Global/Title';

const staggerEffect = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.2, type: 'spring', stiffness: 100, damping: 10 },
    }),
};


const animations = {
    img1: {
        initial: { x: -60, y: -60, opacity: 1 }, // Initially visible but positioned off to the left
        visible: { 
            x: 0, 
            y: 0,
            opacity: 1, 
            transition: { 
                duration: 0.7, 
                ease: "easeOut" // Smooth easing
            } 
        }, 
    },
    img2: {
        initial: { x: 50, y: -50, opacity: 1 }, // Initially visible but positioned slightly off to the left
        visible: { 
            x: 0, 
            y: 0,
            opacity: 1, 
            transition: { 
                duration: 0.7, 
                ease: "easeOut" // Smooth easing
            } 
        }, 
    },
    img3: {
        initial: { y: 50, x: 470, opacity: 1 }, // Initially visible but positioned off to the bottom
        visible: { 
            y: 0, 
            x: 410,
            opacity: 1, 
            transition: { 
                duration: 0.5, 
                ease: "easeOut" // Smooth easing
            } 
        }, 
    },
};

const OurRange = () => {

    const [isHovered, setIsHovered] = useState(false);
    const parentRef = useRef(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="bg-[#f4f5fb] pt-5 pb-8"
        ref={parentRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div className="marginal">
                <Title
                    title1="Discover"
                    title2="Our Range"
                    desc="Discover a world of products that combine modern design, enduring quality, and thoughtful features—tailored to fit your lifestyle and every need."
                />
                <div className="w-full max-w-[1000px] mx-auto">
                    <div className="w-full md:flex md:justify-center relative my-4">
                        <div
                            className="group cursor-pointer rounded-2xl md:w-[320px] md:h-[150px] relative md:mr-4">
                            <motion.img
                                custom={0}
                                variants={staggerEffect}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                src="./home/range1.png"
                                alt="Bajaj"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <a href="" className="text-white text-lg font-semibold">Know More</a>
                            </div>
                            <motion.img
                                viewport={{ once: true }}
                                src="./home/rect1.svg"
                                initial="initial"
                                animate={isHovered ? "visible" : "initial"} // Changes on parent hover
                                variants={animations.img1}
                                className="elements w-[50px] absolute -left-16 bottom-0 hidden sm:block"
                                alt=""
                            />

                        </div>

                        <div
                            className="rounded-2xl md:w-[180px] relative "

                        >
                            <div className="group rounded-2xl cursor-pointer relative  md:top-6 md:mt-0 mt-4">
                                <motion.img
                                    custom={1}
                                    variants={staggerEffect}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    src="./home/range2.png"
                                    alt="Morphy Richards"
                                    className="w-full md:w-auto h-full object-cover rounded-2xl"
                                />
                                <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold">Know More</p>
                                </div>
                                <motion.img
                                    // initial={{ y: -100, opacity: 0 }}
                                  
                                    viewport={{ once: true }}
                                    initial="initial"
                                    animate={isHovered ? "visible" : "initial"} // Changes on parent hover
                                    variants={animations.img2}
                                    src="./home/rect2.svg"
                                    className="elements w-[45px] absolute -right-14 bottom-0 hidden sm:block"
                                    alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:flex  md:justify-center relative mt-4">
                        <div
                            className="group cursor-pointer  relative rounded-2xl md:w-[310px] md:mr-4"

                        >
                            <motion.img
                                custom={2}
                                variants={staggerEffect}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                src="./home/range3.png"
                                alt="Bajaj"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="rounded-2xl absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold">Know More</p>
                            </div>
                        </div>

                        <div
                            className="group rounded-2xl cursor-pointer relative rounded-2xl md:w-[210px] md:h-[170px] md:mr-4"

                        >
                            <motion.img
                                custom={3}
                                variants={staggerEffect}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                src="./home/range4.png"
                                alt="Morphy Richards"
                                className="w-full h-full object-cover rounded-2xl md:mt-0 mt-4"
                            />
                            <div className="rounded-2xl absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold">Know More</p>
                            </div>
                        </div>

                        <div
                            className="rounded-2xl relative"
                        >
                            <div className="group rounded-2xl cursor-pointer relative md:mt-4 md:w-[400px] mt-4 ">
                                <motion.img
                                    custom={4}
                                    variants={staggerEffect}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    src="./home/range5.png"
                                    alt="Nirlep"
                                    className="md:w-fit h-full w-full object-cover rounded-2xl"
                                />
                                <div className="rounded-2xl absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold">Know More</p>
                                </div>
                            </div>
                            <div className="group rounded-2xl cursor-pointer relative md:w-[390px] h-full md:mt-4 mt-4 md:absolute md:h-[150px] md:right-[59%]">
                                <motion.img
                                    custom={5}
                                    variants={staggerEffect}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    src="./home/range6.png"
                                    alt="Nex Fan"
                                    className="object-cover rounded-2xl w-full h-full"
                                />
                                <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold">Know More</p>
                                </div>
                                <motion.img
                                    // initial={{ y: 100, opacity: 0 }}
                                    // whileInView={{
                                    //     y: 0, opacity: 1, transition: { delay: 1, duration: 0.7, ease: "easeInOut" }
                                    // }}
                                    viewport={{ once: true }}
                                    src="./home/rect3.svg"
                                    className="elements w-[65px] absolute  top-0 hidden sm:block"
                                    initial="initial"
                                    animate={isHovered ? "visible" : "initial"} // Changes on parent hover
                                    variants={animations.img3}
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRange;
