import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoIosSend, IoLogoWhatsapp } from "react-icons/io";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.4 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_8hm8gd9",
        "template_nufqgk2",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "BwqXwMNptNPOiMzxD",
      )
      .then(
        () => {
          Swal.fire({
            title: "Successfully Sent",
            icon: "success",
            confirmButtonColor: "#008000",
          });
          reset();
          setLoading(false);
        },
        () => {
          Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Message could not be sent.",
          });
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact-section" className="py-12 sm:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
          {[
            {
              icon: <FaEnvelope className="animate-bounce" />,
              title: "Email",
              text: "fundaalkan112@gmail.com",
            },
            {
              icon: <FaPhoneAlt className="animate-pulse" />,
              title: "Phone",
              text: "+44 7771 250046",
            },
            {
              icon: <IoLogoWhatsapp className="animate-bounce" />,
              title: "Whatsapp",
              text: "+44 7771 250046",
            },
            {
              icon: <ImLocation2 className="animate-pulse" />,
              title: "Location",
              text: "Belfast, United Kingdom",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-950 backdrop-blur-xl rounded-xl p-6 text-center hover:scale-[1.03] transition shadow-lg border border-b-lime-400"
            >
              <div className="text-3xl text-lime-400 mb-2 flex justify-center">
                {item.icon}
              </div>
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="text-gray-400 text-sm mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-950 backdrop-blur-xl rounded-2xl p-6 sm:p-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Let's{" "}
              <span className="bg-linear-to-r from-emerald-700 to-lime-500 bg-clip-text text-transparent">
                {inView && (
                  <Typewriter
                    words={["Connect !"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                  />
                )}
              </span>
            </h2>
            <p className="text-gray-300 mb-4">
              {inView && (
                <Typewriter
                  words={[
                    "I’m always open to discussing new projects, creative ideas, or opportunities.",
                  ]}
                  loop={1}
                  typeSpeed={8}
                />
              )}
            </p>

            <div className="space-y-2 font-semibold text-gray-400">
              <h3 className="text-xl font-bold bg-linear-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                Available For:
              </h3>
              <p className="flex items-center gap-2 hover:text-lime-500">
                <FaLocationArrow className="text-lime-500" /> Full time & Part
                Time projects
              </p>
              <p className="flex items-center gap-2 hover:text-lime-500">
                <FaLocationArrow className="text-lime-500" /> Freelance Projects
              </p>
              <p className="flex items-center gap-2 hover:text-lime-500">
                <FaLocationArrow className="text-lime-500" /> Remote Works &
                Long time collaboration
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full bg-transparent text-lime-400"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">Name is required</span>
            )}

            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="input input-bordered w-full bg-transparent text-lime-400"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">Email is required</span>
            )}

            <textarea
              rows="5"
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="textarea textarea-bordered w-full bg-transparent text-white"
            />
            {errors.message && (
              <span className="text-red-500 text-xs">Message is required</span>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn w-full bg-linear-to-r from-emerald-600 to-lime-500 border-none font-semibold hover:scale-[1.03] transition-all text-white rounded-3xl"
            >
              {loading ? "Sending..." : "Send Message"}{" "}
              <IoIosSend className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
