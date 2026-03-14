import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const Extra2 = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section className="pt-4 pb-12 relative" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 relative">
 
                {/* CARD */}
                <div data-aos="zoom-in-down" className='flex flex-col justify-between items-center'>
                    <div className='text-center'>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            {inView && (
                                <Typewriter
                                    words={["For explore more awesome works"]}
                                    loop={1}
                                    cursor
                                    cursorStyle=""
                                    typeSpeed={30}
                                />
                            )}

                        </h2>

                        <p className="mt-4 text-base md:text-lg text-purple-200">
                            You can visit my GitHub profile and see more of my work.
                        </p>


                    </div>
                    
                    <div data-aos="zoom-in-up">
                        <a
                            href="https://github.com/fundagungoralkan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                      btn mt-8 px-8 py-6 text-white 
                                      bg-linear-to-r from-emerald-600 to-lime-500 
                                      border-none shadow-lg rounded-3xl
                                      hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all ease-out duration-300 hover:scale-[1.05] text-lg">
                               <FaGithub className='text-xl' />
                            <span className='px-2'>Visit My GitHub</span>
                            <FaExternalLinkAlt className='bounce-custom' />
                        </a>
                    </div>
                </div>
            </div>
        </section>);
};

export default Extra2;