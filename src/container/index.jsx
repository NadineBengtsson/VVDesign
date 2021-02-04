import React, { useState} from 'react';
import { ItemCount } from '../components/ItemCount/index';
import ProductCard from './ProductCard/index';
import "./style.css";
//import Product from './Product-List/index';

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

const Products =({greeting}, stock) => {

    const [carrito, setCarrito] = useState()
    
    const onAdd= (carrito, stock) => {
        if (carrito < stock){
            setCarrito(carrito + 1); alert("Producto agregado al carrito");
        } 
        else {
                alert("No hay stock")
        }};

    const onSubstract=(carrito) => {
        if (carrito > 1 ) {
            setCarrito(carrito - 1)
        } else {
            console.log("Opcion no disponible")
        }
    };
    
    return (
        <> 
            <div className={greeting} />
            <h2> Tienda </h2>
            <ItemCount stock={12} carrito={0} on onAdd={onAdd} on onSubstract={onSubstract}/>
             <ProductCard />
        </>
    )};

export default Products;