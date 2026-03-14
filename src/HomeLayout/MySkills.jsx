import { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaCode, FaHtml5, FaTools} from "react-icons/fa";
import {  PiPlugFill } from "react-icons/pi";
import { SiJavascript, SiMongodb, SiPostman, SiBackendless,SiPostgresql, SiNextdotjs, SiTypescript,  SiJira , SiVercel,SiSpringboot} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

const skills = [
    {
        title: "Frontend", icon1: <FaCode className="text-cyan-500" />,
        color: "from-cyan-400 to-blue-500",
        shadow: "shadow-[0_20px_60px_rgba(34,211,238,0.25)]",
        border: "border-cyan-500",
        items: [
            { name: "React.js", icon: <FaReact className="text-cyan-400 animate-spin" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 bounce-custom" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white animate-spin" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400 bounce-custom" /> },
            { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-400 animate-pulse" /> },
        ],
    },
    {
        title: "Backend", icon1: <SiBackendless className="text-lime-500" />,
        color: "from-lime-400 to-emerald-600",
        shadow: "shadow-[0_20px_60px_rgba(34,197,94,0.25)]",
        border: "border-lime-500",
        items: [
            { name: "Java",  icon: <FaJava className="text-lime-600 animate-spin" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-emerald-800  bounce-custom" /> },
            { name: "Spring Boot",  icon: <SiSpringboot className="text-white animate-pulse" /> },
            { name: "PostgreSQL",  icon: <SiPostgresql className="text-red-500 animate-pulse" /> },
            { name: "Rest Api",  icon: <PiPlugFill className="text-white bounce-custom" /> },
        ],
    },
    {
        title: "Tools", icon1: <FaTools className="text-orange-500" />,
        color: "from-orange-400 to-red-500",
        shadow: "shadow-[0_20px_60px_rgba(251,146,60,0.25)]",
        border: "border-orange-500",
        items: [
            { name: "Git", icon: <FaGitAlt className="text-orange-700 bounce-custom" /> },
            { name: "VS Code",  icon: <VscVscode className="text-blue-500 animate-spin" /> },
            { name: "Jira",  icon: <SiJira className="text-purple-500 animate-pulse" /> },
            { name: "Vercel", icon: <SiVercel 
            className="text-white bounce-custom" /> },
            { name: "Postman",  icon: <SiPostman className="text-orange-500 animate-spin" /> },
        ],
    },
];

const Counter = ({ target, active }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        let start = 20;
        const step = () => {
            start += 1;
            if (start <= target) {
                setCount(start);
                requestAnimationFrame(step);
            }
        };
        step();
    }, [active, target]);

    return <span>{count}%</span>;
};

const MySkills = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="py-24 max-w-7xl mx-auto px-4 md:mb-30"
        >
            <div data-aos="zoom-in-down" className="relative text-center mb-22">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent shimmer">
                    Skills & Expertise
                </h2>
                <div data-aos="zoom-in"
                 className="w-60 md:w-84 h-1 mx-auto mt-2 bg-lime-500 rounded-full"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {skills.map((group, i ) => (
                    <div data-aos="zoom-in-down">
                        <div
                             key={i}
                            className={`relative p-6 rounded-2xl
                                       bg-gray-950
                                       duration-300 border
                                       hover:scale-[1.03]
                                       ${group.shadow} ${group.border}`}>
                            <h3
                                className={`text-3xl font-semibold mb-6 bg-linear-to-r ${group.color} bg-clip-text text-transparent flex justify-center items-center gap-2`}
                            >
                                {group.icon1}
                                {group.title}
                            </h3>

                            <div className="space-y-6">
                                {group.items.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-2 text-white">
                                            <div className="flex items-center gap-3 text-gray-300">
                                                <span className="text-2xl">
                                                    {skill.icon}
                                                </span>
                                                {skill.name}
                                            </div>
                                           
                                        </div>

                                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full bg-linear-to-r ${group.color}
                                                 transition-all duration-3000 ease-out`}
                                                style={{
                                                    width: visible ? `${skill.level}%` : "0%",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default MySkills;
