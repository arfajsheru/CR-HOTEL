import React, { useEffect, useRef, useState } from "react";
import { foodItems } from "../assets/assets";
import ProductItem from "../component/ProductItem";
import Title from "../component/Title";
import { IoIosArrowForward } from "react-icons/io";
const Menu = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [isVegSelected, setIsVegSelected] = useState(false); // State to toggle Veg indicator
  const [isNonVegSelected, setIsNonVegSelected] = useState(false); 
  const categoryRef = useRef(null);


  const handleToggleCategory = (e) => {
    const value = e.currentTarget.dataset.value;
    // Agar selected category already selected hai, toh uncheck kare
    if (category.includes(value)) {
      setCategory([]); // Clear the selected category
    } else {
      setCategory([value]); // Set only the clicked category
    }


    if(category === "Veg") {
      setIsVegSelected(!isVegSelected);
    } else if(category === "Non-Veg"){
      setIsNonVegSelected(!isNonVegSelected);
    }
  };

  const handleToggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    let foodItemsCopy = foodItems;
    if (category.length > 0) {
      foodItemsCopy = foodItemsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProduct(foodItemsCopy);
  };

  useEffect(() => {
    applyfilter();
  }, [category]);



  const handleVegClick  = () => {
    setIsVegSelected(!isVegSelected);
    setIsNonVegSelected(false);
  }

  const handleNonvegClick = () => {
    setIsNonVegSelected(!isNonVegSelected)
    setIsVegSelected(false);
  }
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
          className={` border border-gray-300 font-medium bg-gray-100 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden"
          } sm:block `}
        >

          <div
           data-value="Veg" 
          onClick={handleToggleCategory}  className="flex items-center gap-1 cursor-pointer">
          
            <div onClick={handleVegClick} className="w-4 h-4 border-2 border-green-700 rounded-full flex items-center justify-center">
              
              <div className={`w-[10px] h-[10px] bg-green-700 rounded-full ${category.includes('Veg') ? "block " : "hidden"} `}></div>
            </div>
            Veg
          </div>

          <div 
           data-value="Non-Veg" 
           onClick={handleToggleCategory} 
          className="flex items-center gap-1 cursor-pointer">
          
          <div onClick={handleNonvegClick} className="w-4 h-4 border-2 border-red-700 rounded-full flex items-center justify-center">
            
            <div className={`w-[10px] h-[10px] bg-red-700 rounded-full ${category.includes('Non-Veg') ? "block " : "hidden"} `}></div>
          </div>
          Non-Veg
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
          <Title text1={"ALL FOOD"} text2={"ITEMS"} />
          <select className="text-sm border-2 border-gray-700 px-2 h-8  rounded-sm outline-none ">
            <option value={"Relavent"}>Sort by: Relavent</option>
            <option value={"Low-high"}>Sort by: Low-high</option>
            <option value={"High-low"}>Sort by: High-low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-4">
          {filterProduct.map((item, index) => {
            return (
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                current_Price={item.current_Price}
                original_Price={item.original_Price}
                offer={item.offer}
                name={item.name}
                category={item.category}
                subCategory={item.subCategory}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
