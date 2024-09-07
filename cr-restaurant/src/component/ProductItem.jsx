import React from 'react'
import fooditem3 from "../assets/foodimages/fooditem3.jpg"
import { Link, useNavigate } from 'react-router-dom'
const ProductItem = ({id,name,image,current_Price,original_Price,offer,category,subCategory,rating}) => {

  return (
    <Link to={`/product/${id}`} className='flex flex-col p-1 border-2 justify-between '>
        {/* Item img */}
        <div className=' relative overflow-hidden'>
            <img src={image} className='w-44 h-48 object-cover hover:scale-110 transition-all duration-1000'  alt="" />
            {/* Item Rating */}
                <div className='p-1  bg-[#fefefe6b] font-footer-font font-medium flex items-center justify-center text-[12px] absolute bottom-1 left-1 hover:bg-[#ffffffb7] '>
                    {rating.stars}★ | {rating.view}
                </div>
                <div className='absolute top-1 left-1 p-1 bg-orange-600 w-7 font-roboto text-center text-white flex flex-col border-t-left rounded-tl-[10px]'>
                    <span className='text-[9px] font-bold leading-[10px]'>{offer}%</span>
                    <span className='text-[9px] font-bold leading-[10px]'>OFF</span>
                </div>
        </div>
        {/*  */}
        <div className='flex flex-col gap-1'>
        <div className='flex text-[9px] gap-1 font-roboto font-bold text-gray-500'>
            <span>{category}</span>
            <span>|</span>
            <span>{subCategory}</span>
        </div>
        <div className='text-[16px] font-roboto font-medium'>
            {name}
        </div>
        <div className='flex gap-2'>
            <span className='font-bold text-sm'>Rs.{current_Price}</span>
            <span className='text-gray-500 line-through text-sm'>Rs.{original_Price}</span>
        </div>
        </div>
    </Link>
  )
}

export default ProductItem