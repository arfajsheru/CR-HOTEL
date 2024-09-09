import React, { useContext, useEffect, useState } from 'react'
import Title from "../component/Title"
import { ShopContext } from '../context/ShopContext'
import ProductItem from "../component/ProductItem"
const BestSellar = () => {
    const { foodItems } = useContext(ShopContext);
    const [bestSellar, setBestSellar] = useState([]);

    const handleBestSellar = () => {
        const filterBestSellar1 = foodItems.slice(5,12);
        const filterBestSellar2 = foodItems.slice(34,41);
        const finalFilter = [...filterBestSellar1,...filterBestSellar2]
        setBestSellar(finalFilter);
    } 


    useEffect(() => {
        handleBestSellar();
    },[])
  return (
    <div className='flex flex-col'>
        <div className='py-8 text-3xl text-center'>
            <Title text1={"MOST POPULAR"} text2={'DICHES'} />
            <p className='text-sm font-md font-nav-font text-gray-600'>"Experience top-quality ingredients and amazing flavors in every dish. Each bite will leave you wanting more!"</p>
        </div>
        <div className='w-full h-full grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mt-5 md:gap-3'>
            {bestSellar.map((item) => (
                <ProductItem id={item.id} name={item.name} original_Price={item.original_Price} current_Price={item.current_Price} offer={item.offer} category={item.category} subCategory={item.subCategory} image={item.image} rating={item.rating} />
            ))}

        </div>
    </div>
  )
}

export default BestSellar