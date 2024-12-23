import { motion } from 'framer-motion';
import React from 'react';

const Title = ({ title1, title2, title3, desc }) => {
  return (
    <div className='md:flex md:justify-between md:items-center text-left'>
      <div className='md:w-[50%]'>
        {/* Title 1 */}
        <motion.h2
          className='md:text-2xl text-2xl md:pb-1'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          {title1}
        </motion.h2>

        {/* Conditional Rendering for Title 2 or Title 3 */}
        {title2 && (
          <motion.h1
            className='md:text-5xl md:pb-4 pb-1 text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent'
            initial={{ x: -70, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            {title2}
          </motion.h1>
        )}

        {title3 && (
          <motion.h1
            className='md:text-5xl md:pb-4 pb-1 text-4xl font-bold text-white'
            initial={{ x: -70, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            {title3}
          </motion.h1>
        )}
      </div>

      {/* Description */}
      <div className='md:w-[60%]'>
        <motion.p
          className='md:text-[16px]'
          initial={{ x: 70, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

export default Title;
