import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../component/ProductItem";
import Title from "../component/Title";

const Wishlist = () => {

  useEffect(() => {
    window.scroll(0,0);
  },[])
  const { wishlist } = useContext(ShopContext);
  return (
    <div className="py-4">
      <div className=" text-2xl sm:text-3xl text-center">
        <Title text1={"WHISLIST"} text2={"ITEMS"} />
      </div>
      {wishlist.length === 0 && 
      <div className="flex items-center justify-center h-[70vh]">
        <h1 className="text-6xl text-custom font-bold text-center">NO PRODCUTS HERE</h1>
      </div>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4 mb-9 ">
        {wishlist.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
