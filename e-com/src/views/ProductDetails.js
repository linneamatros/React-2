import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {clearProduct, getProductById } from '../store/actions/productCatalogActions'
import ProductCard from '../components/products/productCard'

const ProductDetails = () => {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id))

    return () => {
      dispatch(clearProduct())
    }
  }, [dispatch, id])

  const product = useSelector(state => state.product.product)


  return (

    <div className="container pt-4 d-flex justify-content-center">
    <div className="col-6">
         
      {product && <ProductCard product={product} details={true}/>}
    </div>
    </div>
  )
}

export default ProductDetails
