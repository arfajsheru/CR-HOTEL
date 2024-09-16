import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const {getCartAmount,delivery_Fee,rupees,cartitems,cartdata} = useContext(ShopContext);
    const {totalAmount, totalOffer} = getCartAmount();

    
    const MRPtotal = totalAmount + totalOffer;
  return (
    <div className=" flex-1 px-3 md:px-7">
    <div className="text-2xl md:text-3xl text-center">
      <Title text1={"CART"} text2={"TOTAL"} />
    </div>
    <div className="flex flex-col">
      <div className="h-14 content-center bg-custom border-2 mt-5">
        <p className="text-xl md:text-2xl px-2 font-bold font-nav-font text-gray-800 uppercase">
          Payment Details{" "}
          <span className="font-bold text-3xl text-white">{(cartdata).length}</span> items
        </p>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between mb-2 mt-2">
        <span className="font-semibold">MRP Total</span>
        <span>{rupees}{MRPtotal}</span>
      </div>

      {/* Discount */}
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Product Discount</span>
        <span>{rupees}{totalOffer}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Delivery Fee</span>
        <span>{rupees}{delivery_Fee}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Total */}
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>{rupees}{totalAmount + delivery_Fee}</span>
      </div>

      {/* Proceed to Checkout Button */}
      <button className="mt-5 w-[50%] bg-custom font-medium text-black py-3 text-xs  md:text-xl uppercase  rounded-sm shadow-lg">
        Proceed to Checkout
      </button>
    </div>
  </div>
  )
}

export default CartTotal