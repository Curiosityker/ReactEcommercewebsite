import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import StatCard from '../../components/StatCard/StatCard'
import ProductsCard from '../../components/productscards/Products'
import Categories from '../../components/Categories/Categories'
import Carousel from '../../components/cursel/Carousel'

const Home = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
             const res = await fetch("https://fakestoreapi.com/products?limit=6")
           // const res = await fetch("https://dummyjson.com/products?limit=6")
            const data = await res.json()
             console.log(data)
            setProduct(data)
        }
        fetchProduct()
    }, [])

    return (
        <div>
           <Carousel/>
            <Hero />
            <Categories/>
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900"> POPULARS  PRODUCTS</h1>
            </div>
            {
                product?.length > 0 ?
                    (
                        <ProductsCard Products={product} />
                    ) : (
                       <>
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
                       </>
                    )
            }
            <ProductsCard />
            <StatCard />
        </div>
    )
}

export default Home
