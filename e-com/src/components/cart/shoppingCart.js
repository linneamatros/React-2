import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'




const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount)


  const empty = (
    <div className="d-flex justify-content-between align-item-center mt-3 mb-3 width-100">
    Your cart is empty

    </div>
  )

  return (
    <div className="width-100 p-2">
  
    {
      shoppingCart.map(product => (
        <CartProduct product={product} key={product._id}/>
      ))
    }

    {!shoppingCart.length && empty}


    <div className="dropdown-divider mt-3"></div>

    
      <div>
        Totalt amount: <span className="font-weight-bold">{totalCartAmount}:-</span>
      <small className="text-muted ms-2"> ink. vat</small>
      </div>
   
      <div className=" p-2 mt-2 d-flex justify-content-between align-item-center">
      <button className="btn btn-dark col-12">Checkout</button>

    </div>
      
    </div>
  )
}

export default ShoppingCart
