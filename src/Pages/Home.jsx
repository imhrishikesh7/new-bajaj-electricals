import React from 'react'
import Cover from '../Components/Homepage/Cover'
import homeSliderData from "../json/homepage-json/home-slider-data.json";
import OurRange from '../Components/Homepage/OurRange';
import Bestsellers from '../Components/Homepage/Bestsellers';
import WhatsNew from '../Components/Homepage/WhatsNew';
import Innovations from '../Components/Homepage/Innovations';
import Testimonial from '../Components/Homepage/Testimonial';
import LinksCenter from '../Components/Homepage/LinksCenter';
import ContactSidebar from '../Components/Homepage/ContactSidebar';
import GoToTopButton from '../Components/Homepage/GoToTopButton';

const Home = () => {
  return (
    <div className='relative'>
      <div className='hidden sm:block'>
        <ContactSidebar/>
      </div>  
      <Cover dataSource={homeSliderData} />
      <OurRange />
      <Bestsellers />
      <WhatsNew />
      <Innovations
        videos={[
          {
            videoSrc: "./home/youtube_2FgqbdwPRT8_1920x1080_h264.webm",
            thumbnailSrc: "./home/thumb1.webp"
          },
          {
            videoSrc: "./home/youtube_UBiJNhY-4kM_1920x1080_h264.webm",
            thumbnailSrc: "./home/thumb2.webp"
          },
          {
            videoSrc: "./home/youtube_xcFMnkc7ObQ_1920x1080_h264.webm",
            thumbnailSrc: "./home/thumb3.webp"
          }
        ]}
      />
      <Testimonial/>
      {/* <LinksCenter/> */}
      <div className='hidden sm:block'>
      <GoToTopButton/>

      </div>
    </div>
  )
}

export default Home