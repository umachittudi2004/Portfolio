import React from 'react'
import HeaderText from '../components/HeaderText';

const Certificates = () => {
    const certificates = [
        {
            title:"IT Specialist - HTML and CSS",
            issuedBy:"Certiport – A Pearson VUE Business",
            description:"The IT Specialist – HTML and CSS certification by Certiport demonstrates my foundational skills in web development, specifically in creating and styling web pages using HTML and CSS. Through this certification, I have gained a strong understanding of structuring content with semantic HTML and applying effective styling with CSS to build responsive and user-friendly interfaces. It reflects my ability to design functional web layouts, implement forms and multimedia, and ensure basic accessibility and compatibility across browsers. This credential signifies my readiness to take on entry-level web development tasks and further deepen my front-end development expertise.",
            image:"",
            link:"https://www.credly.com/badges/347b72fe-50d3-49df-969e-9d197f74f426",
        },
        {
            title:"IT Specialist - Python",
            issuedBy:"Certiport – A Pearson VUE Business",
            description:"The IT Specialist – Python certification by Certiport validates my proficiency in Python programming, covering essential concepts such as data types, control structures, functions, and object-oriented programming. This certification demonstrates my ability to write clean, efficient code and solve complex problems using Python. It reflects my readiness to tackle entry-level programming tasks and further develop my skills in software development.",
            image:"",
            link:""
        },
        {
            title:"IT Specialist - JavaScript",
            issuedBy:"Certiport – A Pearson VUE Business",
            description:"The IT Specialist – JavaScript certification by Certiport showcases my foundational skills in JavaScript programming, including understanding variables, data types, control structures, functions, and basic DOM manipulation. This certification demonstrates my ability to create interactive web applications and enhance user experiences through dynamic content. It reflects my readiness to take on entry-level front-end development tasks and further explore advanced JavaScript concepts.",
            image:"",
            link:""
        },
        {
            title:"Programming Essentials in C",
            issuedBy:"Cisco Networking Academy",
            description:"The Programming Essentials in C certification from Cisco Networking Academy affirms my knowledge of the C programming language, encompassing key concepts such as data types, control structures, functions, and arrays. It highlights my capability to write efficient C programs and apply logical problem-solving techniques. This certification showcases my preparedness for entry-level programming roles and my commitment to advancing in the field of software development.",
            image:"",
            link:""
        },
        {
            title:"Programming Essentials in Python",
            issuedBy:"Cisco Networking Academy",
            description:"The Programming Essentials in Python certification offered by Cisco Networking Academy confirms my foundational proficiency in Python programming. It covers essential topics including data types, control flow, functions, and the basics of object-oriented programming. Earning this certification showcases my capability to develop clean and effective Python code while applying logical thinking to problem-solving. It also marks an important step in preparing for real-world programming challenges and advancing my journey in software development.",
            image:"",
            link:""
        },
        {
            title:"CCNAv7 - Introduction to Networks",
            issuedBy:"Cisco Networking Academy",
            description:"The CCNAv7: Introduction to Networks certification by Cisco Networking Academy provides a solid foundation in networking concepts and technologies. It covers essential topics such as network fundamentals, IP addressing, Ethernet concepts, switching and routing basics, and network protocols. Through this course, I developed practical skills in configuring network devices, implementing basic security measures, and troubleshooting common networking issues. This certification reflects my preparedness to pursue more advanced networking studies and lays the groundwork for a career in network administration and IT infrastructure.",
            image:"",
            link:""
        },
        {
            title:"JavaScript Essentials 1",
            issuedBy:"Cisco Networking Academy",
            description:"The JavaScript Essentials 1 certification provides a foundational understanding of JavaScript, the core scripting language of the web. It covers key programming concepts such as variables, data types, operators, control structures, functions, and basic DOM manipulation. Through this course, I gained hands-on experience in writing interactive scripts and solving problems using JavaScript logic. This certification demonstrates my ability to build dynamic web content and serves as a stepping stone toward advanced front-end and full-stack development.",
            image:"",
            link:""
        },
        {
            title:"JavaScript Essentials 2",
            issuedBy:"Cisco Networking Academy",
            description:"The JavaScript Essentials 2 certification builds upon the foundational knowledge gained in JavaScript Essentials 1. It delves deeper into advanced JavaScript concepts such as asynchronous programming, error handling, and working with APIs. This certification demonstrates my ability to create more complex and interactive web applications, leveraging modern JavaScript features and best practices.",
            image:"",
            link:""
        },
        {
            title:"Oracle Foundation Associate",
            issuedBy:"Oracle University",
            description:"The Oracle Foundation Associate certification validates my foundational knowledge of Oracle technologies and database management.",
            image:"",
            link:""
        }
    ]
  return (
    <>
        <HeaderText text="Certificates" />
        {
            certificates.map((cert, index) => (
                <div key={index} className="certificate">
                    <h3>{cert.title}</h3>
                    <p><strong>Issued By:</strong> {cert.issuedBy}</p>
                    <p>{cert.description}</p>
                    {cert.image && <img src={cert.image} alt={cert.title} />}
                    {cert.link && <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>}
                </div>
            ))
        }
    </>
  )
}

export default Certificates