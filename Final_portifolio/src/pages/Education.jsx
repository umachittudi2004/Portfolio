import React from 'react';
import { motion } from 'framer-motion';
import HeaderText from '../components/HeaderText';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";


const Education = () => {
  return (
    <>
      <HeaderText text="Education" />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }} // Increased animation duration
        className="flex flex-col items-center justify-center mt-10 p-4 sm:p-4 md:p-6 lg:p-8"
        style={{ backgroundColor: '#171515' }}
      >
        <VerticalTimeline className="vertical-timeline-custom-line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2022 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            animate={true}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title">Aditya College of Engineering and Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Surampalem</h4>
            <p>Third-Year B.Tech Student | Computer Science and Engineering - Data Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020 - 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title">Sasi Junior College</h3>
            <h4 className="vertical-timeline-element-subtitle">Velivennu</h4>
            <p>Intermediate (MPC) | Mathematics, Physics, and Chemistry</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2019 - 2020"
            icon={<FaSchool />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Sasi E.M High School</h3>
            <h4 className="vertical-timeline-element-subtitle">Velivennu</h4>
            <p>Secondary School Education | 10th Grade</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Education;
