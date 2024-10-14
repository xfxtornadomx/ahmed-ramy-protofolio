import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
      <nav class="border-gray-200 bg-black">
        <div class=" md:max-w-screen-3xl flex flex-wrap items-center justify-between pl-5 lg:ml-12 sm:pl-10 h-[90px]">
          <a
            href="/b178807f-4433-4eca-8451-ca43dce6651c.jpeg"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={ahmedRamy}
              class="h-[60px] rounded-full mr-[20px]"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Ahmed Ramy
            </span>
          </a>
          <div className="absolute right-0">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 mr-5 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white text-white hover:text-black focus:text-black"
              aria-controls="navbar-default"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
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
                  class="absolute md:hidden top-[60px] right-2 z-10 font-sans divide-y right-0 divide-gray-100 rounded-lg shadow w-44 bg-black border-white border-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <ul
                    class="py-2 text-sm text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <ScrollLink
                        to="home"
                        smooth={true}
                        duration={300}
                        offset={-150}
                        class="block px-4 py-3 hover:bg-white cursor-pointer hover:text-black"
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
                        class="block px-4 py-3 hover:bg-white cursor-pointer  hover:text-black"
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
                        class="block px-4 py-3 hover:bg-white cursor-pointer hover:text-black"
                      >
                        Services
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={300}
                        class="block px-4 py-3 hover:bg-white cursor-pointer  hover:text-black"
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
            class="hidden w-full md:pr-8 lg:pr-0 lg:mr-20  md:block md:w-auto"
            id="navbar-default"
          >
            <ul class="font-medium flex flex-col p-4  md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:bg-black dark:border-gray-700 text-xl">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-150}
                  class="block py-2 px-3 text-white bg-blue-700 cursor-pointer rounded md:bg-transparent text-gray-900 md:hover:text-blue-700 md:p-0 text-white "
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
                  class="block py-2 px-3 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                  class="block py-2 px-3 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={300}
                  class="block py-2 px-3 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
