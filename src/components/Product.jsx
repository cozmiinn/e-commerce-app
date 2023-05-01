import React from 'react';
import '../design/styleProduct.css';
import {addToWish} from "../services/wishlistFunctions";

function Product(props) {
    const { product } = props;
    const handleAddToWish=()=>{
        addToWish(product);
    }


    return (
        <>
        <div className="product">
            <div className="imaginii">
            <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <div className="theSameLine">
            <p>${product.price}</p>
            <a className="addToWish" onClick={()=>handleAddToWish(product)} > Add to wishlist</a>
            </div>
        </div>
            </>
    );
}

export default Product;
