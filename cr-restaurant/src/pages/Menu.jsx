import React, { useContext, useEffect,useState } from "react";
import ProductItem from "../component/ProductItem";
import Title from "../component/Title";
import { IoChevronBack } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import vectore from "../assets/vector.png"
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const {foodItems,category,setCategory,subCategory,setSubCategory} = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState(foodItems);
  const [isVegSelected, setIsVegSelected] = useState(false); // State to toggle Veg indicator
  const [isNonVegSelected, setIsNonVegSelected] = useState(false);
  const [IshowFilter, setIShowFilter] = useState(false);
  const [sorttype,setSortType] = useState('Relavent');
  const navigate = useNavigate()

  // Category Filter Methode
  const handleToggleCategory = (e) => {
    const value = e.currentTarget.dataset.value;
    // Agar selected category already selected hai, toh uncheck kare
    if (category.includes(value)) {
      setCategory([]); // Clear the selected category
    } else {
      setCategory([value]); // Set only the clicked category
    }

    if (category === "Veg") {
      setIsVegSelected(!isVegSelected);
    } else if (category === "Non-Veg") {
      setIsNonVegSelected(!isNonVegSelected);
    }
  };

  // SubCategory Filter Mehode
  const handleToggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  // All Filter Applay Methode
  const applyfilter = () => {
    let foodItemsCopy = foodItems.slice();
    if (category.length > 0) {
      foodItemsCopy = foodItemsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      foodItemsCopy = foodItemsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(foodItemsCopy);
  };


  const filterSortPrice = () => {
    let fpcopy = filterProduct.slice();

    switch(sorttype){
      case 'Low-high':
        setFilterProduct(fpcopy.sort((a,b) => a.current_Price - b.current_Price));
        break;

      case 'High-low':
        setFilterProduct(fpcopy.sort((a,b) => b.current_Price - a.current_Price));
        break;

      default :
        applyfilter();
        break
    }
  }

  useEffect(() => {
    filterSortPrice();
  },[sorttype])
  //Handle Veg click 
  const handleVegClick = () => {
    setIsVegSelected(!isVegSelected);
    setIsNonVegSelected(false);
  };

  //Handle Non-Veg Click 
  const handleNonvegClick = () => {
    setIsNonVegSelected(!isNonVegSelected);
    setIsVegSelected(false);
  };

  const handleClearAllFilter = () => {
    setIsVegSelected(!isVegSelected);
    setIsNonVegSelected(!isNonVegSelected);
    setFilterProduct(foodItems);
  }

  const handleBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scroll(0,0);
  },[])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      
      {/* Filter Option side */}
      <div className="min-w-60">
        <div className="flex items-center justify-between ">
        <p
          onClick={() => setIShowFilter(!IshowFilter)}
          className="my-2 text-xl text-gray-900 font-medium  hidden sm:block"
        >
          {/* Filter Title */}
            <div className="flex gap-3 items-center">
            <IoChevronBack className="cursor-pointer" onClick={handleBackButton} />  Filter
            </div>
          
        </p>

        <button
          onClick={applyfilter}
          className={` hidden w-1/4 h-8 font-medium rounded-sm bg-custom  sm:block`}
        >
          Apply
        </button>
        <button
          onClick={handleClearAllFilter}
          className={` hidden w-auto px-2 h-8 font-medium rounded-sm bg-custom  sm:block`}
        >
          Clear All
        </button>
        </div>
     
        <p
          onClick={() => setIShowFilter(!IshowFilter)}
          className="my-2 text-[16px] text-gray-600 font-nav-font cursor-pointer sm:hidden"
        >
          {/* Filter Title */}
          <div className="flex items-center justify-center w-20 rounded-lg  bg-gray-200 ">
          <img src={vectore} className="w-5" alt="" />
            Filter
          </div>
        </p>

        {/* Category Section */}
        <div
          className={` hidden border border-gray-300 font-medium bg-gray-100 pl-5 py-3 mt-6 sm:block `}
        >
          <div
            data-value="Veg"
            onClick={handleToggleCategory}
            className="flex items-center gap-1 cursor-pointer"
          >
            <div
              onClick={handleVegClick}
              className="w-4 h-4 border-2 border-green-700 rounded-full flex items-center justify-center"
            >
              <div
                className={`w-[10px] h-[10px] bg-green-700 rounded-full ${
                  category.includes("Veg") ? "block " : "hidden"
                } `}
              ></div>
            </div>
            Veg
          </div>

          <div
            data-value="Non-Veg"
            onClick={handleToggleCategory}
            className="flex items-center gap-1 cursor-pointer"
          >
            <div
              onClick={handleNonvegClick}
              className="w-4 h-4 border-2 border-red-700 rounded-full flex items-center justify-center"
            >
              <div
                className={`w-[10px] h-[10px] bg-red-700 rounded-full ${
                  category.includes("Non-Veg") ? "block " : "hidden"
                } `}
              ></div>
            </div>
            Non-Veg
          </div>
        </div>
        {/* SubCategory Section */}
        <div
          className={` hidden border border-gray-300 font-medium bg-gray-100 pl-5 py-3 mt-6 sm:block`}
        >
          <p className="mb-3 text-sm font-medium  ">SUBCATEGORY</p>
          <div className="text-gray-700 font-medium flex flex-col gap-1">
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Dahi salad"}
                onChange={handleToggleSubCategory}
              />
              Dahi Salad
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Chinese Starter"}
                onChange={handleToggleSubCategory}
              />
              Chinese starter
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Soup"}
                onChange={handleToggleSubCategory}
              />
              Soup
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Noodles"}
                onChange={handleToggleSubCategory}
              />
              Noodles
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Fried Rice"}
                onChange={handleToggleSubCategory}
              />
              Fried Rice
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Veg Sauce"}
                onChange={handleToggleSubCategory}
              />
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

      <div
        className={`fixed right-0 bottom-0 left-0 overflow-hidden bg-white transition-transform duration-500 ${
          IshowFilter
            ? "-translate-y-0 w-full h-[80vh] z-50"
            : "translate-y-full w-0"
        } sm:hidden`}
      >
        {/* Filter Title Section */}
        <div className="flex justify-between items-center border-b border-gray-700 p-2 text-2xl">
          <p className="text-custom font-bold text-2xl ">Filter</p>
          <RxCross2 onClick={() => setIShowFilter(!IshowFilter)} />
        </div>


          {/* Filter content section */}
        <div className="flex flex-col items-start gap-5 p-5"> 
             {/* Catergory  */}
          <div className="flex flex-col gap-2 p-2 w-full bg-gray-200">
            <p className="text-sm font-medium">CATEGORY</p>
            <div
              data-value="Veg"
              onClick={handleToggleCategory}
              className="flex items-center gap-1 cursor-pointer"
            >
              <div
                onClick={handleVegClick}
                className="w-4 h-4 border-2 border-green-700 rounded-full flex items-center justify-center"
              >
                <div
                  className={`w-[10px] h-[10px] bg-green-700 rounded-full ${
                    category.includes("Veg") ? "block " : "hidden"
                  } `}
                ></div>
              </div>
              Veg
            </div>

            <div
              data-value="Non-Veg"
              onClick={handleToggleCategory}
              className="flex items-center gap-1 cursor-pointer"
            >
              <div
                onClick={handleNonvegClick}
                className="w-4 h-4 border-2 border-red-700 rounded-full flex items-center justify-center"
              >
                <div
                  className={`w-[10px] h-[10px] bg-red-700 rounded-full ${
                    category.includes("Non-Veg") ? "block " : "hidden"
                  } `}
                ></div>
              </div>
              Non-Veg
            </div>
          </div>
            
            {/* SubCategory */}
          <div className="flex flex-col gap-2 p-2 w-full bg-gray-200  ">
            <p className="text-sm font-medium  ">SUBCATEGORY</p>

            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Dahi salad"}
                onChange={handleToggleSubCategory}
              />
              Dahi Salad
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Chinese Starter"}
                onChange={handleToggleSubCategory}
              />
              Chinese starter
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Soup"}
                onChange={handleToggleSubCategory}
              />
              Soup
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Noodles"}
                onChange={handleToggleSubCategory}
              />
              Noodles
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Fried Rice"}
                onChange={handleToggleSubCategory}
              />
              Fried Rice
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Veg Sauce"}
                onChange={handleToggleSubCategory}
              />
              Veg. Sauce
            </p>
          </div>
          <button
           onClick={() => {
            applyfilter(); // Call your applyFilter function
            setIShowFilter(!IshowFilter); // Toggle the filter state
          }}
          className="w-28 mt-4 h-9 font-bold text-white bg-custom border border-black rounded-lg">Apply</button>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-2">
          <Title text1={"ALL FOOD"} text2={"ITEMS"} />
          <select className="text-sm border-2 border-gray-700 px-2 h-8  rounded-sm outline-none cursor-pointer"
          onChange={(e) => setSortType(e.target.value)}
          >
            <option value="Relavent">Sort by: Relavent</option>
            <option value="Low-high">Sort by: Low-high</option>
            <option value="High-low">Sort by: High-low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6   gap-4 gap-y-4">
          {filterProduct.map((item, index) => {
            return (
              <ProductItem
              item={item}
              key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
