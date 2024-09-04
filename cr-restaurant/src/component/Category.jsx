import React from "react";
import Title from "./Title";
import { menu_list } from "../assets/assets";
const Category = () => {
  return (
    <div className="text-center text-1xl onscroll">
      <div className="py-8 text-center  sm:text-2xl md:text-3xl">
        <Title text1={"CATEGORY"} text2={"FOOD ITEMS"} />
        <p className="text-sm font-md font-nav-font text-gray-600">
          Discover a wide range of delicious and fresh{" "}
          <span className="text-gray-800 font-lora-font">food items</span> that
          cater to all tastes, from savory snacks to gourmet meals.
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4 border-2 border-custom p-5 ">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 overflow-hidden"
            >
              <img
                className="h-24 w-24 rounded-[50%] border-2 border-custom"
                src={item.menu_image}
                alt=""
              />
              <p className="text-sm font-nav-font text-custom">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
