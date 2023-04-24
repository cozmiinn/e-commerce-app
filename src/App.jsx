import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/home';
import Produse from './pages/produse';
import WishList from './pages/wishlist';



const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='' exact element={<Home/>}/>
                    <Route path='/home' exact element={<Home/>}/>
                    <Route exact path='/produse' exact element={<Produse/>}/>
                    <Route exact path='/wishlist' exact element={<WishList/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
};

export default App;
