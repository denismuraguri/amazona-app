import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom'

export default function product(props) {
    const {product} = props;
    return (
        <div key={product._id}  className="card">
        <Link to={`/product/${product._id}`}>
            {/*<!--image size: 680px by 830px -->**/}
            <img className="medium" src={product.images} alt={product.name} />
        </Link>
        <div className="card-body">
            <Link to={`/product/${product._id}`}>
                <h2>{product.name}</h2>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="price">
                $ {product.price}
            </div>

        </div>
    
    {/***end of div for card */}
    </div>
    )
}
