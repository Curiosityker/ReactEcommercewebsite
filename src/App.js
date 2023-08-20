import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './modules/home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './modules/Product/Product';
import Footers from './components/Footer/Footers';
import Products from './modules/products/Products';
import CategoriesProduct from './modules/CategoriesProduct/CategoriesProduct';
import Cart from './modules/cart/Cart';
import Contact from './modules/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/categories/:name' element={<CategoriesProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footers/>
    </BrowserRouter>
  );
}

export default App;
