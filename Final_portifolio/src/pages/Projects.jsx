import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { IoCloseSharp } from "react-icons/io5";
import beach from '../assets/beach.jpg';
import HeaderText from '../components/HeaderText';
import crex from '../assets/cric_victoryvault.png';
import cal from '../assets/CAL SGPA.png';
import chat from '../assets/image.png';

// Modal Component for Project Details
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-neutral-900 p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50"
        >
          <IoCloseSharp className="h-6 w-6" />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-neutral-50">{project.heading}</h2>
            <p className="mt-2 text-neutral-400">{project.subheading}</p>
          </div>

          <img
            src={project.imgSrc}
            alt={project.heading}
            className="w-full rounded-lg object-cover"
          />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-50">Project Description</h3>
            <p className="text-neutral-300">{project.description}</p>

            <div className="space-y-2">
              <h4 className="font-semibold text-neutral-50">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                View Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-700 px-4 py-2 text-neutral-200 hover:bg-neutral-800"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectLink = ({ project, onProjectClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["45%", "55%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["45%", "55%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onProjectClick(project);
  };

  return (
    <motion.a
      href="#"
      onClick={handleClick}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div className="relative z-10">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="block text-3xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-5xl"
        >
          {project.heading.split("").map((letter, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={`${letter}-${i}`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
        <span className="mt-2 block text-sm text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-base">
          {project.subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={project.imgSrc}
        className="z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`${project.heading} project thumbnail`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-4xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      heading: "Treks And Travels",
      subheading: "A Travel Website",
      imgSrc: beach,
      description: "A modern travel booking platform built with HTML , CSS and JavaSript. Features include destination selection , spin the wheel for holiday destination and lot more features.",
      technologies: ["HTML", "CSS", "JavaScript", "BootStrap"],
      liveUrl: "https://treks-and-travels.example.com",
      githubUrl: "https://github.com/example/treks-and-travels"
    },
    {
      heading: "JNTUK SGPA Calculator",
      subheading: "Academic Performance Calculator",
      imgSrc: cal,
      description: "A simple web application to calculate SGPA for JNTUK students With features like CSV file upload to view branch wise results.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://jntuk-sgpa-cgpa-calculator.example.com",
      githubUrl: "https://github.com/example/jntuk-sgpa-cgpa-calculator"
    },
    {
      heading: "Victory Vault",
      subheading: "Sports Score Tracker",
      imgSrc: crex,
      description: "Real-time sports score tracking application statistical analysis for multiple sports leagues.",
      technologies: ["React", "Tailwind", "Chart.js", "Node.js", "Express"],
      liveUrl: "https://victory-vault.example.com",
      githubUrl: "https://github.com/example/victory-vault"
    },
    {
      heading: "Real Time Chat App",
      subheading: "Instant Messaging Platform",
      imgSrc: chat, // Placeholder image
      description: "A real-time chat application that allows users to communicate instantly with features like file sharing, Data Privacy and One to One Interaction.",
      technologies: ["React","Zustand","Socket.io", "Node.js", "Express"],
      liveUrl: "https://chattify-i3y3.onrender.com",
      githubUrl: "https://github.com/umachittudi2004/Chattify",
    }
    
  ];

  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* <h2 className="text-4xl font-bold text-neutral-50 mb-8">Projects</h2> */}
        <HeaderText text="Projects" />
        {projects.map((project, index) => (
          <ProjectLink
            key={index}
            project={project}
            onProjectClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;