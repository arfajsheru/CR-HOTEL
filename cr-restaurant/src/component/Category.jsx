import React from "react";
import Title from "./Title";
import { menu_list } from "../assets/assets";
import {Link} from "react-router-dom"
const Category = () => {

  return (
    <div className="text-center text-1xl onscroll">
      <div className="py-8 text-center  sm:text-2xl md:text-3xl">
        <Title text1={"CATEGORY"} text2={"FOOD ITEMS"} />
        <p className="text-sm font-md font-nav-font text-gray-600">
          "Discover a wide range of delicious and fresh{" "}
          <span className="text-gray-800 font-lora-font">food items</span> that
          cater to all tastes, from savory snacks to gourmet meals".
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4 p-5 ">
        {menu_list.map((item, index) => {
          return (
            <Link to={`/categoryItem/${item.menu_name}`}
              key={index}
              className="flex flex-col items-center gap-2 overflow-hidden"
            >
              <div className="img-wrapper border-[3px] border-custom">
                <img
                  className="h-24 w-24 rounded-[50%]  category-img"
                  src={item.menu_image}
                  alt=""
                />
              </div>
              <p className="text-sm font-cart-font text-gray-600 font-semibold">
                {item.menu_name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
