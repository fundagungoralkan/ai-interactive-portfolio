import { useEffect, useState } from "react";
import hero_logo from "../assets/logo2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineFileDownload } from "react-icons/md";
import scroll from "../assets/Scroll down.json";
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const roles = ["Frontend Software Engineer", "React Developer"];

const Banner = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (index < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[index]);
        setIndex(index + 1);
      }, 90);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [index, roleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.35;
      if (scrollPosition > triggerPoint) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="banner-section" className="relative min-h-screen">
      <div className="absolute inset-0 bg-size-[200%_200%] animate-gradient-x opacity-60"></div>

      <div
        className="absolute w-72 h-72 bg-lime-300/30 rounded-full 
        top-40 md:left-30 blur-3xl animate-floatSlow"
      ></div>

      <div
        className="absolute w-96 h-96 bg-emerald-300/30 rounded-full 
        bottom-20 right-50 blur-3xl animate-floatSlow delay-2000"
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div data-aos="fade-right">
          <p className="uppercase tracking-widest text-[#22c55e] font-semibold">
            Hello !
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
            I’m{" "}
            <span className="bg-linear-to-r from-[#22c55e] via-[#86efac] to-[#16a34a] drop-shadow-[0_0_18px_rgba(34,197,94,0.35)] bg-clip-text text-transparent shimmer">
              Funda
            </span>
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-[#22c55e]">
            {text}
            <span className="animate-pulse">.</span>
          </h2>

          <p className="mt-6 leading-relaxed text-white/70 max-w-lg">
            I'm a Frontend Developer specializing in React.js & Next.js,
            passionate about building high-quality, responsive, and visually
            engaging web applications. I also bring backend foundations in Java
            & Spring Boot — giving me the ability to collaborate across the
            stack and understand the full picture. Always exploring, improving,
            and building — one project at a time. Welcome to my world!
          </p>

          <div className="flex gap-3">
            <a
              href="/fundaCV.pdf"
              download
              className="btn mt-8 px-6 md:px-8 text-white 
                                       bg-linear-to-r from-emerald-600 to-lime-500 
                                       border-none shadow-lg rounded-3xl
                                       hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all ease-out duration-300
                                       hover:scale-[1.05]"
            >
              Download Resume{" "}
              <MdOutlineFileDownload className="bounce-custom" size={22} />
            </a>

            <button
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 md:px-8 relative mt-8 font-bold rounded-3xl
                                    text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-lime-500
                                    border-2 border-gradient-to-r border-lime-500
                                    shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]
                                    transition-all ease-out duration-300
                                    hover:scale-[1.05] cursor-pointer"
            >
              Contact Me
            </button>
          </div>
          <div className="flex gap-10 pt-8 pl-2 text-3xl text-white cursor-pointer">
            <a href="https://github.com/fundagungoralkan">
              <FaGithub
                className="
                                            bg-none fill-current
                                            transition-transform duration-300
                                            hover:scale-[1.3] hover:text-lime-300
                                            hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
              ></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/funda-gungor-alkan/">
              <FaLinkedin
                className="
                                           bg-none fill-current
                                           transition-transform duration-300
                                           hover:scale-[1.3] hover:text-lime-300
                                           hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
              ></FaLinkedin>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fundaalkan112@gmail.com">
              <SiGmail
                className="
                                          bg-none fill-current
                                          transition-transform duration-300
                                          hover:scale-[1.3] hover:text-lime-300
                                          hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
              ></SiGmail>
            </a>
          </div>
        </div>

        {/* Right (Image) */}
        <div data-aos="fade-left" className="relative w-fit mx-auto">
          {/* Resim */}
          <img
            src={hero_logo}
            alt="profile"
            className="relative  mx-auto w-72 h-72 md:w-96 md:h-96 rounded-full object-cover animate-fadeIn shadow-[0_0_60px_rgba(34,197,94,0.5)]"
          />

          {/* Yazıyı resmin biraz daha aşağısına ve yan yana yerleştir */}

          {/* İsteğe bağlı glow / arka plan blur */}
          <div
            className="absolute inset-0 
                  bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_65%)]
                  rounded-full blur-3xl"
          ></div>
        </div>
      </div>

      <div className="hidden md:block">
        {showScrollIcon ? (
          <div className="bottom-0 md:bottom-28 absolute flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 animate-floatSlow">
            <p className=" text-gray-400">Scroll Down</p>
            <Lottie
              animationData={scroll}
              loop={true}
              autoplay={true}
              className="w-13"
            />
          </div>
        ) : (
          <div className="bottom-0 md:bottom-28 absolute flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 animate-floatSlow">
            <p className=" text-gray-400">Scroll Up</p>
            <Lottie
              animationData={scroll}
              loop={true}
              autoplay={true}
              className="w-13 rotate-180"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
