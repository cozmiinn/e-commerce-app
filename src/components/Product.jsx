import React from 'react';
import '../design/styleProduct.css';

function Product(props) {
    const { product } = props;

    return (
        <>
        <div className="product">
            <div className="imaginii">
            <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
            </>
    );
}

export default Product;
