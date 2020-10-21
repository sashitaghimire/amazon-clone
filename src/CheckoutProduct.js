import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkProduct__image" src={image} atl="checkout-product"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                {
                   Array(rating)
                   .fill()
                   .map((_, index) => (
                       <StarRateIcon key={index} />
                   ))
                }
            </div>
    
            <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
