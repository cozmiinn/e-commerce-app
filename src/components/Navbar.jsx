import React from "react";
import "../design/styleNavbar.css"
import {getNumberOfWishlist} from "../services/wishlistFunctions";

const Navbar = () =>{
    const numberOfItems=getNumberOfWishlist();
    return (
        <div className="navbar">
                <a className="brand" href="/home">Outstock&#8482;</a>
                <div className="products">
                    <a href="/home">Home</a>
                    <a href="/produse">Produse</a>
                </div>
                <div>
                    <a className="wish" href="/wishlist">Wishlist({numberOfItems})</a>
                </div>
        </div>
    );
}

export default Navbar