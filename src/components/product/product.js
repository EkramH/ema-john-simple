import React from 'react';
import './Product.css'

const product = ({product, handletAddToCart}) => {
    // const {product, handletAddToCart} = props;
    const {name, seller, price, ratings, img} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>{price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => handletAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default product;