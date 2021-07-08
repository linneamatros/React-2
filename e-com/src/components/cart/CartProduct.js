import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, deleteProduct } from '../../store/actions/cartActions'


const CartProduct = ({product}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation()
     dispatch(addToCart(product))
  }

  const sub = e => {
    e.stopPropagation()
     dispatch(removeFromCart(product))
  }

  const remove = e => {
    e.stopPropagation()
     dispatch(deleteProduct(product.id))
  }

  return (
 
      <div className="m-2 mt-4">
        <div className="">
          <img src={product.image} alt="product" className="img-fluid image-width"/>

          <div className=""><strong>{product.name}</strong></div>
          <div className="mb-3"><small>{product.quantity} x {product.price}</small></div>
     
        </div>

        <div className="buttons">
          <button className="btn btn-sm btn-white px-3 me-1" onClick={sub}>-</button>
          <button className="btn btn-sm btn-white px-3 me-1" onClick={add}>+</button>
          <button className="btn btn-sm btn-danger px-3" onClick={remove}><i className="fas fa-trash"></i></button>
        </div>

        </div>

 

  )
}

export default CartProduct
