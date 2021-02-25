import "./style.css";
import { Tooltip } from '@material-ui/core';


const ItemCount = ({stock}, {onAdd}, {onSubstract}, {contador}) => {


    return (
        <>
            <button onClick={() => {onSubstract(stock)}}> - 
            </button>
            <b> {contador} </b>
            <p> Tenemos en el {stock} en stock</p>
            <div>
                 <Tooltip interactive title="Add">
                    <button onClick={ () => {onAdd()}}>+</button>
                </Tooltip>
            </div>
            <button onClick= {() => {setCarrito([...carrito])}}> Agregar al carrito </button>
        </>
    );
}

export default ItemCount;