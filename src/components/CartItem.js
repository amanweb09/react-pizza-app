import React from 'react'

const CartItem = (props) => {
    const pizza = props.pizza;

    return (
        <div>
            <li className='mb-12'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img className='h-16 w-16' src={pizza.image} alt="" />
                        <span className='font-bold ml-4 w-48'>Havana Special</span>
                    </div>

                    <div>
                        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                        <b className='px-4'>1</b>
                        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                    </div>

                    <span>&#8377; {pizza.price}</span>

                    <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
                </div>
            </li>
        </div>
    )
}

export default CartItem
