import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoArrowRedoSharp } from "react-icons/io5";
import { GrDocumentPerformance, GrTechnology } from "react-icons/gr";
import { GiMoebiusStar } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { TbStack2Filled } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
        setTimeout(() => {
            AOS.refreshHard();
        }, 600);
    }, []);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.4,
    });


    return (
        <section id="about-section" className="relative pb-10" ref={ref}>
            <div data-aos="zoom-in-down" className="relative max-w-6xl mx-auto px-6 text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent shimmer">
                    About Me
                </h2>
                <div data-aos="zoom-in" className="w-38 h-1 mx-auto mt-2 bg-lime-500 rounded-full"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div data-aos="zoom-in">
                    <div
                        className="relative group bg-gray-950 backdrop-blur-md
                                rounded-xl p-8 transform-gpu
                                scale-100 hover:scale-[1.03]
                                transition-all duration-300 ease-out
                                shadow-lime-400
                                hover:shadow-[0_8px_18px_rgba(34,197,94,0.25)]">
                        <div className="relative z-10">
                            {/* Title */}
                            <h3
                                data-aos="zoom-in"
                                className="text-2xl font-extrabold bg-linear-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent mb-4 flex justify-center items-center gap-4"
                            >
                                <GrTechnology className="animate-spin text-lime-500" />
                                {inView && (
                                    <Typewriter
                                        words={["Who I Am"]}
                                        loop={1}
                                        cursor
                                        cursorStyle=""
                                        typeSpeed={120}
                                    />
                                )}
                            </h3>

                            {/* Description */}
<p className="text-gray-400 leading-relaxed text-sm md:text-base text-justify">
  Frontend Developer specialising in React.js and Next.js, delivering
  responsive, SEO-friendly, and scalable web applications. My projects
  include e-commerce platforms serving 1000+ daily users and full-stack
  applications with RESTful API integration. With a Java & Spring Boot
  background, I bring solid backend understanding to my frontend work.
</p>
<br/>
<p className="text-gray-500 text-xs mt-3">
  📍 Based in the UK · Fully authorised to work · Open to Frontend Developer opportunities
</p>


                            <div className="w-full h-0.5 my-7 bg-linear-to-r from-transparent via-lime-500 to-transparent animate-pulse"></div>

                            <div
                                data-aos="fade-right"
                                className="space-y-3 font-semibold text-emerald-900/80 cursor-pointer"
                            >
                       <h3 className="font-bold bg-linear-to-r from-emerald-700 to-lime-200 bg-clip-text text-transparent">
  Key Strengths:
</h3>
<p className="flex items-center gap-2 transition-transform duration-500 ease-in-out hover:translate-x-2 text-gray-400 hover:text-lime-500">
  <IoArrowRedoSharp className="text-lime-500" />React.js & Next.js Development
</p>
<p className="flex items-center gap-2 transition-transform duration-500 ease-in-out hover:translate-x-2 text-gray-400 hover:text-lime-500">
  <IoArrowRedoSharp className="text-lime-500" />Responsive & Mobile-First Design
</p>
<p className="flex items-center gap-2 transition-transform duration-500 ease-in-out hover:translate-x-2 text-gray-400 hover:text-lime-500">
  <IoArrowRedoSharp className="text-lime-500" />REST API Integration
</p>
<p className="flex items-center gap-2 transition-transform duration-500 ease-in-out hover:translate-x-2 text-gray-400 hover:text-lime-500">
  <IoArrowRedoSharp className="text-lime-500" />Clean, Scalable Code Structure
</p>
<p className="flex items-center gap-2 transition-transform duration-500 ease-in-out hover:translate-x-2 text-gray-400 hover:text-lime-500">
  <IoArrowRedoSharp className="text-lime-500" />Agile / Scrum Methodology
</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div data-aos="zoom-in">
                    <div
                        className="
                                   relative group bg-gray-950 backdrop-blur-md
                                   rounded-xl p-8 transform-gpu
                                   scale-100 hover:scale-[1.03]
                                   transition-all duration-300 ease-out
                                 shadow-lime-400
                                   hover:shadow-[0_8px_18px_rgba(16,185,129,0.28)]"
                    >
                        <h3
                            data-aos="zoom-in"
                            className="text-2xl font-extrabold bg-linear-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent mb-4 flex justify-center items-center gap-4"
                        >
                            <GiMoebiusStar className="animate-spin text-lime-500" />
                            {inView && (<Typewriter
                                words={["My Specialty"]}
                                loop={1}
                                cursor
                                cursorStyle=""
                                typeSpeed={120}
                            />
                            )}

                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base ">
                            My core expertise lies in developing reliable, user-friendly web solutions that prioritize performance, scalability, and long-term maintainability for real-world business needs.
                        </p>
                        <div className="w-full h-0.5 my-6 bg-linear-to-r from-transparent via-lime-500 to-transparent animate-pulse"></div>


                        <div data-aos="zoom-in" className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Frontend Development",
                                    icon: <FaCode className="text-emerald-700" />,
                                    desc: "Pixel-perfect UI, animations, and responsive layouts.",
                                },
                               {
  title: "Backend Integration",
  icon: <TbStack2Filled className="text-lime-500" />,
  desc: "Java & Spring Boot foundations, RESTful APIs, and authentication flows.",
},,
                                {
                                    title: "Performance",
                                    icon: <GrDocumentPerformance className="text-emerald-700" />,
                                    desc: "Optimized code, lazy loading, and best practices.",
                                },
                                {
                                    title: "Problem Solving",
                                    icon: <LuBrain className="text-lime-500" />,
                                    desc: "Clean solutions with scalable architecture.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative group/card rounded-xl p-px overflow-hidden"
                                >
                                    <div className="
                                            pointer-events-none absolute inset-0 rounded-xl
                                            bg-[conic-gradient(from_0deg,rgba(163,230,53,0),rgba(163,230,53,0.6),rgba(163,230,53,0))]
                                            animate-[spin_8s_linear_infinite]
                                            transition-opacity duration-300">
                                    </div>

                                    {/* Card */}
                                    <div
                                        className="
                                               relative rounded-xl py-6 px-4
                                               bg-gray-900 backdrop-blur-md cursor-pointer"
                                    >
                                        <h4 className="text-lg font-semibold bg-linear-to-r from-emerald-700 to-lime-500 bg-clip-text text-transparent mb-2 flex items-center gap-1">
                                            <span className="text-md bounce-custom">{item.icon}</span>
                                            {inView && (<Typewriter
                                                words={[item.title]}
                                                loop={1}
                                                cursor
                                                cursorStyle=""
                                                typeSpeed={120}
                                            />
                                            )}
                                        </h4>

                                        <p className="text-sm text-white/65 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
