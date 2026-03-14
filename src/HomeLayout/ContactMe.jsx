import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoIosSend, IoLogoWhatsapp } from "react-icons/io";
import { PiPlugsConnectedFill } from "react-icons/pi";

import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const ContactMe = () => {

  const [loading, setLoading] = useState(false);

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
        "BwqXwMNptNPOiMzxD"
      )
      .then(
        () => {
          Swal.fire({
            title: "Successfully Sent",
            text: "Your message has been sent!",
            icon: "success",
            confirmButtonColor: "#008000",
          });
          reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Message could not be sent.",
            icon: "error",
          });
          setLoading(false);
        }
      );
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <section id="contact-section" className="py-12 sm:py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div>

          <div
            className="
              absolute inset-0 mx-22 max-w-8xl
              bg-linear-to-br from-lime-600 to-lime-400
              rounded-2xl blur-[60px] opacity-25
            "
          />

          {/* TOP INFO CARDS */}

          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-6 mb-16 max-w-6xl mx-auto
              static sm:absolute
              sm:-top-5 sm:right-45
              z-10">

            {[
              {
                icon: <FaEnvelope className="bounce-custom" />,
                title: "Email",
                text: "fundaalkan112@gmail.com",
              },
              {
                icon: <FaPhoneAlt className="shake" />,
                title: "Phone",
                text: "+44 7771 250046",
              },
              {
                icon: <IoLogoWhatsapp className="bounce-custom" />,
                title: "Whatsapp",
                text: "+44 7771 250046",
              },
              {
                icon: <ImLocation2 className="animate-pulse" />,
                title: "Location",
                text: "Belfast, United Kingdom",
              },
            ].map((item, i) => (
              <div key={i}>
                <div
                  className="
                    bg-gray-950 backdrop-blur-xl
                    rounded-xl p-7 px-10 mx-14 md:mx-0 text-center
                    hover:scale-[1.03] duration-300
                    shadow-[0_10px_30px_rgba(34,197,94,0.3)]
                    hover:shadow-[0_15px_50px_rgba(34,197,94,0.4)]
                    border border-b-lime-400
                  "
                >
                  <div className="text-3xl text-lime-400 flex justify-center mx-auto mb-3">
                    {item.icon}
                  </div>

                  <h4 className="text-white text-lg font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MAIN CONTACT BOX */}

          <div
            className="
              grid grid-cols-1 lg:grid-cols-2 gap-10
              bg-gray-950 backdrop-blur-xl
              rounded-2xl
              p-6 sm:p-10
              pt-10 sm:pt-20">

            {/* LEFT */}

            <div>
              <div className="text-2xl sm:text-3xl font-bold flex gap-2">
                <PiPlugsConnectedFill className="text-lime-400 mt-1 animate-pulse" />

                <h2 className="text-white mb-4">
                  Let's{" "}
                  <span className="bg-linear-to-r from-emerald-700 to-lime-500 bg-clip-text text-transparent">
                    {inView && (
                      <Typewriter
                        words={["Connect !"]}
                        loop={1}
                        cursor
                        typeSpeed={80}
                      />
                    )}
                  </span>
                </h2>
              </div>

              <p className="text-gray-300 mb-6">
                {inView && (
                  <Typewriter
                    words={[
                      "I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
                    ]}
                    loop={1}
                    typeSpeed={8}
                  />
                )}
              </p>

              <p className="text-gray-400 text-sm mb-7">
                Feel free to reach out if you have a question or just want to say hi.
              </p>

              <div className="space-y-3 font-semibold">

                <h3 className="font-bold bg-linear-to-r from-emerald-600 to-lime-400 bg-clip-text text-transparent text-xl">
                  Available For:
                </h3>

                <p className="flex items-center gap-2 text-gray-400 hover:text-lime-500">
                  <FaLocationArrow className="text-lime-500" />
                  Full time & Part Time projects
                </p>

                <p className="flex items-center gap-2 text-gray-400 hover:text-lime-500">
                  <FaLocationArrow className="text-lime-500" />
                  Freelance Projects
                </p>

                <p className="flex items-center gap-2 text-gray-400 hover:text-lime-500">
                  <FaLocationArrow className="text-lime-500" />
                  Remote Works & Long time collaboration
                </p>

              </div>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full bg-transparent text-lime-400"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    Name is required
                  </span>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full bg-transparent text-lime-400"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    Email is required
                  </span>
                )}
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                  className="textarea textarea-bordered w-full bg-transparent text-white"
                />
                {errors.message && (
                  <span className="text-red-500 text-xs">
                    Message is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  btn w-full
                  bg-linear-to-r from-emerald-600 to-lime-500
                  border-none font-semibold
                  hover:scale-[1.03]
                  transition-all
                  text-white rounded-3xl
                "
              >
                {loading ? "Sending..." : "Send Message"}
                <IoIosSend className="text-xl ml-2" />
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;