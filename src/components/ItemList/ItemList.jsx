import React from 'react';
import Product from './components/ProductList/index';

const ItemList = (Product) => {
    return (
        <div>
            <ul>
                {Product.map((Product) => {
                    return <Item key={Product.id} product={Product}/> 
                    })};
            </ul>
        </div>
)};


export default ItemList;
