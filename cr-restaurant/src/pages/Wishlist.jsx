import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Wishlist = () => {
    const[wishlistitems, setWishlistItems] = useState([]);
    const[wishlistitem,setwishlistitem] = useState([]);
    const {} = useParams();

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