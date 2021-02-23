import { useState } from "react";

const CartContext = React.createContext(false)

function CartContext(){
    const [product, setProduct] = useState([])

    return (
        <CartContext.Provider value={{product, setProduct}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;