import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { searchVisible, setSearchVisible, foodItems, rupees } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  const handleSearchItems = () => {
    // Isme logic lagaya he ki jaba search filter empty ho to setSearchFilter ko bhi empty kar do 
    if (searchTerm.trim() === "") {
      setSearchFilter([]);
    } else {
      const filterdata = foodItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchFilter(filterdata);
    }
  };

  const handleClickItem = () => {
    setSearchVisible(!searchVisible);
    setSearchTerm("");
  }

  useEffect(() => {
    handleSearchItems();
  }, [searchTerm]);

  return (
    <div className="relative">
      {searchVisible && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSearchVisible(false)}
          ></div>

          {/* Modal centered in the viewport */}
          <div className="flex flex-col gap-2 fixed top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] sm:w-80vw md:w-[60vw] lg:w-[50vw] max-w-[600px] bg-transparent z-50 shadow-lg rounded-sm overflow-y-scroll">
            {/* Modal Content */}
            <div className="flex w-full items-center rounded-sm border-2 border-custom bg-white">
              {/* Icon with full height and same width as input */}
              <div className="bg-custom h-[32px] md:h-[45px]  flex items-center justify-center w-[30px] md:w-[50px] border border-custom">
                <IoSearchSharp className="text-gray-200 text-xl md:text-2xl" />
              </div>
              <input
                type="text"
                className="flex-grow px-3 text-xs md:text-xl w-full outline-none border-none text-custom font-medium"
                placeholder="Search food items..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Dusra div */}
            {searchFilter.length > 0 && (
              <div className="bg-white rounded-sm p-1 flex flex-col gap-1 max-h-[300px] md:max-h-[400px] overflow-y-auto">
                {searchFilter.map((item, index) => (
                  <Link to={`/product/${item.id}`} onClick={handleClickItem} key={index} className="flex justify-between items-center cusror-pointer">
                    <div className="flex gap-2 items-center">
                      <img
                        src={item.image}
                        className="w-5 h-7 md:w-9 md:h-11 object-cover"
                        alt={item.name}
                      />
                      <div className="flex flex-col">
                        <span className="text-xs md:text-[18px] font-medium font-nav-font text-black">
                          {item.name}
                        </span>
                        <span className="text-[8px] md:text-xs font-medium text-gray-500">
                          {item.category} | {item.subCategory}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs md:text-xl text-custom font-bold">
                      {rupees}
                      {item.current_Price}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
