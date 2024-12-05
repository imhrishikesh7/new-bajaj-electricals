import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../Global/Title";

const Innovations = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleCardClick = (videoSrc) => {
        setSelectedVideo(videoSrc);
    };

    const handleCloseVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="marginal">
            <Title title1="Our" title2="Innovations" />
            <div className="relative flex justify-between items-center mt-[3%]">
                <div className="flex gap-4 justify-between items-center w-full flex-wrap">
                    {videos.map((video, index) => (
                        <motion.div
                        whileHover={{
                            boxShadow: "0 0 15px 5px rgba(0, 123, 255, 0.7)", // Blue box shadow
                        }}
                            key={index}
                            className={`relative rounded-2xl w-full overflow-hidden cursor-pointer w-full sm:w-[31%] transition-transform duration-300
                              ${index === 1 ? "transform md:scale-110" : ""}
                              ${index === 0 || index === 2 ? "h-[270px]" : "md:h-[290px]"}`} // Adjust height for the first and third thumbnails
                            onClick={() => handleCardClick(video.videoSrc)}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                whileHover={{
                                    scale: 1.05, // Slight scale effect on hover for the thumbnail
                                    boxShadow: "0 0 15px 5px rgba(0, 123, 255, 0.7)", // Blue box shadow
                                }}
                            >
                                <img
                                    src={video.thumbnailSrc}
                                    alt="Video Thumbnail"
                                    className="object-cover w-full h-full" // Ensures image covers the container
                                />
                                {/* Overlay with Play Button */}
                                <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center">
                                    {/* Circular div with blurred background */}
                                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full backdrop-blur-lg flex justify-center items-center">
                                        {/* Play button inside the circle */}
                                        <img
                                            src="./home/play-btn.png" // Replace with your play button image
                                            alt="Play Button"
                                            className="w-8 h-8 object-contain"
                                            
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {selectedVideo && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={handleCloseVideo}
                        >
                            Close
                        </button>
                        <motion.video
                            src={selectedVideo}
                            controls
                            autoPlay
                            className="max-w-[98%] max-h-[95%] rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Innovations;
