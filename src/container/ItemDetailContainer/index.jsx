import * as React from 'react';
import ItemList from '../../components/ProductList/index';

const GetItems = () => {
    
    //const [isLoading, setIsLoading] = React.useState (false);
    const [product, setProduct] = React.useState("");

    React.useEffect(() => {
        //setIsLoading(true);

        const myPromise = new Promise ((resolve, reject)=> {
            setTimeout(() => resolve (product), 3000)}); 

        myPromise.then(((result)=> {
            setProduct (result)}))},
    []);

    //if(isLoading) {
        //return <h1>Cargando Productos...</h1>; 
    //}
    return (
        <div>
            <ItemList product={product}/> 
        </div>
    )
}

export default GetItems;
