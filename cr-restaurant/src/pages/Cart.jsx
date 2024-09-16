import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { foodItems } from "../assets/assets";
import { RxCross2 } from "react-icons/rx";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../component/CartTotal";
import { FaOpencart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitems, cartdata, setcartData, UpdateQuantity } =
    useContext(ShopContext);
    const navigate = useNavigate()

  useEffect(() => {
    let tempData = [];
    // Use Object.entries to get both keys and values
    for (const [id, quantity] of Object.entries(cartitems)) {
      if (quantity > 0) {
        tempData.push({
          id: id,
          quantity: quantity,
        });
      }
    }
    setcartData(tempData);
  }, [cartitems]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleQuntityChange = (itemId,newQuantity) => {
    if(newQuantity > 0) {
      UpdateQuantity(itemId,newQuantity);
    }
  }

  return (
    <div className="py-4">
      {/* Right side  */}
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="flex flex-col gap-2 md:gap-3 p-2  w-full md:w-[60%]">
          <div className="text-2xl md:text-3xl text-center">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>
          {cartdata.map((item, index) => {
            const productData = foodItems.find((food) => food.id === item.id);
            return (
              <div
                key={index}
                className="relative border border-gray-200 p-1 flex w-full items-center justify-between md:gap-4 hover:bg-gray-50"
              >
                <div className="flex  justify-between gap-1 md:gap-4">
                  <img src={productData.image} className="w-20 h-24" alt="" />
                  <div className="flex flex-col overflow-hidden justify-between w-44 md:min-w-[450px]">
                    <p className=" text-xs md:text-lg text-gray-800 font-medium font-nav-font ">
                      {productData.name}
                    </p>
                    <div className="flex gap-1 items-end ">
                      <p className="font-medium text-2xl text-gray-800">
                        Rs.{productData.current_Price}
                      </p>
                      <p className="text-gray-500 line-through font-thin">
                        Rs.{productData.original_Price}
                      </p>
                    </div>
                    <p className="text-orange-600 text-xs font-bold border text-center bg-white border-orange-600 w-16 p-1 mt-2 hover:bg-orange-600 hover:text-white hover:border-white transition-colors duration-700">
                      {productData.offer}%OFF
                    </p>
                  </div>
                </div>
                <div className="flex w-16 md:w-20 bg-white items-center justify-center text-gray-600 ">
                  <span className="w-7 h-6 text-center font-medium bg-custom  cursor-pointer leading-5"
                  onClick={() => handleQuntityChange(item.id,item.quantity - 1)}
                  >
                    -
                  </span>
                  <span className="w-8 h-6 text-center px-1 font-medium  md:font-bold border-gray-400">
                    {item.quantity}
                  </span>
                  <span className="w-7 h-6 text-center bg-custom font-medium cursor-pointer leading-5"
                  onClick={() => handleQuntityChange(item.id,item.quantity + 1)}
                  >
                    +
                  </span>
                </div>
                <div className="absolute right-1 md:right-1 top-1">
                  <RxCross2
                    onClick={() => UpdateQuantity(productData.id, 0)}
                    className="md:text-2xl cursor-pointer"
                  />
                </div>
              </div>
            );
          })}

          {cartdata.length === 0 && (
            <div className="flex items-center flex-col justify-center my-auto">
              <FaOpencart className="text-9xl text-gray-300" />
              <span className="text-5xl md:text-8xl font-bold text-gray-300">
                Empty Prodcut
              </span>
              <button onClick={() => navigate('/menu')} className="mt-10 w-[50%] md:w-[20%] bg-custom font-medium text-black py-3 text-xl  md:text-xl uppercase  rounded-sm shadow-lg">
                Shop now
              </button>
            </div>
          )}
        </div>
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
