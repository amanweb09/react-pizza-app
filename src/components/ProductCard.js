import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../CartContext';

const ProductCard = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const { cart, setCart } = useContext(CartContext);

    const addToCart = (e, pizza) => {
        e.preventDefault();

        //cart structure
        // {
        //     items: {
        //         'productID': 'productQty', 
        //         'productID': 'productQty' 
        //     },
        //     totalItems: 'totalQty',
        // }

        let _cart = { ...cart };

        if (!_cart.items) {
            _cart.items = {}
        }
        if (!_cart.items[pizza.id]) {
            _cart.items[pizza.id] = 1;
        }
        else {
            _cart.items[pizza.id] += 1;
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;

        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false)
        }, 1000);
    }

    const pizza = props.pizza;

    return (
        <NavLink to={`/products/${pizza.id}`}>
            <div>
                <img src={pizza.image} alt="" />

                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{pizza.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{pizza.size}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span>Rs. {pizza.price}</span>
                    <button
                        onClick={(e) => { addToCart(e, pizza) }}
                        className={`${isAdding ? "bg-green-500" : "bg-yellow-500"} py-1 px-4 rounded-full font-bold`}
                        disabled={isAdding}>
                        ADD{isAdding ? "ED" : ""}
                    </button>
                </div>
            </div>
        </NavLink>
    )
}

export default ProductCard
