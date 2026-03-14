import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShow(false);
            } else {
                setShow(true);
                setTimeout(() => {
                    4
                })
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const link = [
        <NavLink onClick={(e) => {
            e.preventDefault();
            document
                .getElementById("banner-section")
                ?.scrollIntoView({ behavior: "smooth" });
        }} className='relative text-lime-500 font-semibold hover:text-[#22c55e] transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c55e] after:transition-all after:duration-300 hover:after:w-full animate-glow'>Home</NavLink>,
        <NavLink onClick={(e) => {
            e.preventDefault();
            document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
        }}
            className='relative text-lime-500 font-semibold hover:text-[#22c55e] transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c55e] after:transition-all after:duration-300 hover:after:w-full animate-glow'>About</NavLink>,
        <NavLink
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("project-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className='relative text-lime-500 font-semibold hover:text-[#22c55e] transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c55e] after:transition-all after:duration-300 
           hover:after:w-full animate-glow'>Project</NavLink>,

        <NavLink
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("service-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className='relative text-lime-500 font-semibold hover:text-[#22c55e] transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c55e] after:transition-all after:duration-300 
           hover:after:w-full animate-glow'>Services</NavLink>,

        <NavLink
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className='relative text-lime-500 font-semibold hover:text-[#22c55e] transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c55e] after:transition-all after:duration-300 
           hover:after:w-full animate-glow'>Contact</NavLink>,
    ]
    return (
        <div
            className={`md:px-8 pt-5 navbar sticky top-0 z-50 backdrop-blur ${show ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="green"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content rounded-box z-10 mt-2  w-20 bg-gray-950">
                        {
                            link
                        }
                    </ul>
                </div>
                <h1 data-aos="fade-right"
                    className="text-xl md:text-4xl cursor-pointer 
           flex group select-none font-name2
           relative text-lime-500 hover:text-[#22c55e] transition 
           hover:after:w-full animate-glow">
                    <span className="wave">F</span>
                    <span className="wave">U</span>
                    <span className="wave">N</span>
                    <span className="wave">D</span>
                    <span className="wave">A</span>
            
                </h1>
            </div>
            <div data-aos="fade-left"

                className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal space-x-10 text-xl font-name2">
                    {
                        link
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;