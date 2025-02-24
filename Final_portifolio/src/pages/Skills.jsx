import React, { useState, useEffect } from 'react';
import HeaderText from '../components/HeaderText';
import csspng from '../assets/csspng.png';
import htmlpng from '../assets/htmlpng.png';
import jspng from '../assets/jspng.png';
import reactpng from '../assets/reactpng.png';
import nodepng from '../assets/nodejspng.png';
import expresspng from '../assets/expressjspng.png';
import mongopng from '../assets/mongodbpng.png';
import pythonpng from '../assets/pythonpng.png';

const Skills = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [containerSize, setContainerSize] = useState({ width: 450, height: 400 });

    const logos = [
        { src: htmlpng, name: 'HTML'  },
        { src: csspng, name: 'CSS' },
        { src: jspng, name: 'JavaScript' },
        { src: reactpng, name: 'React' },
        { src: nodepng, name: 'Node.js' },
        { src: expresspng, name: 'Express' },
        { src: mongopng, name: 'MongoDB' },
        { src: pythonpng, name: 'Python' },
    ];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 480) { // Extra small devices
                setContainerSize({ width: 280, height: 280 });
            } else if (width < 640) { // sm
                setContainerSize({ width: 320, height: 320 });
            } else if (width < 768) { // md
                setContainerSize({ width: 400, height: 400 });
            } else if (width < 1024) { // lg
                setContainerSize({ width: 500, height: 500 });
            } else { // xl and above
                setContainerSize({ width: 450, height: 450 });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const spinAnimation = `
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;

    // Calculate dynamic sizes based on container size
    const orbitRadius = containerSize.width * 0.37; // Adjusted for better mobile spacing
    const logoSize = Math.max(containerSize.width * 0.16, 32); // Ensure minimum size on small screens
    const centerLogoSize = containerSize.width * 0.25;
    const fontSize = containerSize.width * 0.04;
    const centerFontSize = Math.max(containerSize.width * 0.06, 14); // Ensure minimum font size

    // Handle touch events for mobile
    const handleTouchStart = () => {
        setIsTouched(true);
    };

    const handleTouchEnd = () => {
        setIsTouched(false);
    };

    return (
        <div className="w-full">
            <HeaderText text="Skills" />
            <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10" style={{ backgroundColor: '#171515' }}>
                <style>{spinAnimation}</style>
                <div
                    className="relative flex items-center justify-center rounded-full bg-opacity-10 bg-white shadow-xl"
                    style={{
                        width: containerSize.width,
                        height: containerSize.height,
                        backgroundColor: '#1e1e1e',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                    }}
                >
                    {/* Rotating Container */}
                    <div
                        className="absolute w-full h-full flex items-center justify-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        style={{
                            animation: `spin 14s linear infinite`,
                            animationPlayState: (isHovered || isTouched) ? 'paused' : 'running',
                        }}
                    >
                        {logos.map((logo, index) => {
                            const angle = (index * 360) / logos.length;
                            const rotation = `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`;
                            return (
                                <div
                                    key={logo.name}
                                    className="absolute flex items-center justify-center rounded-full"
                                    style={{
                                        width: `${logoSize}px`,
                                        height: `${logoSize}px`,
                                        transform: rotation,
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                                        zIndex: 10,
                                    }}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        style={{
                                            width: '80%',
                                            height: '80%',
                                            objectFit: 'contain',
                                            borderRadius: '50%',
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Center Logo */}
                    <div
                        className="absolute flex items-center justify-center rounded-full"
                        style={{
                            width: `${centerLogoSize}px`,
                            height: `${centerLogoSize}px`,
                            backgroundColor: '#171515',
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                            zIndex: 20,
                        }}
                    >
                        <span
                            className="text-white font-bold text-center"
                            style={{ fontSize: `${centerFontSize}px` }}
                        >
                            SKILLS
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;