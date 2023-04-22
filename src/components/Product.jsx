import React from 'react';

function Product(props) {
    const { product } = props;

    return (
        <div className="product">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
        </div>
    );
}

export default Product;
