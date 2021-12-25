import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const cartStyle = {
        background: 'orange',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px',
        height: '45px',
        width: '100px',
        marginLeft: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <NavLink to="/">
                    <img style={{ height: 45, width: 45 }} src="/images/logo.png" alt="" />
                </NavLink>

                <ul className="flex items-center">
                    <li style={{margin: '0 10px'}} className="font-semibold">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="font-semibold" style={{margin: '0 10px'}}>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <div style={cartStyle}>
                                <span className="font-semibold">10</span>
                                <img style={{width: 30, height: 30}} src="/images/cart.png" alt="" />
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
