import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SingleProduct = () => {

    const [product, setProduct] = useState({});

    //FOR FETCHING THE URL PARAMS (JUST LIKE WE USE REQ.PARAMS IN EXPRESS)
    //FOR EXAMPLE, IF THE URL IS "/PRODUCTS/1234", THEN USEPARAMS WILL RETURN {paramName: 1234} (in our case, {id: 1})
    const params = useParams();


    //USEHISTORY IS REPLACED BY USENAVIGATE IN NEW REACT-ROUTER-DOM VERSION
    const history = useNavigate();

    useEffect(() => {
        fetch(`/products/${params.id}`)
            .then(res => res.json()
                .then((resp) => {
                    const pizza = resp.pizza;
                    setProduct(pizza);
                })
                .catch((err) => {
                    console.log(err);
                }))
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='container mx-auto mt-12'>
            <button onClick={() => { history('/') }} className='mb-12 font-bold'>Back</button>

            <div className="flex">
                <img src={product.image} style={{ width: 130, height: 130 }} alt="" />

                <div className="ml-16">
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">Rs. {product.price}</div>
                    <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
