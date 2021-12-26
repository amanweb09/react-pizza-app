import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext';
import axios from 'axios';
import CartItem from '../components/CartItem';

const Cart = () => {

    const [pizzas, setPizzas] = useState([]);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        if (!cart.items) {
            return;
        }
        else {
            console.log(JSON.stringify(Object.keys(cart.items)));

            axios.post('/cart-items', { ids: JSON.stringify(Object.keys(cart.items)) })
                .then((res) => {
                    const resPizzas = res.data.pizzas;
                    setPizzas(resPizzas);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }, [cart])

    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className='my-12 font-bold'>Cart Items</h1>

            <ul>
                {
                    pizzas.map((pizza) => {
                        return  <CartItem pizza={pizza} />
                    })
                }
            </ul>
            <hr className='my-6' />

            <div className='text-right'>
                <b>Grand Total: &#8377; 650</b>
            </div>

            <div className='text-right mt-6'>
                <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
            </div>
        </div>
    )
}

export default Cart;
