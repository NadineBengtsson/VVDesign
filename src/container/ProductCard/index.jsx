import React from 'react';
import { Card, CardMedia, CardContent, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const ProductCard = ({product}) => {

    

    return (
        <>
            <Card>
                <CardMedia />
                <CardContent>
                </CardContent>
                    <IconButton aria-label="Agregar al Carrito">
                        <AddShoppingCart />
                    </IconButton>
            </Card>
        </>
    )
};

export default ProductCard;


