import { createContext, useState } from "react";

import { foodItems }  from "../assets/assets"
export const ShopContext = createContext();


const ShopContextProvider = (props) =>{

    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cartitems,setCartItems] = useState({});
    const [cartdata, setcartData] = useState([]);


    const addTocart = (id) => {
        // Clone the current cart items to avoid direct mutation
        let cartData = structuredClone(cartitems);
    
        // Check if the item already exists in the cart
        if (cartData[id]) {
            // If it exists, increment the quantity
            cartData[id] += 1;
        } else {
            // If it doesn't exist, add it with quantity 1
            cartData[id] = 1;
        }
    
        // Update the state with the new cart data
        setCartItems(cartData);
    }









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
        removeToWishlist,
        cartitems,
        cartdata,
        setCartItems,
        setcartData,
        addTocart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;