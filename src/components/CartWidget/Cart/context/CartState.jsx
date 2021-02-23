import ProductList from "../components/ProductList"

export const CartState = () => {
    const [cart, setCart] = useState([])

    function AddItem (Products, quantity) {
        if (IsInCart({Products.id === -1})){
            setCart({Products})
        } else {

        }};

    function IsInCart(id){
        return ProductList.findIndex(prod => prod.id === id)
    }; 

    function removeItem() {
        return Products.filter() //quitar
    };

    function ClearCart(Cart) {
       return setCart(false);
    };


    return <CartState.Provider value ={{cart, setCart}}>
        {children}
    </CartState.Provider>
}