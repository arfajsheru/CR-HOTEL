import React, { useContext, useEffect, useState } from "react";
import logo2 from "../assets/new-logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoHome, IoCallSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { GiBoxUnpacking } from "react-icons/gi";
import menuicon from "../assets/menu.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { wishlist } = useContext(ShopContext);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle body class based on visibility state
  useEffect(() => {
    document.body.classList.toggle("menu-visible", visible);
  }, [visible]);

  return (
    <>
      <div
        className={`flex items-center justify-between py-1 px-2 font-medium ${
          scrolled ? "sticky-header" : ""
        }`}
      >
        <Link to={"/"}>
          <img
            src={logo2}
            className="w-36 md:w-44 rounded-full object-cover"
            alt=""
          />
        </Link>
        {/* Nav option */}
        <ul className="hidden sm:flex gap-5 text-sm sm:text-[17px] text-gray-700 font-nav-font">
          <NavLink to={"/"} className="flex flex-col gap-1 items-center">
            <p className="nav-item text-[16px]">Home</p>
            <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
          </NavLink>
          <NavLink to={"/menu"} className="flex flex-col gap-1 items-center">
            <p className="nav-item text-[16px]">Menu</p>
            <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
          </NavLink>
          <NavLink to={"/about"} className="flex flex-col gap-1 items-center">
            <p className="nav-item text-[16px]">About</p>
            <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
          </NavLink>
          <NavLink to={"/contact"} className="flex flex-col gap-1 items-center">
            <p className="nav-item text-[16px]">Contact Us</p>
            <hr className="w-3/4 border-none h-[2px] bg-custom hidden" />
          </NavLink>
        </ul>

        {/* Action Bar */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center cursor-pointer">
            <IoSearchSharp className="text-2xl text-custom icon" />
            <p className="text-[9px]">Search</p>
          </div>

          <Link to={'/wishlist'} className="hidden sm:flex flex-col items-center cursor-pointer relative">
            <MdOutlineFavoriteBorder className="text-2xl text-custom icon" />
            <p className="text-[9px]">Favorite</p>
            <p className="absolute right-[-2px] top-[-8px] w-4 leading-4 bg-custom aspect-square text-center rounded-[7px] text-[9px] font-bold font-mono">
              {wishlist.length}
            </p>
          </Link>

          <Link
            to={"/cart"}
            className="hidden sm:flex flex-col items-center cursor-pointer relative"
          >
            <MdOutlineLocalGroceryStore className="text-2xl text-custom icon" />
            <p className="text-[9px] relative">Cart</p>
            <p className="absolute right-[-2px] top-[-8px] w-4 leading-4 bg-custom aspect-square text-center rounded-[7px] text-[9px] font-bold font-mono">
              99
            </p>
          </Link>

          <div
            onClick={() => setVisible(true)}
            className="flex flex-col items-center"
          >
            <CgProfile
              className="text-2xl text-custom cursor-pointer icon"
              onClick={() => setVisible(true)}
            />
            <p className="text-[9px]">Menu</p>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed right-0 bottom-0 left-0 overflow-hidden bg-white transition-transform duration-500 ${
          visible ? "translate-x-0 w-[80vw] h-full z-50 menu" : "-translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-between py-2 px-2 pl-6 border-b">
            <div className="flex gap-[5px] items-center">
              <CgProfile className="text-[20px]" />
              <p>Profile</p>
            </div>
            <div
              onClick={() => setVisible(false)}
              className="flex gap-1 items-center cursor-pointer"
            >
              <RxCross2 />
            </div>
          </div>

          <div className="flex flex-col">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="py-2 px-7 border-b flex items-center gap-2"
            >
              <IoHome />
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/menu"
              className="py-2 px-7 border-b flex items-center gap-2"
            >
              <BiMenu />
              Menu
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className="py-2 px-7 border-b flex items-center gap-2"
            >
              <i className="fa-regular fa-address-card"></i>
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className="py-2 px-7 border-b flex items-center gap-2"
            >
              <IoCallSharp />
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-0 h-[60px] bg-white w-full z-10 flex justify-around items-center sm:hidden shadow-[0_-5px_10px_rgba(255,255,255,0.8)]`}
      >
        <Link to={"/"} className="flex flex-col items-center text-3xl text-black cursor-pointer">
          <IoMdHome />
          <p className="text-xs">Home</p>
        </Link>

        <Link to={"/cart"} className="flex flex-col items-center text-3xl text-black cursor-pointer">
          <MdOutlineLocalGroceryStore />
          <p className="text-xs">Cart</p>
        </Link>

        <Link to={"/menu"} className="flex flex-col items-center cursor-pointer">
          <img className="w-8" src={menuicon} alt="" />
          <p className="text-xs">Menu</p>
        </Link>

        <Link to={"/wishlist"} className="flex flex-col items-center text-3xl text-black cursor-pointer relative">
          <MdOutlineFavoriteBorder />
          <p className="text-xs">Wishlist</p>
          <p className="absolute right-[1px] top-[-5px] w-4 leading-4 text-white bg-black aspect-square text-center rounded-[7px] text-[13px] font-bold font-mono">
              {wishlist.length}
            </p>
        </Link>

        <Link to={"/order"} className="flex flex-col items-center text-3xl text-black cursor-pointer">
          <GiBoxUnpacking />
          <p className="text-xs">Order</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
