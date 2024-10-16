import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "flowbite";
import ahmedRamy from "../media/ahmed-ramy.jpeg";
import { AnimatePresence, motion } from "framer-motion";
// Import Flowbite scripts for interactive components

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".Navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="Navbar">
      <nav className=" border-gray-200 bg-black">
        <div className=" md:max-w-screen-3xl flex flex-wrap items-center justify-between pl-5 lg:ml-12 sm:pl-10 h-[90px]">
          <a
            href="/b178807f-4433-4eca-8451-ca43dce6651c.jpeg"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={ahmedRamy}
              className="h-[60px] rounded-full mr-[20px]"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Ahmed Ramy
            </span>
          </a>
          <div className="absolute right-0">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 mr-5 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white text-white hover:text-black focus:text-black"
              aria-controls="navbar-default"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  id="dropdown"
                  className="absolute md:hidden top-[60px] right-2 z-10 font-sans divide-y right-0 divide-gray-100 rounded-lg shadow w-44 bg-black border-white border-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <ul
                    className="py-2 text-sm text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <ScrollLink
                        to="home"
                        smooth={true}
                        duration={300}
                        offset={-150}
                        className="block px-4 py-3 cursor-pointer hover:bg-white  hover:text-black"
                      >
                        Home
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="about"
                        smooth={true}
                        duration={300}
                        offset={-50}
                        className="block px-4 py-3 cursor-pointer hover:bg-white  hover:text-black"
                      >
                        About
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="services"
                        smooth={true}
                        duration={300}
                        offset={-70}
                        className="block px-4 py-3 cursor-pointer hover:bg-white  hover:text-black"
                      >
                        Services
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={300}
                        className="block px-4 py-3 cursor-pointer hover:bg-white  hover:text-black"
                      >
                        contact
                      </ScrollLink>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className="hidden w-full md:pr-8 lg:pr-0 lg:mr-20  md:block md:w-auto "
            id="navbar-default "
          >
            <ul className="font-medium flex flex-col p-4  md:p-0 mt-4  border border-gray-100 rounded-lg md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0  bg-black dark:border-gray-700 text-xl">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-150}
                  className="block py-2 px-3 cursor-pointer text-white bg-blue-700 rounded md:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white "
                  aria-current="page"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="block py-2 px-3 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="block py-2 px-3  rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={300}
                  className="block py-2 px-3 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
