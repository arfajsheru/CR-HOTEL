import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

import Title from "../component/Title";
import ProductItem from "../component/ProductItem";

const CategoryItems = () => {
  const { foodItems } = useContext(ShopContext);
  const [categoryItems,setCategoryItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const filterCategory = foodItems.filter((item) => item.subCategory === category);
    setCategoryItems(filterCategory)
  },[])

  return (
    <div className="pt-8">
      {/* Category Title */}
      <div className="text-3xl text-center">
        <Title text1={`${category}`} text2={`item`} />
      </div>
      {/* Category Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-5">  
       {categoryItems.map((item,index) => {
        return(
        <ProductItem key={index} id={item.id} image={item.image} name={item.name} current_Price={item.current_Price} original_Price={item.original_Price} rating={item.rating} offer={item.offer} category={item.category} subCategory={item.subCategory} />
      )
       })}
      </div>
    </div>
  );
};

export default CategoryItems;
