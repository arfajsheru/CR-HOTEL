import { createContext, useState } from "react";

import { foodItems }  from "../assets/assets"
export const ShopContext = createContext();


const ShopContextProvider = (props) =>{

    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [wishlist, setWishlist] = useState([])


    const addToWhislist = (item) => {
        setWishlist((prev) => [...prev,item])
    };


    const removeToWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id))
    };


    const value = {
        foodItems,
        category,
        setCategory,
        subCategory,
        setSubCategory,
        wishlist,
        setWishlist,
        addToWhislist,
        removeToWishlist
        
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;