import "./home.css";
import React from "react";
import sauvage from "../media/savuage.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link as ScrollLink } from "react-scroll";
import "swiper/css"; // Basic CSS for Swiper
import "swiper/css/navigation"; // Navigation CSS
import "swiper/css/pagination"; // Pagination CSS
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import rolex from "../media/rolex.jpeg";
import blender from "../media/jeremiah-semanko-blender-logo.jpg";
import leather from "../media/tom-ford-leather.png";
import camera from "../media/camera.jpg";
import blanche from "../media/blanche-black.jpeg";
import daniel from "../media/Jack-Daniels-chrome.jpeg";
import yacht from "../media/yacht-blue.jpeg";
import homme from "../media/perfume-home.jpeg";
import ola from "../media/gold-ola.jpeg";
import horse from "../media/gold-horse.jpeg";
import pinkPerfume from "../media/pink perfume.jpeg";
import declinedPerfume from "../media/declined-perfume.jpeg";
import { Element } from "react-scroll";

function Home() {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Mountain View, California, United State.",
      title: "Our office",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+1 (555) 000-000",
      title: "Phone",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "Support@example.com",
      title: "Email",
    },
  ];

  return (
    <div>
      <Element name="home">
        <section className="bg-black ">
          <div className="grid max-w-screen-2xl px-4  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Unleash your imagination in 3D
              </h1>
              <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                Balancing technical perfection with creativity can be
                challenging, sometimes leading to visually impressive but
                emotionally flat creations.
              </p>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={400}
              >
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center cursor-pointer px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700  focus:ring-2 focus:ring-white"
                  initial={{ backgroundColor: "#000000" }}
                  whileHover={{
                    backgroundColor: "#ffffff",
                    color: "black",
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Dive in
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </motion.a>
              </ScrollLink>
            </div>
            <div className=" lg:mt-0 p-6  pt-4 sm:p-4 lg:p-2 md:w-1/2 lg:w-full lg:pt-0 lg:col-span-5 lg:flex max-w-2xl  ">
              <img
                src={sauvage}
                alt="mockup"
                className="rounded-2xl w-full
           h-auto"
              />
            </div>
          </div>
        </section>
      </Element>
      <Element name="about">
        <section className="py-24 relative xl:mr-0 mr-0 bg-black ">
          <div className=" max-w-7xl px-4 md:px-5 lg:px-0 mx-auto w-full ">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full safari-flex flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="flex-col justify-start lg:items-start items-center gap-6 flex">
                    <h6 className="text-black text-base font-normal leading-relaxed">
                      About Us
                    </h6>
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-indigo-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        The Tale of Our Achievement Story
                      </h2>
                      <p className="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                        Through my work, I've mastered 3D modeling, animation
                        principles, and rendering techniques, ensuring that
                        every character and environment I create feels dynamic
                        and lifelike. I've gained expertise in rigging,
                        texturing, and lighting, enhancing the visual depth of
                        my projects.My experience has also strengthened my
                        problem-solving abilities and teamwork skills, enabling
                        me to navigate technical challenges and collaborate
                        effectively in fast-paced environments.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-6 flex safari-flex">
                    <div className="w-full safari-flex justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                      <div className="w-full h-full p-3.5 rounded-xl border border-grey-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex ">
                        <h4 className="text-indigo-500  text-2xl font-bold font-manrope leading-9">
                          2+ Years
                        </h4>
                        <p className="text-gray-100 text-base font-normal leading-relaxed">
                          Bringing imagination to life through pixels
                        </p>
                      </div>
                      <div className="w-full h-full  p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <a>
                          <h4 className="text-indigo-500 text-2xl font-bold font-manrope leading-9">
                            33+ Projects
                          </h4>
                        </a>
                        <p className="text-gray-100 text-base font-normal leading-relaxed">
                          Excellence Achieved Through Success
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full safari-flex justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-indigo-500 text-2xl font-bold font-manrope leading-9">
                          3+ certifications
                        </h4>
                        <p className="text-gray-100 text-base font-normal leading-relaxed">
                          Our Dedication to Innovation Wins Understanding
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-indigo-500 text-2xl font-bold font-manrope leading-9">
                          99% Happy Clients
                        </h4>
                        <p className="text-gray-100 text-base font-normal leading-relaxed">
                          Mirrors our Focus on Client Satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={400}
                >
                  <motion.button
                    className="sm:w-fit w-full group px-3.5 py-2 cursor-pointer bg-white hover:bg-indigo-100 rounded-lg   ease-in-out justify-center items-center flex"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="px-1.5 text-black text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-200 ease-in-out">
                      Show projects
                    </span>
                    <svg
                      className="group-hover:translate-x-0.5 transition-all duration-200 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                        stroke="#4F46E5"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </ScrollLink>
              </div>
              <div className="w-full  justify-center items-start flex">
                <div className="w-full h-full overflow-hidden rounded-3xl sm:mt-10 relative md:ml-12">
                  <img
                    className="pt-2 pl-11 w-full h-auto"
                    src={rolex}
                    alt="about Us image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="services">
        <section className="py-24 relative bg-black">
          <div className="w-full max-w-2xl lg:max-w-full px-8 lg:px-36 mx-auto">
            <h1 className="font-manrope font-medium font-sans text-4xl text-gray-200 mb-10 max-md:text-center">
              Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center flex-col gap-8 w-full group">
                <div className="block">
                  <img
                    className="rounded-3xl w-[400px] h-[500px]"
                    src={leather}
                    alt="Project Achievements of Sketch"
                  />
                </div>
                <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                  <div className="block">
                    <h4 className="text-2xl font-manrope font-semibold text-indigo-600 mb-2">
                      3D design and modeling
                    </h4>
                    <p className="font-medium text-lg text-gray-200">
                      professional modeling and design
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex items-center flex-col gap-4 w-full">
                <div className="block">
                  <img
                    className="rounded-3xl object-cover h-[500px]"
                    src={blender}
                    alt="Project Achievements of Figma"
                  />
                </div>
                <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                  <div className="block">
                    <h4 className="text-2xl font-manrope font-semibold text-indigo-600 mb-2">
                      blender
                    </h4>
                    <p className="font-medium text-lg text-gray-200">
                      2+ years of experience in blender
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
                <div className="block">
                  <img
                    className="rounded-3xl object-cover h-[500px]"
                    src={camera}
                    alt="Project Achievements of Frame.io"
                  />
                </div>
                <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                  <div className="block">
                    <h4 className="text-2xl font-manrope font-semibold text-indigo-600 mb-2">
                      Model animator
                    </h4>
                    <p className="font-medium text-lg text-gray-200">
                      Experience in animating 3d models
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="projects">
        <section className=" bg-black py-24 relative ">
          <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-y-4 mb-5">
              <h2 className="font-manrope font-bold text-4xl text-indigo-600">
                Designs and Models
              </h2>
              <div className="flex justify-center items-center gap-6">
                <button className=" rounded-full previous-photo w-14 h-9 flex items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-700 transition-all duration-300 group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.38449 15.1023L3.33337 10.0512M3.33337 10.0512L8.38449 5.00006M3.33337 10.0512H18.3333"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="rounded-full w-14 h-9 flex next-photo items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-700 transition-all duration-300 group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.6155 5.00006L16.6667 10.0512M16.6667 10.0512L11.6155 15.1023M16.6667 10.0512L1.66675 10.0512"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p className="font-normal text-base text-gray-200 py-8 pb-8 md:pb-[100px] max-w-4xl max-sm:text-center">
              Breathtaking designs modeled carefully and concisely aiming for
              customer satisfaction.
            </p>
          </div>

          {/* Swiper Section */}
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            slideToClickedSlide={true}
            navigation={{
              nextEl: ".next-photo",
              prevEl: ".previous-photo",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper mb-10 py-10 md:mt-6 "
          >
            <SwiperSlide>
              <div className="w-full h-full max-h-[456px] ">
                <img
                  src={blanche}
                  alt="Creative Expression 1"
                  className="w-full h-full object-cover mx-auto rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full lg:w-1/2 lg:my-auto lg:mx-auto h-full max-h-[456px] md:max-h-[550px]">
                <img
                  src={daniel}
                  alt="Creative Expression 2"
                  className="w-full object-cover h-full mx-auto rounded-xl md:-translate-y-[90px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full lg:w-2/3 lg:mx-auto h-full max-h-[456px]">
                <img
                  src={yacht}
                  alt="Creative Expression 3"
                  className="w-full h-full object-cover mx-auto rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full lg:w-2/3 lg:mx-auto max-h-[456px]">
                <img
                  src={homme}
                  alt="Creative Expression 3"
                  className="w-full h-full object-cover mx-auto rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full lg:w-2/3 lg:mx-auto h-full max-h-[456px]">
                <img
                  src={pinkPerfume}
                  alt="Creative Expression 3"
                  className="w-full h-full object-cover mx-auto rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full max-h-[456px]">
                <img
                  src={declinedPerfume}
                  alt="Creative Expression 3"
                  className="w-full h-full object-cover mx-auto rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full max-h-[456px]">
                <img
                  src={ola}
                  alt="Creative Expression 3"
                  className="w-full h-full object-cover mx-auto rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full max-h-[456px]">
                <img
                  src={horse}
                  alt="Creative Expression 3"
                  className="w-full h-full object-cover mx-auto rounded-xl"
                />
              </div>
            </SwiperSlide>
            {/* Additional SwiperSlides */}
          </Swiper>
        </section>
      </Element>
      <Element name="contact">
        <section className="pb-12 bg-black">
          <div className="container px-2 lg:px-20 lg:max-w-full py-12 mx-auto">
            <div className="text-center">
              <p className="font-medium text-lg text-gray-400">Contact us</p>

              <h1 className="mt-6 text-2xl font-semibold text-gray-100 md:text-4xl">
                Get in touch
              </h1>

              <p className="mt-6 text-lg text-indigo-500 pb-6 ">
                24 Hours Dm availability
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://www.facebook.com/profile.php?id=100051878018273&locale=ar_AR"
                target="_blank"
              >
                <div className="flex cursor-pointer flex-col items-center justify-center text-center">
                  <span className="[&>svg]:h-9 [&>svg]:w-9 text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-white">
                    facebook
                  </h2>
                  <p className="mt-2 text-gray-400">
                    reach out to me on facebook for professional work
                  </p>
                  <p className="mt-2 text-blue-400">Ahmed Ramy </p>
                </div>
              </a>
              <div className="flex flex-col items-center justify-center text-center">
                <a
                  href="https://www.instagram.com/ahmedramy_3d/"
                  target="_blank"
                >
                  <span className="[&>svg]:h-9 [&>svg]:w-9 text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </a>

                <h2 className="mt-4 text-lg font-medium text-white">
                  Instagram
                </h2>
                <p className="mt-2 text-gray-400">
                  Dm me for professional work
                </p>
                <p className="mt-2 text-blue-400">
                  <a
                    href="https://www.instagram.com/ahmedramy_3d/"
                    target="_blank"
                  >
                    @ahmedramy_3d
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <a
                  href="https://www.youtube.com/@ahmedramy-blender.3D"
                  target="_blank"
                >
                  <span className="[&>svg]:h-9 [&>svg]:w-9 text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </span>
                </a>

                <h2 className="mt-4 text-lg font-medium text-white">Youtube</h2>
                <p className="mt-2 text-gray-400">
                  Explore a huge variety of creative projects and tutorials
                </p>
                <p className="mt-2 text-blue-400">
                  <a
                    href="https://www.youtube.com/@ahmedramy-blender.3D"
                    target="_blank"
                  >
                    @ahmedramy-blender.3D
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}

export default Home;
