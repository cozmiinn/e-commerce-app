import React from "react";
import "../design/styleTrending.css";
import Produs from "./Produs";


function Trending(){
    return(
        <>
        <div className="container-3">
            <h1 className="divider line one-line">Trending Products</h1>
            <h2 className="smaller">Mirum est notare quam littera gothica quam nunc putamus parum claram</h2>
        </div>
        <Produs/>
        </>
    )
}

export default Trending;