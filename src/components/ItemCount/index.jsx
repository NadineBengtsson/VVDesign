import "./style.css";

export const ItemCount = ({stock, carrito, onAdd, onSubstract, setCarrito, product}) => {
    return (
        <>
            <button className="resta" onClick={() => {onSubstract(carrito)}}> - </button>
            <b>{carrito}</b>
            <p> Tenemos en el {stock} en stock</p>
            <button className="suma" onClick={ () => {onAdd(carrito)}}> + </button>
            <button className="comprar"onClick= {() => {setCarrito([...carrito, product.name, product.description, product.price, product.image])}}> Agregar al carrito </button>
        </>
    );
}
