import { FaReact, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import { MdApi, MdDesignServices } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";


const services = [
    {
        title: "React & Next.js Dev",
        desc: "Building scalable, high-performance web applications with reusable component architecture, lazy loading, memoization, and clean project structure.",
        icon: <FaReact className="animate-spin" style={{ animationDuration: "6s" }} />,
    },
    {
        title: "API Integration",
        desc: "Seamless integration of RESTful APIs with authentication flows, protected routes, and structured request/response handling between frontend and backend.",
        icon: <MdApi className="animate-pulse" />,
    },
    {
        title: "UI / UX Implementation",
        desc: "Crafting responsive, accessible interfaces with consistent design systems using SCSS, Tailwind CSS, and component-driven development for all screen sizes.",
        icon: <MdDesignServices className="animate-pulse" />,
    },
    {
        title: "Full Stack Solutions",
        desc: "End-to-end development combining React frontends with Java/Spring Boot backends, MongoDB or PostgreSQL databases, and microservices architecture.",
        icon: <FaJava className="bounce-custom" />,
    },
];
const Service = () => {

      const [ref, inView] = useInView({
        triggerOnce: false,  
        threshold: 0.4, 
      });
    
    return (
        <section id="service-section" className="pb-20 md:pt-10" ref={ref}>
            <section className="relative py-8 pb-12">
                <div className="absolute inset-0 mx-22 max-w-7xl bg-linear-to-br from-emerald-900 to-lime-500 rounded-2xl
                blur-[60px] opacity-20 border-2 border-lime-400" />

                <div className="relative max-w-7xl mx-auto px-8">
                    <div data-aos="zoom-in-down" className="mb-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent shimmer">
                            Services
                        </h2>

                        <div data-aos="zoom-in" className="w-44 h-1 mx-auto mt-2 bg-lime-500 rounded-full" />

                        <p
                            className="py-4 pb-6 text-gray-200">
                            I provide modern design solutions focused on clarity, performance, and user experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {services.map(({ title, desc, icon }, i) => (
                            <div data-aos="zoom-in-down">
                                <div
                                    key={i} className="relative rounded-2xl overflow-hidden group hover:scale-[1.03] duration-300
                                    shadow-[0_10px_30px_rgba(34,197,94,0.25)]
                                    hover:shadow-[0_30px_50px_rgba(34,197,94,0.25)]
                                    ">

                                    <div className="
                                               absolute inset-0
                                               bg-[conic-gradient(from_0deg,transparent,rgba(163,230,53,0.9),transparent)]
                                               animate-[spin_8s_linear_infinite]"
                                    />

                                    <div className="absolute inset-0.5 rounded-2xl bg-gray-950" />

                                    <div className="relative z-10 py-6 px-3">
                                        <div className="text-xl font-semibold bg-linear-to-r from-emerald-700 to-lime-500 bg-clip-text text-transparent mb-2 flex justify-center items-center gap-2">
                                            <span className="text-lime-400"> {icon}</span>
                                            {inView && (
                                                <Typewriter
                                                    words={[title]}
                                                    loop={1}
                                                    cursor
                                                    cursorStyle=""
                                                    typeSpeed={80}
                                                />
                                            )}
                                        </div>

                                        <p className="text-gray-300 font-semibold text-center text-sm leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="w-full h-0.5 my-16 bg-linear-to-r from-transparent via-lime-500 to-transparent animate-pulse"></div>
             <div data-aos="zoom-in-down" className="text-center -mb-8 md:my-4">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent shimmer">
                    Get In Touch
                </h2>

                <div data-aos="zoom-in" className="w-48 h-1 mx-auto my-2 bg-lime-500 rounded-full" />
            </div>

        </section>
    );
};

export default Service;
