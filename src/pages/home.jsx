import React from 'react';
import SectiuneaIntroducere from "../components/SectiuneIntroducere";
import Categorii from "../components/Categorii";
import Trending from "../components/Trending";

const Home=()=>{
    return(
        <>
            <SectiuneaIntroducere/>
            <Categorii/>
            <Trending/>
        </>
    )
}

export default Home;