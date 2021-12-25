import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const [product, setProduct] = useState({});

    //FOR FETCHING THE URL PARAMS (JUST LIKE WE USE REQ.PARAMS IN EXPRESS)
    //FOR EXAMPLE, IF THE URL IS "/PRODUCTS/1234", THEN USEPARAMS WILL RETURN {paramName: 1234} (in our case, {id: 1})
    const params = useParams();

    useEffect(() => {
        fetch(`/products/${params.id}`)
            .then(res => res.json()
                .then((resp) => {
                    console.log(resp);
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
            <button className='mb-12 font-bold'>Back</button>

            <div className="flex">
                <img src="/images/product-1.png" style={{ width: 130, height: 130 }} alt="" />

                <div className="ml-16">
                    <h1 className='text-xl font-bold'>Havana Special</h1>
                    <div className="text-md">small</div>
                    <div className="font-bold mt-2">Rs. 400</div>
                    <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
