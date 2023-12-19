import React from 'react';

const ReviewItem = (props) => {
    const {img, name, price, quantity, key} = props.product;
    const {handleRemove} = props;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="img" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <h5>Quantity: {quantity}</h5>
                <button className='btn-regular' onClick={()=>handleRemove(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;