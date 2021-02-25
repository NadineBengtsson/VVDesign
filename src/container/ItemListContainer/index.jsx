import * as React from 'react';
import ItemCount from "../../components/ItemCount/index";
import ProductList from "../../components/ProductList/index";
import { CartContext } from '../../components/CartWidget/Cart/context/CartContext';
import "./style.css";


//const API = () => {
    //const [datos, setDatos] = useState("");
    
    //React.useEffect = (() => {
        //fetch('https://api.mercadopago.com/v1/payments', {method: 'POST', mode: 'cors', cache: 'no-cache', credentials: 'same-origin',
        //headers: {
        //'Content-Type':'application/json',
        //'Authorization' : 'Bearer ACCESS_TOKEN_ENV'
        //}, redirect: 'follow', referrerPolicy: 'no-referrer', body: JSON.stringify(
            //{items: [
                //{title: "nombre del producto", 
                //description: "Multicolor",
                //quantity: 1, 
                //currency_id: "ARS", 
                //unit_price: 10
    //}]}
        //)})
        //.then(result => {
            // return result.json()})
            // .then (value => {
              //  console.log(value);
                //setDatos(value);
            // }).catch(error => {console.log(error)});
    //})};

//



//carrito

const ItemListContainer =({greeting}) => {

    const [cart, setCart] = useContext(CartContext);
    console.log(cart);

    useEffect(() => {
        const Database= getFirestore();
        const itemCollection = Database.collection('Products');

    itemCollection.get().then((value) => {
        let aux = value.docs.map(element => {return {...element.data(), id:element.id}})})}, [])

    item.get().then()

    const stock =() => {
        let stock = 12;
    }

    const [contador, setContador] = React.useState(1); 
    
    const onAdd= () => {
        
        if (contador < stock){
            setContador(contador + 1);}
        else {
            console.log("No hay stock")
        }};

    const onSubstract=() => {
        if (contador > 1 ) {
            setContador(contador - 1);
        } else {
            console.log("Opcion no disponible")
        }
    };

        return (
            <> 
                <h2> {greeting} </h2>
                <div>
                    {Products.length < 1 ? <h1> Cargando...</h1> : <ProductList product={Products} />}
                </div>
                <ItemCount stock={12} contador={contador} onAdd={onAdd} onSubstract={onSubstract}/>
                <button onClick={()=> {setCart([...cart, [{product:{Products}, quantity:2}]])}}>Agregar al carrito</button>
            </>
    )};

export default ItemListContainer;