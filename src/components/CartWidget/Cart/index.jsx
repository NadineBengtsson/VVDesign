import React, { createContext, useContext, Link } from 'react'
import {ShoppingCart} from '@material-ui/icons';
import { CartContext} from './context/CartContext';

const Cart = () => {

    const CartContextUse = useContext(CartContext)
    console.log(CartContextUse)

    return (
        <div>
            <Link to='/'>
                <ShoppingCart />
            </Link>
        </div>
    )
}

export default Cart
