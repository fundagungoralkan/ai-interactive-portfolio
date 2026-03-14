import React from "react";
import { FaReact, FaJsSquare, FaFigma, FaGitAlt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { PiPlugFill } from "react-icons/pi";
import { SiPostgresql ,SiMongodb, SiTailwindcss, SiPostman, SiNextdotjs, SiTypescript,SiSpringboot } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

const orbitIconSize = 55;

const icons = [
    { icon: <FaReact size={orbitIconSize} color="#61DBFB" />, radiusX: 280, radiusY: 240, duration: 12 },
     { icon: <FaJava size={orbitIconSize} color="#61DBFB" />, radiusX: 280, radiusY: 240, duration: 12 },
    { icon: <SiSpringboot size={orbitIconSize} color="#4DB33D" />, radiusX: 150, radiusY: 120, duration: 15 },
    { icon: <SiTailwindcss size={orbitIconSize} color="#3B87EB" />, radiusX: 250, radiusY: 190, duration: 17 },
    { icon: <FaJsSquare size={orbitIconSize} color="#EDED1C" />, radiusX: 180, radiusY: 180, duration: 13 },
    { icon: <IoLogoHtml5 size={orbitIconSize} color="#F28433" />, radiusX: 220, radiusY: 180, duration: 19 },
    { icon: <SiTypescript size={orbitIconSize} color="#3B87EB" />, radiusX: 220, radiusY: 120, duration: 22 },
    { icon: <PiPlugFill size={orbitIconSize} color="#F7F8FA" />, radiusX: 220, radiusY: 180, duration: 21 },
    { icon: <SiPostgresql size={orbitIconSize} color="#F7F8FA" />, radiusX: 260, radiusY: 220, duration: 23 },
    { icon: <SiMongodb size={orbitIconSize} color="#4DB33D" />, radiusX: 280, radiusY: 220, duration: 11 },
    { icon: <VscVscodeInsiders size={orbitIconSize} color="#3B87EB" />, radiusX: 240, radiusY: 180, duration: 25 },
    { icon: <SiPostman size={orbitIconSize} color="#F28433" />, radiusX: 230, radiusY: 190, duration: 18 },
    { icon: <FaFigma size={orbitIconSize} color="#B31BE0" />, radiusX: 270, radiusY: 210, duration: 16 },
    { icon: <FaGitAlt size={orbitIconSize} color="#FF7C00" />, radiusX: 290, radiusY: 250, duration: 20 },
    { icon: <SiNextdotjs size={orbitIconSize} color="#FFFFFF" />, radiusX: 270, radiusY: 230, duration: 22 },
];

const SkillsIcon = () => {
    return (
        <div className="relative w-full max-w-full h-125 md:h-160 mx-auto md
        :mt-40 overflow-hidden lg:overflow-visible">

            <div>
                <div 
                    className="absolute md:-top-22 left-26 md:left-138 z-10">

                    <h2 className="text-3xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent shimmer">
                        Technologies
                    </h2>
                    <div data-aos="zoom-in" className="w-48 md:w-76 h-1 md:mx-0 mt-2 bg-lime-500 rounded-full"></div>
                </div>

            </div>
             <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-46 md:h-46 bg-lime-700 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" />

             <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spin-smooth z-5 w-20 h-20 md:w-45 md:h-45">
                <img
                    src="/src/assets/Remove_Text_from_Circular_Logo-1-removebg-preview.png"
                    alt="center"
                    className="w-full h-full object-contain animate-pulse"
                />
            </div>

            {icons.map(({ icon, radiusX, radiusY, duration }, index) => {
                const animationName = `orbitAnimation${index}`;

                return (
                    <React.Fragment key={index}>
                        <style>{`
                            :root {
                                --rX-${index}: ${radiusX}px;
                            }
                            @media (max-width: 768px) {
                                :root {
                                    /* Shrink the orbits by 50% on mobile */
                                    --rX-${index}: ${radiusX * 0.5}px; 
                                }
                            }
                            @keyframes ${animationName} {
                                0% {
                                    transform: rotate(0deg) translateX(var(--rX-${index})) rotate(0deg);
                                }
                                100% {
                                    transform: rotate(360deg) translateX(var(--rX-${index})) rotate(-360deg);
                                }
                            }
                        `}</style>

                        <div
                            className="absolute top-1/2 left-1/2"
                            style={{
                                width: orbitIconSize,
                                height: orbitIconSize,
                                animation: `${animationName} ${duration}s linear infinite`,
                                transformOrigin: `calc(var(--rX-${index}) * -1) 50%`,
                            }}
                        >
                            <div
                                className="flex items-center justify-center scale-75 md:scale-100 bg-emerald-950 p-3 rounded-full hover:scale-[1.33] duration-300 cursor-pointer spin-smooth"
                                style={{
                                    width: orbitIconSize,
                                    height: orbitIconSize,
                                    transform: `scaleY(${radiusY / radiusX})`,
                                }}
                            >
                                {icon}
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default SkillsIcon;