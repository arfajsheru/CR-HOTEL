import React, { useState } from "react";
import logo2 from "../assets/logo2.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-2 font-medium ">
      <img src={logo2} className="w-16 border rounded-full" alt="" />
      {/* Nav option */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col gap-1 items-center ">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to={"/menu"} className="flex flex-col gap-1 items-center ">
          <p>Menu</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col gap-1 items-center ">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col gap-1 items-center ">
          <p>Contact Us</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
      </ul>

      {/* Action Bar */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <IoSearchSharp className="text-2xl" />
          <p className="text-[9px]">search</p>
        </div>

        <div className="flex flex-col items-center">
          <MdOutlineFavoriteBorder className="text-2xl" />
          <p className="text-[9px]">Favorite</p>
        </div>

        <Link to={"/cart"} className="flex flex-col items-center">
          <MdOutlineLocalGroceryStore className="text-2xl" />
          <p className="text-[9px]">Cart</p>
        </Link>
        <div className="flex flex-col items-center">
          <CgProfile className="text-2xl" />
          <p className="text-[9px]">Profile</p>
        </div>
        <div
          onClick={() => setVisible(true)}
          className="flex flex-col items-center md:hidden"
        >
          <TiThMenu className="text-2xl"  onClick={() => setVisible(true)} />
          <p className="text-[9px]">Menu</p>
        </div>
      </div>

      {/* sidebar Menu */}

      <div
        className={`absolute top-0 right-0 bottom-0 left-0 overflow-hidden transition-all bg-black ${
          visible ? "w-full h-full z-50" : "w-0 h-0"
        }`}
      ></div>
    </div>
  );
};

export default Navbar;
