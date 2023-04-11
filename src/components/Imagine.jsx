import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../design/styleImagini.css"
import {useState, useEffect} from "react";


function Imagine({ productId }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => setImageUrl(data.image));

    }, [productId]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
                <Slider {...settings}>
                    <div className="container">
                        <img src={imageUrl} alt={`Product ${productId}`}/>
                    </div>
                    <div className="container">
                        <img src={imageUrl} alt={`Product ${productId}`}/>
                    </div>
                    <div className="container">
                        <img src={imageUrl} alt={`Product ${productId}`}/>
                    </div>
                    <div className="container">
                        <img src={imageUrl} alt={`Product ${productId}`}/>
                    </div>
                </Slider>
        </div>
    );
};


export default Imagine