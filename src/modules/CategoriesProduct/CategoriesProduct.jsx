import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsCard from '../../components/productscards/Products'

const CategoriesProduct = () => {
    const {name}=useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            //const res = await fetch(`https://dummyjson.com/products/category/${name}`)
            const data = await res.json()
            // console.log(data)
            setProduct(data)
        }
        fetchProduct()
    }, [])
    if(product.length===0) return <div>
        
        <div className="card" aria-hidden="true">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                          </h5>
                          <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                          </p>
                          <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                      </div>


    </div>
  return (
    <div>
      <ProductsCard Products={product}/>
    </div>
  )
}

export default CategoriesProduct
