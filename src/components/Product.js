import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../CartContext';

const Products = () => {

    // const { name } = useContext(CartContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/fetch-products')
            .then(res => res.json()
                .then((resp) => {
                    setProducts(resp.pizzas)
                }).catch((err) => {
                    console.log(err);
                }))
            .catch((err) => {
                console.log(err);
            })

    }, [])


    return (
        <div className="container mx-auto bg-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map((pizza) => {
                        return <ProductCard pizza={pizza} key={pizza.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Products;
