import React from 'react';
import { motion } from 'framer-motion';
import HeaderText from '../components/HeaderText';
import myPhoto from '../assets/photo.png';
const About = () => {
  return (
    <div className="w-full">
      <HeaderText text="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col md:flex-row items-center justify-center mt-10 p-6 md:p-10 lg:p-16"
        style={{ backgroundColor: '#171515' }}
      >
        {/* Image Section with Enhanced Animation */}
        <motion.div
          className="relative"
          initial={{
            x: -200,
            filter: "grayscale(100%) blur(4px)",
            rotate: -180
          }}
          animate={{
            x: 0,
            filter: "grayscale(0%) blur(0px)",
            rotate: 0
          }}
          transition={{
            duration: 1.8,
            type: "spring",
            bounce: 0.4
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={myPhoto}
              alt="My Profile"
              className="rounded-full w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-lg mb-6 md:mb-0"
              initial={{ filter: 'grayscale(100%)' }}
              // whileHover={{ filter: 'grayscale(0%) blur(0px)' }}
              transition={{ duration: 0.5 }}
            />
            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid transparent',
                // backgroundImage: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                // boxShadow: '2px 1000px 1px #171515 inset',
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Infinity
              }}
            />
          </motion.div>

        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:ml-10 lg:ml-16 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Hi, I'm Uma Maheswara Rao Chittudi!
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            I'm a passionate Front-End Developer with a strong foundation in modern web technologies.
            I specialize in creating visually appealing and user-friendly web applications.
            With experience in React, JavaScript, and animations, I love crafting engaging user experiences.
          </p>
          <p className="text-gray-300 text-sm md:text-base mt-4">
            My journey in web development has been fueled by curiosity and a desire to keep learning.
            From building interactive UI components to optimizing web performance, I strive to
            create digital solutions that leave a lasting impact.
          </p>
          <div className='' >Please feel free To Reach Out</div>

        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;