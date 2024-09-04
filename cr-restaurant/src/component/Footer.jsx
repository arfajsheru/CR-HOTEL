import React from "react";
import {NavLink} from "react-router-dom"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-custom text-white py-10 mt-3 container onscroll">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 bg-custom">
        {/* Home info section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-1xl font-nav-font font-bold md:text-3xl">Cafe Rajasthan</h2>
          <p className="font-footer-font text-[12px] md:text-[16px] hover:scale-x-95 transition-transform duration-700">
            Thankyou So Much Guys For Your Valuable Time
          </p>
          <div className="flex gap-1">
            <FaFacebookSquare className="text-2xl sm:text-3xl" />
            <FaSquareInstagram className="text-2xl sm:text-3xl" />
            <IoLogoLinkedin className="text-2xl sm:text-3xl" />
            <FaSquareXTwitter className="text-2xl sm:text-3xl" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-1xl font-nav-font font-bold md:text-3xl">Contact Us</h2>
          <div className="text-[12px] flex flex-col gap-2">
            <p className="flex  gap-1 md:gap-2 items-center hover:scale-x-95 transition-transform duration-700 md:text-[16px]"><IoCallSharp/>+91 9913690041</p>
            <p className="flex  gap-1 md:gap-2 items-center hover:scale-x-95 transition-transform duration-700 md:text-[16px]"><IoCallSharp/>+91 9898321112</p>
            <p className="flex  gap-1 md:gap-2 items-center hover:scale-x-95 transition-transform duration-700 md:text-[16px]"><SiGmail />caferajasthan@gmail.com</p>
            <p className="flex  gap-1 md:gap-2 items-center hover:scale-x-95 transition-transform duration-700 md:text-[16px]"><FaLocationArrow />India, west Street - +91</p>
          </div>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-6 ">
          <h2 className="text-1xl font-nav-font font-bold md:text-3xl">Explore</h2>
            <ul className="flex flex-col gap-2">
              <li><NavLink className="flex text-[12px] items-center hover:scale-x-95 transition-transform duration-700 gap-1" href=""><FaArrowRight />Home</NavLink></li>
              <li><NavLink className="flex text-[12px] items-center hover:scale-x-95 transition-transform duration-700 gap-1" href=""><FaArrowRight />About us</NavLink></li>
              <li><NavLink className="flex text-[12px] items-center hover:scale-x-95 transition-transform duration-700 gap-1" href=""><FaArrowRight />Menu</NavLink></li>
              <li><NavLink className="flex text-[12px] items-center hover:scale-x-95 transition-transform duration-700 gap-1" href=""><FaArrowRight />Service</NavLink></li>
              <li><NavLink className="flex text-[12px] items-center hover:scale-x-95 transition-transform duration-700 gap-1" href=""><FaArrowRight />Rooms</NavLink></li>
              <li><NavLink className="flex text-[12px] items-center hover:scale-x-95 transition-transform duration-700 gap-1" href=""><FaArrowRight />Customer Review</NavLink></li>
            </ul>
        </div>

        <div className="flex flex-col gap-6 ">
          <h2 className="text-1xl font-nav-font font-bold md:text-3xl">Subscibe Us</h2>
          <p className="font-footer-font text-[12px] md:text-[16px] hover:scale-x-95 transition-transform duration-700">Subscribe For Latest Updation</p>
          <div className="flex flex-col gap-2">
              <input type="text" className="bg-white outline-none border-none h-8 w-full px-2 rounded-sm" placeholder="Enter your Email" />
              <button className="bg-black w-full py-1 border border-white hover:bg-custom hover:text-black transition-colors duration-1000">Subscibe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
