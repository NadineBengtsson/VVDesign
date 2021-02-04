import React, { useState, useEffect} from 'react';
import { ItemCount } from '../components/ItemCount/index';
import ProductCard from './ProductCard/index';
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

const Products =({greeting}, stock, carrito, onAdd, onSubstract) => {

    const [carrito, setCarrito] = useState()
    
    const onAdd= (carrito, stock) => {
        if (carrito < stock){
            setCarrito(carrito + 1); alert("Producto agregado al carrito");} else {
                alert("No hay stock")
            }};

    const onSubstract = () => {
        if (carrito > 1 ) {
            setCarrito(carrito - 1)
        } else {
            alert("Opcion no disponible")
        }
    };
    
    return (
        <> 
            <div className={greeting} />
            <h2> Tienda </h2>
            <ItemCount stock={12} carrito={carrito} on onAdd={onAdd}/>
             <ProductCard />
        </>
    )};

export default Products;