import React from "react";
import { foodItems } from "../assets/assets";
import ProductItem from "../component/ProductItem";
import Title from "../component/Title"
const Menu = () => {

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-full h-full mt-5 md:gap-3 bg-custom p-4">

      {/* Title  */}
      {/* <div>
        <Title text1={"ALL"} text2={"ITEM"} />
      </div> */}


      {/* Left side */}


      {/* Right side */}




      {foodItems.map((item, index) => {
        return (
          <ProductItem key={index} id={item.id} image={item.image} current_Price={item.current_Price} original_Price={item.original_Price} offer={item.offer} name={item.name} category={item.category} subCategory={item.subCategory} rating={item.rating} />
        )
      })}
    </div>
  );
};

export default Menu;
