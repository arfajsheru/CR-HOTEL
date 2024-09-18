import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoIosArrowBack, IoIosHelpCircle } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import discount from "../assets/discount.png";
import { ShopContext } from "../context/ShopContext";
const SidebarNav = () => {
  const [information, setInformation] = useState(false);
  const { visible, setVisible } = useContext(ShopContext);
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${
          visible ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setVisible(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed right-0 bottom-0 left-0 overflow-hidden bg-white transition-transform duration-500 ${
          visible
            ? "translate-x-0 md:w-[500px] h-full z-50 menu"
            : "-translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="bg-custom flex gap-1 items-center font-medium h-10 shadow-md cursor-pointer"
          >
            <div>
              <IoIosArrowBack />
            </div>
            <p>MY Account</p>
          </div>
          <div className="flex h-20 border-b border-gray-300 pl-2">
            <div className="flex gap-[5px] items-center">
              <CgProfile className="text-5xl" />
              <div className="flex flex-col">
                <p className="text-xl font-medium">Cafe Rajasthan</p>
                <p className="text-xs text-gray-700">Caferajsthan@gamil.com</p>
                <p className="text-xs text-gray-700">8828110344</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-3 px-2 border-b border-gray-300 pb-3 pl-2">
            <Link
              to={"/order"}
              onClick={() => setVisible(false)}
              className="h-20 w-20 bg-gray-200 flex items-center flex-col justify-center rounded-2xl text-xs gap-1 cursor-pointer hover:bg-gray-100"
            >
              <GiBoxUnpacking className="text-3xl" /> order
            </Link>
            <Link
              to={"/wishlist"}
              onClick={() => setVisible(false)}
              className="h-20 w-20 bg-gray-200 flex items-center flex-col justify-center rounded-2xl text-xs gap-1 cursor-pointer hover:bg-gray-100"
            >
              <MdOutlineFavoriteBorder className="text-3xl" /> Whislist
            </Link>
            <div className="h-20 w-20 bg-gray-200 flex items-center flex-col justify-center rounded-2xl text-xs gap-1 cursor-pointer hover:bg-gray-100">
              <img src={discount} alt="" />
              Coupons
            </div>
            <div className="h-20 w-20 bg-gray-200 flex items-center flex-col justify-center rounded-2xl text-xs gap-1 cursor-pointer hover:bg-gray-100">
              <IoIosHelpCircle className="text-3xl" />
              Help
            </div>
          </div>

          <div className="flex flex-col mt-3 pl-2">
            <div className="flex justify-between items-center pr-2">
              <p className="text-[15px] font-medium">More Information</p>
              <IoIosArrowBack
                onClick={() => setInformation(!information)}
                className={`cursor-pointer ${
                  information ? "-rotate-90" : "rotate-90"
                }`}
              />
            </div>

            <div className={`${information ? "block" : "hidden"}`}>
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
      </div>
    </div>
  );
};

export default SidebarNav;
