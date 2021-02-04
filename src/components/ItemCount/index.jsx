import "./style.css";

export const ItemCount = ({stock, carrito, onAdd}) => {
    return (
        <>
             <button className="resta" onClick={ () => {onSubstract(carrito)}}> - </button>;
            <b>{carrito}</b>
            <b> Tenemos en el stock{stock}</b>
            <button className="suma" onClick={ () => {onAdd(stock)}}> + </button>;
            <button className="comprar"onClick= {() => {setCarrito([...carrito, product.name, product.description, product.price, product.image])}}> Agregar al carrito </button>
        </>
    );
}
