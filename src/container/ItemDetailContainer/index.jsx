import * as React from 'react';
import ProductList from '../../components/ProductList/index';
import { useParams } from 'react-router-dom'; 
import ItemCount from '../../components/ItemCount';


const GetItems = () => {
    
    //const [isLoading, setIsLoading] = React.useState (false);
    const [product, setProduct] = React.useState("");
    const {id} = useParams()
    console.log(id);

    //setIsLoading(true); 

    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject)=> {
            setTimeout(() => resolve (product), 3000)}); 

        myPromise.then(((result)=> {
            setProduct (result.find(li => li.id === id))}))},
    [])
    
   ;

    if(isLoading) {
        return <h1>Cargando Productos...</h1>; 
    }

    return (
        <>
            <div>
                <ProductList product={product}/>
            </div>
            
        </>
    )
}

export default GetItems;
