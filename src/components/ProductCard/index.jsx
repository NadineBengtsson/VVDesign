import React from 'react';
import { Card, CardMedia, CardContent, IconButton, CardActionArea, Typography, CardActions} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from './components/ProductList/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 345,
    },
    media: {
        height: 140,
      },
});


const ProductCard = ({Product}) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea> 
                    <CardMedia className={classes.media} image={Product.image} title="image of product"/>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {Product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {Product.description}
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {Product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="Agregar al Carrito">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
};

export default ProductCard;


