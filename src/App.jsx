import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Imagine";
import Imagine from "./components/Imagine";


const App = () => {
    return (
        <>
                <Navbar/>

                <Imagine/>

                <Footer/>
        </>
    );
};

export default App;
