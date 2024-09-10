import { createContext } from "react";

import { foodItems }  from "../assets/assets"
export const ShopContext = createContext();


const ShopContextProvider = (props) =>{

    


    const value = {
        foodItems,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;