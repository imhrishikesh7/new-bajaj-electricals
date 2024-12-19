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
            videoSrc: "./home/fan-video.mp4",
            thumbnailSrc: "./home/sddefault.jpg"
          },
          {
            videoSrc: "./home/iron-video.mp4",
            thumbnailSrc: "./home/sddefault (1).jpg"
          },
          {
            videoSrc: "./home/third-fan-video.mp4",
            thumbnailSrc: "./home/thumbnail3.png"
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