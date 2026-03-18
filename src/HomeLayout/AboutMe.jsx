import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IoArrowRedoSharp } from "react-icons/io5";
import { GrDocumentPerformance, GrTechnology } from "react-icons/gr";
import { GiMoebiusStar } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { TbStack2Filled } from "react-icons/tb";

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // ✅ prevent re-renders
    threshold: 0.3,
  });

  return (
    <section id="about-section" className="relative pb-10" ref={ref}>
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-32 h-1 mx-auto mt-2 bg-lime-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Card 1 */}
        <div
          className={`transition-all duration-700 h-full ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-950 rounded-xl p-8 hover:scale-[1.02] transition h-full flex flex-col">
            <h3 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text mb-4 flex justify-center items-center gap-3">
              <GrTechnology className="text-lime-500" /> Who I Am
            </h3>

            <p className="text-gray-400 text-sm md:text-base text-justify">
              Frontend Developer specialising in React.js and Next.js,
              delivering responsive, SEO-friendly, and scalable web
              applications. My projects include e-commerce platforms serving
              1000+ daily users and full-stack applications with RESTful API
              integration.
            </p>

            <p className="text-gray-500 text-xs mt-3">
              📍 Based in the UK · Open to Frontend Developer opportunities
            </p>

            <div className="w-full h-px my-6 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />

            <h4 className="font-bold text-lime-400 mb-2">Key Strengths:</h4>

            {[
              "React.js & Next.js Development",
              "Responsive & Mobile-First Design",
              "REST API Integration",
              "Clean, Scalable Code",
              "Agile / Scrum",
            ].map((item, i) => (
              <p
                key={i}
                className="flex items-center gap-2 text-gray-400 hover:text-lime-500 transition"
              >
                <IoArrowRedoSharp /> {item}
              </p>
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-950 rounded-xl p-8 hover:scale-[1.02] transition h-full flex flex-col">
            <h3 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text mb-4 flex justify-center items-center gap-3">
              <GiMoebiusStar className="text-lime-500" /> My Specialty
            </h3>

            <p className="text-gray-400 text-sm md:text-base">
              I build user-friendly and scalable web applications with a strong
              focus on performance, clean architecture, and long-term
              maintainability. I aim to create efficient, responsive, and
              reliable solutions that enhance user experience while meeting
              real-world business needs. and clean architecture.
            </p>

            <div className="w-full h-px my-6 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />

            <div className="grid sm:grid-cols-2 gap-4 mt-auto">
              {[
                {
                  title: "Frontend",
                  icon: <FaCode />,
                  desc: "Responsive UI & animations",
                },
                {
                  title: "Backend",
                  icon: <TbStack2Filled />,
                  desc: "APIs & authentication",
                },
                {
                  title: "Performance",
                  icon: <GrDocumentPerformance />,
                  desc: "Optimized & fast loading",
                },
                {
                  title: "Problem Solving",
                  icon: <LuBrain />,
                  desc: "Scalable solutions",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition"
                >
                  <h4 className="flex items-center gap-2 text-lime-400 font-semibold mb-1">
                    {item.icon} {item.title}
                  </h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
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
