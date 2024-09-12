import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProdcuts = ({category,subCategory}) => {
    const {foodItems} = useContext(ShopContext);
    const [realtedProducts,setRelatedProductes] = useState([]);




    const handleRelatedProducts = () => {
        let productsCopy = foodItems.slice();

        productsCopy = productsCopy.filter((item) => item.category === category);
        productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);

        setRelatedProductes(productsCopy.slice(0,7));
    }

    useEffect(() => {
       handleRelatedProducts() 
    },[category,subCategory])


    
  return (
    <div className='flex flex-col animate-fadeInDown'>

        <div className='text-2xl md:text-3xl text-center mt-8'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4 mt-7'>

        {realtedProducts.map((item,index) => (
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} original_Price={item.original_Price} current_Price={item.current_Price} offer={item.offer} category={item.category} subCategory={item.subCategory} rating={item.rating} />
        ))}
    </div>
        </div>
  )
}

export default RelatedProdcuts