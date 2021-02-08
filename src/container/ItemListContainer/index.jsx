import * as React from 'react';
import ItemCount from "../../components/ItemCount/index";
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


//carrito

const ItemListContainer =({greeting}, stock) => {
    const [contador, setContador] = React.useState(1); 
    
    const onAdd= (stock) => {
        
        if (contador < stock){
            setContador(contador + 1);
            console.log("Producto agregado al carrito");}
        else {
            console.log("No hay stock")
        }};

    const onSubstract=(stock) => {
        if (contador > 1 ) {
            setContador(contador - 1);
        } else {
            console.log("Opcion no disponible")
        }
    };

        return (
            <> 
                <h2> {greeting} </h2>
                <ItemCount contador={contador} onAdd={onAdd} onSubstract={onSubstract}/>
            </>
    )};

export default ItemListContainer;