import { FaGithub } from "react-icons/fa";
import { PiFarmBold } from "react-icons/pi";
import { FaDroplet } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { TbLivePhotoFilled } from "react-icons/tb";
import ozkapanImg from "../assets/ozkapan.png";
import alkanImg from "../assets/alkan.png";
import kiviImg from "../assets/kivi.png";

const projects = [
  {
    id: 1,
    title: "Ozkapan Container",
    liveLink: "https://ozkapan.com/",
    repoLink: "https://github.com/fundagungoralkan/ozkapan-corporate-site",
    description:
      "A modern and responsive corporate website for Özkapan, designed to deliver strong branding, clean UI, and seamless performance across devices",
    image: ozkapanImg,
    tech: [
      "Next.js",
      "Scss",
      "React",
      "UI",
      "Next.auth",
      "Bootstrap",
      "EmailJS",
    ],
  },
  {
    id: 2,
    title: "Alkan Foreign Trade Website",
    liveLink: "https://alkan-ticaret-next-js.vercel.app/en",
    repoLink: "https://github.com/fundagungoralkan/E-Commerce-Alkan-NextJS",
    description:
      "A multi-language business website built with Next.js and React, featuring responsive layouts and dynamic product showcases",
    image: alkanImg,
    tech: [
      "Next.js",
      "Scss",
      "React",
      "UI",
      "Next.auth",
      "i18next",
      "Particle.js",
    ],
  },
  {
    id: 3,
    title: "Kivi Akademi Education Website",
    liveLink: "https://www.kiviakademi.com/",
    repoLink: "https://github.com/fundagungoralkan",
    description:
      "A website for Kivi Akademi with student, parent, and admin dashboards for structured user access and education management",
    image: kiviImg,
    tech: [
      "Next.js",
      "Scss",
      "React",
      "UI",
      "Java",
      "Spring Boot",
      "Framer Motion",
      "Stripe",
    ],
  },
];

const MyProjects = () => {
  const handleLive = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="project-section" className="py-6 pb-14 relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div
          className="absolute top-20 inset-0 -z-10 rounded-2xl
            bg-linear-to-br from-emerald-400/30 to-lime-400/30
            blur-[80px]"
        />

        <div className="relative">
          <div
            data-aos="zoom-in-down"
            className="mb-6 text-center text-4xl md:text-5xl font-extrabold pb-10"
          >
            <h2 className="text-white">
              My{" "}
              <span className="bg-linear-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent shimmer">
                Projects
              </span>
            </h2>
            <div
              data-aos="zoom-in"
              className="w-58 h-1 mx-auto mt-3 bg-lime-400 rounded-full"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} data-aos="zoom-in-down">
                <div
                  className="card bg-gray-950 transition-all duration-300
                    hover:scale-[1.03] rounded-2xl
                    shadow-[0_10px_30px_rgba(132,204,22,0.18)]
                    hover:shadow-[0_30px_50px_rgba(132,204,22,0.25)]"
                >
                  <figure className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition-transform duration-400 hover:scale-105"
                    />
                  </figure>

                  <div className="card-body">
                    <h3 className="card-title flex items-center gap-2">
                      {project.icon}
                      <span className="text-white font-bold">
                        {project.title}
                      </span>
                    </h3>

                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>

                    <div
                      data-aos="zoom-in"
                      className="flex flex-wrap gap-2 mt-2"
                    >
                      {project.tech.map((item, index) => (
                        <span
                          key={index}
                          className="rounded-2xl
                            text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-lime-500
                            border-2 border-gradient-to-r border-lime-500 px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div
                      data-aos="zoom-in-down"
                      className="card-actions mt-4 grid grid-cols-2 gap-2"
                    >
                      <button
                        onClick={() => handleLive(project.liveLink)}
                        className="btn px-8 text-white 
                          bg-linear-to-r from-emerald-800 to-lime-500 
                          border-none shadow-lg rounded-3xl
                          hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all ease-out duration-300
                          hover:scale-[1.04] w-full"
                      >
                        View
                        <TbLivePhotoFilled className="animate-pulse text-lg text-black" />
                      </button>

                      <button
                        onClick={() => handleLive(project.repoLink)}
                        className="btn px-8 
                        text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-lime-500
                        border-2 border-gradient-to-r border-lime-500
                          shadow-lg rounded-3xl
                          hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all ease-out duration-300
                          hover:scale-[1.04] w-full"
                      >
                        Github
                        <FaGithub className="text-lime-400 text-lg animate-pulse" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
