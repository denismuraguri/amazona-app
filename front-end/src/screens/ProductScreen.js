import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
//import data from "../data"

function ProductScreen(props) {
    //const product = data.products.find(x => x._id === props.match.params.id);
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails =  useSelector((state) => state.productDetails);
    const{loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);


    {/**if(!product) {
        return <div>Product Not Found</div>
    }*/}
    return (
        <div>
            {loading? (<LoadingBox></LoadingBox>
            ):
              error ? (
              <MessageBox variant="danger">{error}</MessageBox>)
            :(
                <div>
                <Link to="/">Back to result</Link>
                <div className="row top">
                    <div className="col-2">
                        <img class="large" src={product.images} alt={product.name}>
                        </img>
                    </div>
                    <div className="col-1">
                        <ul>
                        <li>{product.name}</li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Description: {product.description} <p></p>
                        </li>
                        </ul>
                    </div>
                    <div className="col-1"> 
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                   <div>Price</div>
                                   <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                   <div>Status</div>
                                   <div>
                                       {//using conditional rendering
                                       product.countInStock> 0 ?
                                       (<span className="success">In Stock</span> ) :                                   
                                       (<span className="danger">Unavailable</span>)}</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to cat</button>
                            </li>
                        </ul>
                    </div>
                    
                    </div>
    
                </div>
            </div>           
            )}
            </div>

        
    )
}

export default ProductScreen
