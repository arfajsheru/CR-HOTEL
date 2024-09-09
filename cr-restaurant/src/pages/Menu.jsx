import React, { useState } from "react";
import { foodItems } from "../assets/assets";
import ProductItem from "../component/ProductItem";
import Title from "../component/Title";
import { IoIosArrowForward } from "react-icons/io";
const Menu = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Filter Option side */}

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl text-gray-600 font-nav-font flex gap-1 items-center cursor-pointer"
        >
          Filter
          <IoIosArrowForward
            className={`sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        <div
          className={` border border-gray-300 bg-gray-100 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="text-gray-700 flex flex-col font-medium gap-1">
            <p className="flex gap-2">
              <input type="checkbox" />
              Veg
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Non veg
            </p>
          </div>
        </div>

        <div
          className={` border border-gray-300 font-medium bg-gray-100 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium  ">SUBCATEGORY</p>
          <div className="text-gray-700 font-medium flex flex-col gap-1">
            <p className="flex gap-2">
              <input type="checkbox" />
              Dahi Salad
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Chinese starter
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Soup
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Noodles
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Fried Rice
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Veg. Sauce
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Tandoory Dry
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Chicken Gravy
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Egg
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Mutton Gravy
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Paneer
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Prawns
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Vegetable
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Roti
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Birayani & Pulao
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Thali
            </p>
            <p className="flex gap-2">
              <input type="checkbox" />
              Dessert
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-2">
          <Title text1={'ALL FOOD'} text2={'ITEMS'} />
          <select className="text-sm border-2 border-gray-700 px-2 h-8  rounded-sm outline-none ">
          <option value={'Relavent'}>Sort by: Relavent</option>
          <option value={'Low-high'}>Sort by: Low-high</option>
          <option value={'High-low'}>Sort by: High-low</option>
        </select>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-3 bg-custom p-3">
        {foodItems.map((item, index) => {
        return (
          <ProductItem key={index} id={item.id} image={item.image} current_Price={item.current_Price} original_Price={item.original_Price} offer={item.offer} name={item.name} category={item.category} subCategory={item.subCategory} rating={item.rating} />
        )
      })}
        </div>
        
      </div>

    
    </div>
  );
};

export default Menu;
