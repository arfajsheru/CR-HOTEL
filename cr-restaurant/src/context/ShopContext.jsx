import { createContext, useState } from "react";

import { foodItems } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartitems, setCartItems] = useState({});
  const [cartdata, setcartData] = useState([]);

  const delivery_Fee = 10;
  const rupees = "₹";

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
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartitems) {
      try {
        if (cartitems[items] > 0) {
          totalCount += cartitems[items];
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  };

  const removeCartItems = (itemId, quantity) => {
    let cartData = structuredClone(cartitems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    let totalOffer = 0;

    for (const items in cartitems) {
      const itemInfo = foodItems.find((product) => product.id === items);

      if (itemInfo && cartitems[items] > 0) {
        totalAmount += itemInfo.current_Price * cartitems[items];
        if (itemInfo.original_Price > itemInfo.current_Price) {
          let offer = itemInfo.original_Price - itemInfo.current_Price;
          totalOffer += offer * cartitems[items];
        }
      }
    }

    return {
      totalAmount,
      totalOffer,
    };
  };

  const addToWhislist = (item) => {
    setWishlist((prev) => [...prev, item]);
  };

  const removeToWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const value = {
    delivery_Fee,
    rupees,
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
    addTocart,
    getCartCount,
    removeCartItems,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
