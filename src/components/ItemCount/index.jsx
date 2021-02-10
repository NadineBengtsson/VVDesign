import "./style.css";


const ItemCount = ({stock}, {carrito}, {onAdd}, {onSubstract}, {setCarrito}, {contador}) => {

    const setCarrito = () => {
        console.log(carrito)
    }; 

    return (
        <>
            <button onClick={() => {onSubstract(stock)}}> - </button>
            <b> {contador} </b>
            <p> Tenemos en el {stock} en stock</p>
            <button onClick={ () => {onAdd()}}> + </button>
            <button onClick= {() => {setCarrito([...carrito])}}> Agregar al carrito </button>
        </>
    );
}

export default ItemCount;