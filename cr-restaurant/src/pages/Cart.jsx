import React, { useEffect, useState } from "react";
import Title from "../component/Title";
import { foodItems } from "../assets/assets";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    setcartItems(foodItems.slice(0, 9));
  }, []);

  const discount = 10;

  return (
    <div className="py-4">
      {/* Right side  */}
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="flex flex-col gap-2 md:gap-3 p-2  w-full md:w-[60%]">
          <div className="text-2xl md:text-3xl text-center">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="relative border border-gray-200 p-1 flex w-full items-center justify-between md:gap-4 hover:bg-gray-50"
            >
              <div className="flex  justify-between gap-1 md:gap-4">
                <img src={item.image} className="w-20 h-24" alt="" />
                <div className="flex flex-col overflow-hidden justify-between w-44 md:min-w-[450px]">
                  <p className=" text-xs md:text-lg text-gray-800 font-medium font-nav-font ">
                    {item.name}
                  </p>
                  <div className="flex gap-1 items-end ">
                    <p className="font-medium text-2xl text-gray-800">
                      Rs.{item.current_Price}
                    </p>
                    <p className="text-gray-500 line-through font-thin">
                      Rs.{item.original_Price}
                    </p>
                  </div>
                  <p className="text-orange-600 text-xs font-bold border text-center bg-white border-orange-600 w-16 p-1 mt-2 hover:bg-orange-600 hover:text-white hover:border-white transition-colors duration-700">
                    {item.offer}%OFF
                  </p>
                </div>
              </div>
              <div className="flex w-16 md:w-20 bg-white items-center justify-center text-gray-600 ">
                <span className="w-7 h-6 text-center font-medium bg-custom  cursor-pointer leading-5">
                  -
                </span>
                <span className="w-8 h-6 text-center px-1 font-medium  md:font-bold border-gray-400">
                  10
                </span>
                <span className="w-7 h-6 text-center bg-custom font-medium cursor-pointer leading-5">
                  +
                </span>
              </div>
              <div></div>
              <div className="absolute right-1 md:right-3 top-2">
                <RxCross2 className="md:text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
        <div className=" flex-1 px-3 md:px-7">
          <div className="text-2xl md:text-3xl text-center">
            <Title text1={"CART"} text2={"TOTAL"} />
          </div>
          <div className="flex flex-col">
            <div className="h-14 content-center bg-custom border-2 mt-5">
              <p className="text-xl md:text-2xl px-2 font-bold font-nav-font text-gray-800 uppercase">
                Price Details{" "}
                <span className="font-bold text-3xl text-white"> 3</span> items
              </p>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between mb-2 mt-2">
              <span className="font-semibold">Subtotal</span>
              <span>${(300).toFixed(2)}</span>
            </div>

            {/* Discount */}
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Discount ({discount}%)</span>
              <span>{((300 * discount) / 100).toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Shipping</span>
              <span>${(20).toFixed(2)}</span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-4"></div>

            {/* Total */}
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(300 - (300 * discount) / 100 + 20).toFixed(2)}</span>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              className="mt-5 w-[50%] bg-custom font-medium text-black py-3 text-xs  md:text-xl uppercase  rounded-sm shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
