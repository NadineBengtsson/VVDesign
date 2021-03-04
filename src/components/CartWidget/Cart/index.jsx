import React, { createContext, useContext} from 'react';
import {Link } from 'react-router-dom';
import {ShoppingCart} from '@material-ui/icons';
import { CartContext} from './context/CartContext';

export const Cart = () => {

    const CartContextUse = useContext(CartContext)
    console.log(CartContextUse)


    const { cart, removeItem, removeAll } = useContext( CartContext )

    const getTotal = () => {
         const sum = (cart.length>1) ? cart.reduce((a,b) => Number(a.item.precio) + Number(b.item.precio)) : cart[0].item.precio
         const quantity = (cart.length>1) ? cart.reduce((a,b) => a.quantity + b.quantity) : cart[0].quantity
         return sum*quantity
    }

    
    

    return (
            {cart.length ===0 ? 
                <>
                    <h1> Tu carrito está vacío</h1>
                        <Link to="/"><button>Ver el menú</button></Link>
                        </>
                        : 
                        <>
                            <ul className="list-group">
                                  {
                                       cart.map(prod => (
                                            <li key={ prod.item.id }>
                                                 <span >{ prod.quantity }</span>
                                                 <span >${ prod.item.precio }</span>
                                                 <span>{ prod.item.nombre }</span>
                                                 <span style={{cursor:'pointer'}} onClick={()=>removeItem(prod.item.id)}></span>
                                            </li>
                                       ))}
                             </ul>
                             <p>
                                  Total: ${
                                       getTotal()
                                  }
                             </p>
                             <div>
                                  <label onClick={()=>removeAll()}> VACIAR </label>
                                  <button> COMPRAR </button>
                             </div>
                        </>
            return (
                <>
                    <Link to='/'>
                        <ShoppingCart />
                    </Link>
                </>)
