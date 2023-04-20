import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import SectiuneaIntroducere from "./components/SectiuneIntroducere";
import Categorii from "./components/Categorii";
// import ImaginiMainPage from "./components/ImaginiMainPage";



const App = () => {
    return (
        <>
                <Navbar/>
                <SectiuneaIntroducere/>
                <Categorii/>
                <Trending/>
                <Footer/>
        </>
    );
};

export default App;
