import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../store/actions/productCatalogActions'
import ProductCard from '../components/products/productCard'


const Home = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  return (
  
      <div className="container">
        <div className="header text-center p-4 mb-5 border-bottom">
          <h2>B I R D I E</h2>
          <p>We get our daily dose of iron</p>
          
        </div>


        <div className="row row-cols-3 row-cols-md-4 g-3 mb-5">
          <div className="header text-center p-4 border-bottom">
            <h2>Most popular</h2>
            <p>A little info about our latest news and new arravals</p>
          </div>
        
            {
              productCatalog && productCatalog.slice(3,6).map(product => (
                <ProductCard product={product} key={product._id} />
              ))
            }
          </div>


          <div className="row row-cols-3 row-cols-md-4 g-3 mb-4 pb-4">
            <div className="header text-center p-4 border-bottom">
              <h2>Newest arravials</h2>
              <p>A little info about our latest news and new arravals</p>
            </div>
              {
                productCatalog && productCatalog.slice(0,3).map(product => (
                  <ProductCard product={product} key={product._id} />
                ))
              }
          </div> 

          </div>
 
  )
}

export default Home
