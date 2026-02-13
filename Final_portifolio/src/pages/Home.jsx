import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      {/* <Scene /> */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
        {/* Background Animated Sparks */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 100 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute w-[2px] h-[10px] bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
              }}
              animate={{ y: ["0%", "100%"], opacity: [0, 1] }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Title Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello World,
        </motion.h1>

        {/* Typewriter Effect with Pulse Animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mt-2 pulse"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am{" "}
          <motion.span
            className="text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              <Typewriter
                words={["Uma Chittudi", "Tech Enthusiast", "Learner", "Web Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg text-center max-w-xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          As a web development enthusiast currently pursuing my studies, I am eager to build beautiful and modern websites. I am passionate about design, always exploring new techniques, and excited to contribute to open-source projects.
        </motion.p>

        {/* Know Me Button */}
        <motion.button
          className="relative z-10 mt-6 px-6 py-3 text-lg font-semibold text-black bg-white rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            console.log("Button clicked!"); // Check if this logs
            try {
              window.open(
                "https://drive.google.com/file/d/13Nk_JUfwnTrmuVxNySfJtNIVC4gcOf0d/view?usp=sharing",
                "_blank"
              );
            } catch (error) {
              console.error("Failed to open link:", error); // Log any errors
            }
          }}
        >
          Know Me
        </motion.button>
      </div>
    </>
  );
};

export default Home;