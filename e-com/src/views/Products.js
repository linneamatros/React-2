import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../store/actions/productCatalogActions'
import ProductCard from '../components/products/productCard'


const Products = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  return (
    <div className="container">
      <div className="header text-center p-4 mb-5 border-bottom">
        <h2>Our products</h2>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 pt-5">
        {
          productCatalog && productCatalog.map(product => (
            <ProductCard product={product} key={product._id}/>
          ))
        }
      </div>
    </div>

  )
}

export default Products
