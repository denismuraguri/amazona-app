import React, { useEffect, useState } from 'react'
import Product from "../components/Product"
import axios from "axios"
import LoadingBox from '../components/LoadingBox';
import MessageBox from "../components/MessageBox"

export default function HomeScreen() {
    //define a react hook to manage the state of your react component 
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);

    // Use effect function hook accept two parameter, a function and array that accept list of dependency
    useEffect(() => {
        //a function to fetch data
        const fetchData = async () => {
            try{
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false)
                setProducts(data)

            } catch(err){
                setError(err.message);
                setLoading(false)
            }

            
        };
        fetchData();
    }, [])

    return (
        <div>
            {loading? (<LoadingBox></LoadingBox>
            ):
              error ? (
              <MessageBox variant="danger">{error}</MessageBox>)
            :(
            <div className="row center">
                            {
                                products.map((product) => (
                                    <Product key={product._id} product={product} />
                                    
                                ))
                            }  
                    {/***end of div for row center */}        
                    </div>
            
            )}
          
                    
        
            </div>
    )
}
