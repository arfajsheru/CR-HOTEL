import { createContext, useState } from "react";

import { foodItems }  from "../assets/assets"
export const ShopContext = createContext();


const ShopContextProvider = (props) =>{

    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);


    const value = {
        foodItems,
        category,
        setCategory,
        subCategory,
        setSubCategory
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;