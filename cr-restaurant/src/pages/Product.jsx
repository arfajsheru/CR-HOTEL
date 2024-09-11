import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoChevronBack } from "react-icons/io5";
import CodIcon from "../assets/Cod.png"
import DeliverIcon from "../assets/delivery.png"
import Freshness from "../assets/fresh.png"
const Product = () => {
  const [itemfilter, setItem] = useState(false);
  const { foodItems } = useContext(ShopContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  const filterdata = async () => {
    foodItems.map((item) => {
      if (item.id === productId) {
        setItem(item);
      }
    });
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    filterdata();
  }, [productId]);





  // view number foramte
  const formatViews = (views) => {
    if (views >= 10000000) return (views / 10000000).toFixed(1) + 'Cr'; // Crore ke liye
    if (views >= 100000) return (views / 100000).toFixed(1) + 'L'; // Lakh ke liye
    if (views >= 1000) return (views / 1000).toFixed(1) + 'K'; // Thousand ke liye
    return views; // Agar 1K se kam hai to original number dikhao
  };
  
  useEffect(() => {
    window.scroll(0,0);
  },[])
  return (
    <div className="animate-fadeInDown">
      <div
        onClick={handleBackButton}
        className="flex items-center justify-center py-2 text-custom cursor-pointer hover:text-black w-16 gap-0  transition-all duration-700 text-[18px] font-semibold "
      >
        <IoChevronBack /> Back
      </div>
      {/* Main container box */}
      <div className="flex gap-8 sm:gap-16 flex-col sm:flex-row">

        {/* Left side img */}
        <div className="relative">
          <img
            src={itemfilter.image}
            className="w-full h-[450px] md:w-[450px] rounded-md md:h-[550px] object-cover"
            alt=""
          />

          <div className="absolute top-1 left-1 p-1 bg-orange-600 w-10 md:w-12 h-12 md:h-14 font-roboto text-center text-white flex flex-col border-t-left rounded-tl-[10px]">
            <span className="text-[16px] md:text-[22px] font-bold leading-[20px] md:leading-[25px]">
              {itemfilter.offer}%
            </span>
            <span className="text-[16px] md:text-[22px] font-bold leading-[20px] md:leading-[25px]">
              OFF
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium text-gray-700 capitalize">{itemfilter.name}</h1>
          <p className="mt-5 font-bold text-pretty text-gray-700">
                {/* Check if the rating is a valid number and greater than or equal to 0 */}
                {itemfilter?.rating?.stars && Number.isFinite(itemfilter.rating.stars) && itemfilter.rating.stars >= 0
                ? Array(Math.floor(itemfilter.rating.stars)).fill('★').join('') +
                (itemfilter.rating.stars % 1 !== 0 ? '☆' : '')
                : 'No Rating'}
             <span className="ml-2">{formatViews(itemfilter?.rating?.view || 0)} reviews</span>
          </p>

          <div className="mt-5 flex gap-5">
            <p className="text-3xl font-bold text-gray-700">&#8377;{itemfilter.current_Price}</p>
            <p className="text-3xl line-through text-gray-500 font-thin">Rs.{itemfilter.original_Price}</p>
          </div>

          <div className="mt-5 text-gray-500 md:w-4/5">
            {itemfilter.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda nisi optio asperiores vel. Dolores reiciendis ex eius ratione fuga.
          </div>
          <div className="mt-5 flex gap-4">
            <p className="mb-2 text-2xl font-medium text-gray-700">Category :</p>
              {itemfilter.category === 'Veg' ?
              <div className="flex gap-4 items-center"> 
              <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-[#128142] flex items-center justify-center">
                  <p className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#128142]"></p>  
              </div>
              <p className="md:text-2xl font-bold text-gray-700 ">{itemfilter.subCategory}</p>
              </div>: 
               <div className="flex gap-4 items-center"> 
               <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-[#ee1e25] flex items-center justify-center">
                   <p className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#ee1e25]"></p>  
               </div>
               <p className="md:text-2xl font-bold text-gray-700 ">{itemfilter.subCategory}</p>
               </div>
              }
          </div>
          <button className="mt-5 md:mt-5 bg-custom text-black font-semibold border-2 border-black py-2 px-4 hover:bg-white hover:text-custom hover:border-custom  transition-colors duration-500">ADD TO CART</button>

          <div className="text-sm text-gray-500 flex flex-col gap-1 mt-5">
              <p className="flex md:text-[18px] items-center gap-2">
                  <img src={CodIcon} className="w-8" alt="" />
                  Cash On Delivery Availabe This Product
              </p>
              <p className="flex md:text-[18px] items-center gap-2">
                  <img src={DeliverIcon} className="w-8" alt="" />
                  Delivery within 30 minutes.
              </p>
              <p className="flex md:text-[18px] items-center gap-2">
                  <img src={Freshness} className="w-8" alt="" />
                  Freshness Guaranteed.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
