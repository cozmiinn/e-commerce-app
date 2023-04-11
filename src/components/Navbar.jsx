import React from "react";
import "../design/styleNavbar.css"
const Navbar = () =>{
    return (
        <div className="navbar">
                <a className="brand" href="App">Outstock&#8482;</a>
                <div className="products">
                    <a href="#">Home</a>
                    <a href="#">Produse</a>
                </div>
                <div>
                    <a className="wish" href="#">Wishlist</a>
                </div>
        </div>
    );
}

export default Navbar