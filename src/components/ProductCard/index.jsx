import React from 'react';
import { Card, CardMedia, CardContent, IconButton, CardActionArea, Typography, CardActions} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

const useStyles = makeStyles({
    root: {
      minWidth: 345,
    },
    media: {
        height: 140,
      },
});


const ProductCard = ({product}) => {
    const classes = useStyles();

    const [irCarrito, SetIrCarrito] = useState(false);

    const onAdd= () => {
        
        if (contador < stock){
            setContador(contador + 1)
            SetIrCarrito(true)
        }

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
            <Card className={classes.root}>
                <CardActionArea> 
                    <CardMedia className={classes.media} image={product.image} title="image of product"/>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.description}
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {product.price}
                        </Typography>
                        <Link to={'/servicios/${product.id}'}>
                        <button> Ver mas </button>
                        </Link>

                        <div>
                            {irCarrito ? <Link to='/'>Ir al Carrito</Link> : 
                            <ItemCount onAdd={onAdd} onSubstract={onSubstract}/>}
                        </div>

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


