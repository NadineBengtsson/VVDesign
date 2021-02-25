import ProductList from "../components/ProductList"

export const CartState = () => {
    const [cart, setCart] = useState([])

    function AddItem (Products, contador) {
        if (IsInCart({Products.id === -1})){
            setCart({Products})
        } else {
            setCart({...cart, Products,contador})
        }};

    function IsInCart(id){
        return ProductList.findIndex(prod => prod.id === id)
    }; 

    function removeItem() {
        return Products.filter((setCart) => setCart.id !== Product.id) //quitar
    };

    function ClearCart(Cart) {
       return setCart(false);
    };


    return <CartState.Provider value ={{cart, setCart, IsInCart, removeItem, ClearCart, AddItem}}>
        {children}
    </CartState.Provider>
}