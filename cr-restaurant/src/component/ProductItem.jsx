import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
import { FcDislike } from "react-icons/fc";
const ProductItem = ({ item }) => {
  const { wishlist, addToWhislist, removeToWishlist } = useContext(ShopContext);
  const [isFovrite,setIsFovrite]= useState(false);

  const handleWhislistItems = () => {
    if(wishlist.find(w => w.id === item.id)){
        removeToWishlist(item.id);
        setIsFovrite(false)
    } else {
        addToWhislist(item);
        setIsFovrite(true)
    }
  };

  return (
    <div
      
      className="flex flex-col border rounded p-1 justify-between animate-fadeInUp bg-white shadow-md hover:shadow-lg hover:shadow-black shadow-zinc-500 "
    >
      {/* Item img */}
      <div className="relative overflow-hidden">
        <div className="w-[30%] bg-white cursor-pointer">
            {isFovrite ? 
        <FcDislike onClick={handleWhislistItems} className="absolute right-1 top-1 z-50 text-2xl text-white font-bold" />
        :
        <MdOutlineFavoriteBorder onClick={handleWhislistItems} className="absolute right-1 top-1 z-50 text-2xl text-white font-bold" /> 
        }
        </div>
        <Link to={`/product/${item.id}`}> 
        <img
          src={item.image}
          className="w-full h-48 object-cover rounded hover:scale-110 transition-all duration-1000"
          alt=""
        />
        </Link>

        {/* Item Rating */}
        <div className="p-1  bg-[#fefefe6b] font-footer-font font-medium flex items-center justify-center text-[12px] absolute bottom-1 left-1 hover:bg-[#ffffffb7] ">
          {item?.rating?.stars}★ | {item?.rating?.view}
        </div>
        <div className="absolute top-1 left-1 p-1 bg-orange-600 w-7 font-roboto text-center text-white flex flex-col border-t-left rounded-tl-[10px]">
          <span className="text-[9px] font-bold leading-[10px]">
            {item.offer}%
          </span>
          <span className="text-[9px] font-bold leading-[10px]">OFF</span>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-1">
        <div className="flex text-[9px] gap-1 font-roboto font-bold text-gray-500">
          <span>{item.category}</span>
          <span>|</span>
          <span>{item.subCategory}</span>
        </div>
        <div className="text-[14px] font-roboto font-medium">{item.name}</div>

        <div className="flex gap-2">
          <span className="font-bold text-sm">Rs.{item.current_Price}</span>
          <span className="text-gray-500 line-through text-sm">
            Rs.{item.original_Price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
