import React from "react";
import { foodItems } from "../assets/assets";
import ProductItem from "../component/ProductItem";
import fooditem3 from "../assets/foodimages/fooditem3.jpg";
const Menu = () => {
  
  const item = 
  {
      id: "3",
      name: "Tomato salad",
      description: "Grilled paneer cubes marinated with spices.",
      current_Price: 40,
      original_Price: 60,
      offer: 50,
      category: "Veg",
      subCategory: "Dahi salad",
      image: fooditem3,
      rating: { stars: 4.7, view: 1600 }
    };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-full h-full mt-5 md:gap-3">
      {foodItems.map((item, index) => {
        return (
          <ProductItem key={index} id={item.id} image={item.image} current_Price={item.current_Price} original_Price={item.original_Price} offer={item.offer} name={item.name} category={item.category} subCategory={item.subCategory} rating={item.rating} />
        )
      })}
    </div>
  );
};

export default Menu;
