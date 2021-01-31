import React from 'react';
import ProductCard from './ProductCard/index';

const product = [
    {id:1, name: 'Hogar completo', description: 'diseño completo para todos o varios espacios de una casa', price:'$', image:'./public/assets/hogar.jpg'},
    {id:2, name: 'Oficina completo', description: 'diseño completo para todos o varios espacios de una oficina', price:'$', image:'\public\assets\living2.jpg'},
    {id:3, name: 'Exteriores', description: 'diseño de jardines, galerias y ambientes al aire libre', price:'$', image:'./public/assets/exteriores2.jpg'},
    {id:4, name: 'Cocina', description: 'diseño para una cocina funcional, ordenada y elegante', price:'$', image:'./public/assets/cocina2.jpg'},
    {id:5, name: 'Living y recibidores', description: 'diseño para crear un espacio donde compartir con amigos y familia momentos únicos', price:'$', image:'./public/assets/entrada2.jpg'},
    {id:6, name: 'Baños', description: 'diseño para baños y toilettes, incluyendo remodelaciones, items de decoración y ambiente', price:'$', image:'./public/assets/bano.jpg'},
    {id:7, name: 'Lugares de Ocio', description: 'diseño para una lugares de ocio y entretenimiento, gimnasios, playrooms, bibliotecas, etc', price:'$', image: './public/assets/ocio2.jpg'},
    {id:8, name: 'Home Office y consultorios', description: 'diseño para crear un espacio de oficina que sea práctico y cómodo para trabajar', price:'$', image: './public/assets/reloj.jpg'},
    {id:9, name: 'Armarios y Vestidores', description: 'diseño para hacer fácil el guardado y cuidado de la ropa y que se luzcan tus mejores prendas', price:'$', image: './public/assets/consola.jpg'},
    {id:10, name: 'Habitaciones', description: 'diseño para cuartos en suite, cuartos de niños  y de bebés, de adolescentes, adultos y para invitados', price:'$', image: './public/assets/cuarto2.jpg'},
    {id:11, name: 'Cortinas', description: 'colocación de cortinas de todos los tipos y estilos', price:'$', image: './public/assets/cortina.jpg'},
    {id:12, name: 'Muebles a medida', description: 'diseño de muebles a medida para que entren en espacios determinados', price:'$', image: './public/assets/entrada.jpg'},
    {id:13, name: 'Blanquería (sabanas, toallas, y más)', description: 'venta de productos únicos de blanquería para tus camas, cunas, baños y más', price:'$', image: './public/assets/velas.jpg'},
    {id:14, name: 'Ceramica, vajilla, y objetos únicos de decoración', description: 'venta de productos únicos de decoración, ceramica y vallija de primera calidad para tus espacios', price:'$', image:'./public/assets/hogar2.jpg'},
    {id:15, name: 'Iluminacion de ambientes', description: 'generando espacios con luces calidas-frias, bien iluminados', price:'$', image: './public/assets/iluminacion.jpg'}
];

const Products =({greeting, product}) => {

    console.log(product);

    return (
        <> 
            <h2 className={greeting}>Tienda</h2>
            <ProductCard />
        </>   
    );
}

export default Products;