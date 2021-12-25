import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/products' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/products/:id' element={<SingleProduct />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;