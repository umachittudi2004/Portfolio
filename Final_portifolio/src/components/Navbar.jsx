import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaProjectDiagram, 
  FaBook, 
  FaInstagram ,
  FaInfo
} from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { IoMdContact } from 'react-icons/io';

const NavItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center rounded-full cursor-pointer bg-gray-800
                 p-2 sm:p-2.5 md:p-3 
                 text-sm sm:text-base md:text-base"
      whileHover={{ scale: 1.2, backgroundColor: "#1f2937" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {item.path.startsWith('http') ? (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white 
                     text-sm sm:text-base md:text-base"
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ) : (
        <Link 
          to={item.path} 
          className="text-white 
                     text-sm sm:text-base md:text-base"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      )}
      
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute whitespace-nowrap
                     -top-8 
                     left-1/2 transform -translate-x-1/2
                     px-2 py-1
                     bg-black text-white
                     text-xs
                     rounded-md
                     z-50"
        >
          {item.label}
        </motion.div>
      )}
    </motion.div>
  );
};

const Navbar = () => {
  const navItems = [
    { path: "", icon: <FaHome />, label: "Home" },
    { path: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { path: "/education", icon: <FaBook />, label: "Education" },
    { path: "/skills", icon: <GiSkills />, label: "Skills" },
    { path: "/about", icon: <FaInfo />, label: "About" },
    { path: "/contact", icon: <IoMdContact/>, label: "Contact" },
    // {path:"/certificates",icon:<FaCertificate/>,label:"Certificates"},
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 
                    left-0 right-0 
                    flex justify-center 
                    px-2 sm:px-3 md:px-4">
      <motion.div
        className="flex bg-black bg-opacity-50 
                   rounded-full shadow-lg 
                   p-2 sm:p-2.5 md:p-3
                   space-x-2 sm:space-x-3 md:space-x-3
                   backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;