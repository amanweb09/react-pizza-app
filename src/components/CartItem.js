import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartItem = (props) => {
    const { cart, setCart } = useContext(CartContext);
    const pizza = props.pizza;

    const deleteItem = (id) => {
        let _cart = { ...cart };
        const qty = _cart.items[id];

        delete _cart.items[id];
        _cart.totalItems -= qty;

        return setCart(_cart);
    }

    return (
        <div>
            <li className='mb-12'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img className='h-16 w-16' src={pizza.image} alt="" />
                        <span className='font-bold ml-4 w-48'>{pizza.name}</span>
                    </div>

                    <div>
                        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                        <b className='px-4'>1</b>
                        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                    </div>

                    <span>&#8377; {pizza.price}</span>

                    <button onClick={() => { deleteItem(pizza.id) }} className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
                </div>
            </li>
        </div>
    )
}

export default CartItem
