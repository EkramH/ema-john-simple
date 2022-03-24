import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    const handletAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product} 
                        handletAddToCart={handletAddToCart}></Product>) //we can also send eventhandler
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;