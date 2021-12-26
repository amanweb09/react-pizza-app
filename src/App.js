import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext'

const App = () => {

    const [cart, setCart] = useState({});

    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <BrowserRouter>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/products' element={<Products />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/products/:id' element={<SingleProduct />} />
                    </Routes>
                </CartContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default App;