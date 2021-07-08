import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'


const ProductCard = ({product, details}) => {

  const dispatch = useDispatch();

  return (
    <div>
    {details &&
      <div className="header text-center p-4 mb-5 border-bottom">
        <h4 className="card-title">{product.name}</h4>
      </div>
    }
    <div className="col h-100">
      <div className="card h-100">
        <img src={product.image} alt="..." className="card-img-top" />
        <div className="card-body">
          {!details && <h5 className="card-title">{product.name}</h5>}
          {!details 
            ? <p className="card-text"> {product.short}</p>
            : <p className="card-text"> {product.desc}</p>
          }

          <h5 className="text-danger"> {product.price} :- </h5>
        </div>

        <div className="d-flex justify-content-center mb-2 p-2">
          {
            !details && 
        <Link className="btn btn-dark me-2" to={`/products/${product._id}`} >More info</Link>
          }
          <button className="btn btn-dark" onClick={() => { 
            dispatch(addToCart(product))
          }}>Add to Cart</button>

        </div>

      </div>
    </div>
    </div>
  )
}


ProductCard.defaultProps = {
details: false}


export default ProductCard
