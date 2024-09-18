import React, { useContext, useEffect, useState } from "react";
import logo2 from "../assets/new-logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import {
  MdOutlineFavoriteBorder,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ShopContext } from "../context/ShopContext";
import MobileNavbar from "./MobileNavbar";
import SidebarNav from "./SidebarNav";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const {
    wishlist,
    getCartCount,
    visible,
    setVisible,
    setSearchVisible,
    searchVisible,
  } = useContext(ShopContext);

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
            <IoSearchSharp
              onClick={() => setSearchVisible(!searchVisible)}
              className="text-2xl text-custom icon"
            />
            <p className="text-[9px]">Search</p>
          </div>

          <Link
            to={"/wishlist"}
            className="hidden sm:flex flex-col items-center cursor-pointer relative"
          >
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
              {getCartCount()}
            </p>
          </Link>

          <div
            onClick={() => setVisible(true)}
            className="flex flex-col items-center"
          >
            <CgProfile
              className="text-2xl text-custom cursor-pointer icon scroll-"
              onClick={() => setVisible(true)}
            />
            <p className="text-[9px]">Menu</p>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <SidebarNav />

      {/* Mobile Navbar */}
      <MobileNavbar />
    </>
  );
};

export default Navbar;
