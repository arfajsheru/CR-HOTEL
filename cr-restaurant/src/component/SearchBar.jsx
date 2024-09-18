import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  const { searchVisible, setSearchVisible } = useContext(ShopContext);

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
          <div className="fixed top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] sm:w-80vw] md:w-[60vw] lg:w-[50vw] max-w-[600px] bg-white z-50 shadow-lg rounded-sm overflow-y-scroll">
            {/* Modal Content */}
            <div className="flex w-full items-center border-[3px] border-custom rounded-sm">
              {/* Icon with full height and same width as input */}
              <div className="bg-custom h-[32px] md:h-[45px]  flex items-center justify-center w-[30px] md:w-[50px] border border-custom">
                <IoSearchSharp className="text-gray-200 text-xl md:text-2xl" />
              </div>
              <input
                type="text"
                className="border border-gray-300 p-1 md:p-2 text-xs md:text-xl  w-full outline-none border-none text-custom font-medium"
                placeholder="Search food items..."
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
