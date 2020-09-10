import React from 'react'
import './Product.css';

function Product({id,title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__">
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((_)=>(
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>
           
            <img src={image} alt="product"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
