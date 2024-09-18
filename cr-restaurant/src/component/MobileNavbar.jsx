import React, { useContext } from "react";
import { IoMdHome } from "react-icons/io";
import {
  MdOutlineFavoriteBorder,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
import { GiBoxUnpacking } from "react-icons/gi";
import { Link } from "react-router-dom";
import menuicon from "../assets/menu.png";

const MobileNavbar = () => {
  const { getCartCount, wishlist } = useContext(ShopContext);
  return (
    <div
      className={`fixed bottom-0 h-[65px] bg-white w-full z-10 flex justify-around items-center sm:hidden shadow-[0_-5px_10px_rgba(255,255,255,0.8)]`}
    >
      <Link
        to={"/"}
        className="flex flex-col items-center text-3xl text-black cursor-pointer"
      >
        <IoMdHome />
        <p className="text-xs">Home</p>
      </Link>

      <Link
        to={"/cart"}
        className="relative flex flex-col items-center text-2xl text-black cursor-pointer"
      >
        <MdOutlineLocalGroceryStore />
        <p className="absolute right-0 top-[-8px] w-4 h-4 flex items-center justify-center text-white bg-black rounded-full text-[11px] font-mono">
          {getCartCount()}
        </p>
        <p className="text-xs mt-1">Cart</p>
      </Link>

      <Link to={"/menu"} className="flex flex-col items-center cursor-pointer">
        <img className="w-8" src={menuicon} alt="" />
        <p className="text-xs">Menu</p>
      </Link>

      <Link
        to={"/wishlist"}
        className="relative flex flex-col items-center text-2xl text-black cursor-pointer"
      >
        <MdOutlineFavoriteBorder />
        <p className="text-xs mt-1">Wishlist</p>
        <p className="absolute right-0 top-[-8px] w-4 h-4 flex items-center justify-center text-white bg-black rounded-full text-[11px] font-bold font-mono">
          {wishlist.length}
        </p>
      </Link>

      <Link
        to={"/order"}
        className="flex flex-col items-center text-3xl text-black cursor-pointer"
      >
        <GiBoxUnpacking />
        <p className="text-xs">Order</p>
      </Link>
    </div>
  );
};

export default MobileNavbar;
