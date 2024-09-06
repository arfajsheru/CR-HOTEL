import React from "react";
import { foodItems } from "../assets/assets";
const Menu = () => {
  return (
    <div className="flex justify-between flex-wrap w-full h-full mt-5 md:gap-3">
      {foodItems.map((item, index) => {
        return <div className="flex flex-wrap flex-col">
        <img src={item.image} className="w-28 h-36  md:w-48 md:h-60 object-cover category-img" alt="img dahi ratika" />
        <p>{item.name}</p>
        <p>{item.id}</p>
        {/* <p>{item.desciption}</p> */}
        <div className="flex gap-1">
        <p>300</p>
        <p>200</p>
        <p>50% OFF</p>
        </div>
        <div className="flex gap-1">
        <p>{item.rating.stars}</p>
        <p>{item.rating.view}</p>
        </div>
       
       
        <p>{item.category}</p>
        <p>not difine</p>
        
        </div>;
      })}
      
    </div>
  );
};

export default Menu;
