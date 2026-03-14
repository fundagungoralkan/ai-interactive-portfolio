import { FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import { GiClockwork } from 'react-icons/gi';
import { PiRadioactiveBold } from 'react-icons/pi';

const Extra1 = () => {
    return (
        <section data-aos="zoom-in-down" className="py-18 md:pt-32 relative">
            <div className="max-w-6xl mx-auto px-4 relative">

                <div className="
                             absolute inset-0 -z-10 rounded-2xl
                             bg-linear-to-r from-emerald-600 to-lime-600
                             blur-[130px] animate-pulse"/>
                {/* CARD */}
                <div className="
                              relative grid grid-cols-1 md:grid-cols-4
                              rounded-2xl py-5
                              bg-black/50 backdrop-blur-xl
                              border border-white/10
                              shadow-[0_20px_20px_rgba(132,204,22,0.17)]">
                     <div data-aos="zoom-in"  className="p-8 text-center">
                        <FaProjectDiagram className="mx-auto text-4xl text-lime-400 shake" />
                        <h3 className="text-4xl font-bold text-white mt-5">10+</h3>
                        <p className="mt-2 text-sm text-gray-300">
                            Design projects completed.
                        </p>
                    </div>

                    <div className="hidden md:block absolute left-1/4 top-6 bottom-6 w-0.5 bg-linear-to-b from-transparent via-lime-500 to-transparent" />

                    <div data-aos="zoom-in" className="p-8 text-center">
                        <PiRadioactiveBold className="mx-auto text-5xl text-lime-400 animate-spin" />
                        <h3 className="text-4xl font-bold text-white mt-2">100%</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            My enthusiasm for coding.
                        </p>
                    </div>

                    <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-0.5 bg-linear-to-b from-transparent via-lime-500 to-transparent" />

                     <div data-aos="zoom-in" className="p-8 text-center">
                        <GiClockwork className="mx-auto text-5xl text-lime-400 bounce-custom" />
                        <h3 className="text-4xl font-bold text-white mt-2">3+</h3>
                        <p className="mt-2 text-sm text-gray-300">
                            Years of experience
                        </p>
                    </div>

                    <div className="hidden md:block absolute left-3/4 top-6 bottom-6 w-0.5 bg-linear-to-b from-transparent via-lime-500 to-transparent" />

                    <div data-aos="zoom-in" className="p-8 text-center">
                        <FaLightbulb className="mx-auto text-5xl text-lime-400 animate-pulse" />
                        <h3 className="text-4xl font-bold text-white mt-2">∞</h3>
                        <p className="mt-2 text-sm text-gray-300">
                            Passion for learning & innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extra1;