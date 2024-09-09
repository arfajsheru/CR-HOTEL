import React, { useState } from 'react'

const Wishlist = () => {
    const[wishlistitems, setWishlistItems] = useState([]);
    const[wishlistitem,setwishlistitem] = useState([]);

    const handleWishlistItem = (id) => {
        if(wishlistitem.includes(id)){
            // setwishlistitem((prev) => prev.filter((item) =>it))
        } else{

        }
    }

  return (
    <div>Wishlist</div>
  )
}

export default Wishlist