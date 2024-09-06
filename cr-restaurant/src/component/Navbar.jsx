import React, { useEffect, useState } from "react";
import logo2 from "../assets/new-logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowRoundBack } from "react-icons/io";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={` flex items-center justify-between py-1 font-medium border-b-2 border-custom `}
    >
      <Link to={"/"}>
        <img
          src={logo2}
          className="w-36 md:w-44 rounded-full object-cover"
          alt=""
        />
      </Link>
      {/* Nav option */}
      <ul className="hidden sm:flex gap-5 text-sm sm:text-[17px] text-gray-700 font-nav-font ">
        <NavLink to={"/"} className="flex flex-col gap-1 items-center ">
          <p className="nav-item text-[16px]">Home</p>
          <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
        </NavLink>
        <NavLink to={"/menu"} className="flex flex-col gap-1 items-center ">
          <p className="nav-item text-[16px]">Menu</p>
          <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col gap-1 items-center ">
          <p className="nav-item text-[16px]">About</p>
          <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col gap-1 items-center ">
          <p className="nav-item text-[16px]">Contact Us</p>
          <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
        </NavLink>
      </ul>

      {/* Action Bar */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center cursor-pointer ">
          <IoSearchSharp className="text-2xl text-custom icon" />
          <p className="text-[9px]">search</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer ">
          <MdOutlineFavoriteBorder className="text-2xl text-custom icon" />
          <p className="text-[9px]">Favorite</p>
        </div>

        <Link
          to={"/cart"}
          className="flex flex-col items-center cursor-pointer relative"
        >
          <MdOutlineLocalGroceryStore className="text-2xl text-custom icon" />
          <p className="text-[9px] relative">Cart</p>
          <p className="absolute right-1 top-[-13px] rounded-full bg-custom text-[10px] w-4 h-4 text-center  ">10</p>
        </Link>
        <div className="hidden sm:flex flex-col items-center cursor-pointer ">
          <CgProfile className="text-2xl text-custom icon" />
          <p className="text-[9px]">Profile</p>
        </div>
        <div
          onClick={() => setVisible(true)}
          className="flex flex-col items-center md:hidden"
        >
          <TiThMenu
            className="text-2xl text-custom cursor-pointer icon "
            onClick={() => setVisible(true)}
          />
          <p className="text-[9px]">Menu</p>
        </div>
      </div>

      {/* sidebar Menu */}

      <div
        className={`absolute top-0 right-0 bottom-0 left-0 overflow-hidden transition-all bg-white ${
          visible ? "w-full h-full z-50" : "w-0 h-0"
        }`}
      >
        <div className="flex flex-col">
          <div className=" flex justify-between py-2 px-2 border-b bg-black text-custom">
            <div
              onClick={() => setVisible(false)}
              className="flex gap-1 items-center "
            >
              <IoMdArrowRoundBack />
              <p>Back</p>
            </div>
            <CgProfile className="text-2xl" />
          </div>

          <div className="flex flex-col">

            <NavLink
              onClick={() => setVisible(false)}
              to={"/"}
              className="py-2 px-7 border-b bg-custom   hover:bg-black hover:text-custom"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/menu"}
              className="py-2 px-7 border-b bg-custom   hover:bg-black hover:text-custom"
            >
              Menu
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/about"}
              className="py-2 px-7 border-b bg-custom   hover:bg-black hover:text-custom"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/contact"}
              className="py-2 px-7 border-b bg-custom  hover:bg-black hover:text-custom"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
