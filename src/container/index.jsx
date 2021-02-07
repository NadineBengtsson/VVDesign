import * as React from 'react';
import ItemCount from "../components/ItemCount/index";
import ProductCard from '../components/ProductCard/index';
import "./style.css";
import Product from '../components/ProductList/index';
import ItemList from '../components/ItemList/ItemList';

//API - const [datos, setDatos] = useState(0)
    //useEffect = (() => {});
        //fetch()
          //}.then(result => {
             //return result.json()})
             //then (value => {
                // console.log(value);
                //setDatos
             //}).catch(error => {console.log(error)});
 //});   


//carrito

const Products =({greeting}, Product, stock) => {

    const [Product, setProduct] = React.useState([]);
    
    const [contador, setContador] = useState(1); 

    const [isLoading, setIsLoading] = useState (false)
    
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

   
    React.useEffect(() => {
        setIsLoading(true);

        const myPromise = new Promise ((resolve, reject)=> {
            setTimeout(() => resolve (Product), 3000)}); 

        myPromise.then(((result)=> {
            setProduct (result).finally(setIsLoading(false))}))},
    []);

    if(isLoading) {
        return <h1>Cargando Productos...</h1>; 
    }

        return (
            <> 
                <h2> {greeting} </h2>
                
                <ItemList Product={Product}/>

                <ItemCount stock={Product.stock} contador={contador} on onAdd={onAdd} on onSubstract={onSubstract}/>
            </>
    )};

export default Products;