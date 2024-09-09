import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoChevronBack } from "react-icons/io5";
import Title from "../component/Title";
import ProductItem from "../component/ProductItem";

const CategoryItems = () => {
  const { foodItems } = useContext(ShopContext);
  const [categoryItems,setCategoryItems] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    const filterCategory = foodItems.filter((item) => item.subCategory === category);
    setCategoryItems(filterCategory)
  },[])

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="pt-8">
      {/* Category Title */}
      <div className="text-3xl text-center flex items-center justify-between md:pr-[40%]">
      <div
        onClick={handleBackButton}
        className="flex items-center justify-center py-2 text-custom cursor-pointer hover:text-black w-16 gap-0  transition-all duration-700 text-[18px] font-semibold "
      >
        <IoChevronBack /> Back
      </div>
        <Title text1={`${category}`} text2={`item`} />
     
      </div>
      
      {/* Category Items */}
      {categoryItems.length === 0 && <div>sorry no poroducts here working progrees please back website</div> }
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4">  
        
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
