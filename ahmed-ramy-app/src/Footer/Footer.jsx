import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <footer class="shadow bg-black">
      <Element name="footer">
        <div class="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://www.instagram.com/ahmedramy_3d/"
              target="_blank"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span class="[&>svg]:h-9 [&>svg]:w-9 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Ahmed Ramy
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  class="hover:underline cursor-pointer me-4 md:me-6"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={300}
                  class="hover:underline cursor-pointer me-4 md:me-6"
                >
                  Privacy Policy
                </ScrollLink>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/direct/t/17848581842959509"
                  target="_blank"
                  class="hover:underline cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <span class="block text-md text-gray-200 sm:text-center ">
            ©Ahmed-Ramy privacy-policy:
          </span>
          <span class="block text-sm text-gray-200 sm:text-center ">
            As a 19-year-old student creating Blender models, I strive to meet
            all agreed deadlines. If I fail to deliver your order on time due to
            my own delays, you will be eligible for a full refund. However, once
            the model is delivered on time, there are no refunds, even if you're
            not fully satisfied with the product. Please ensure you review the
            order details before finalizing your purchase. Feel free to contact
            me with any questions!
          </span>
        </div>
      </Element>
    </footer>
  );
};

export default Footer;
