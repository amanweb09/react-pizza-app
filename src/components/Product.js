import axios from 'axios';
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    fetch('/fetch-products')
    .then(res => res.json().then((resp) => {console.log(resp);}).catch((err) => {console.log(err);}))
    .catch((err) => {console.log(err);})

    return (
        <div className="container mx-auto bg-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                <ProductCard />
            </div>
        </div>
    )
}

export default Products;
