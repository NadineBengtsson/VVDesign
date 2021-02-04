import "./style.css";

export const ItemCount = ({stock, carrito, onAdd, onSubstract, setCarrito, product, contador}) => {
    return (
        <>
            <button className="resta" onClick={() => {onSubstract()}}> - </button>
            <b> {contador} </b>
            <p> Tenemos en el {stock} en stock</p>
            <button className="suma" onClick={ () => {onAdd()}}> + </button>
            <button className="comprar"onClick= {() => {setCarrito([...carrito, product.name, product.description, product.price, product.image])}}> Agregar al carrito </button>
        </>
    );
}
