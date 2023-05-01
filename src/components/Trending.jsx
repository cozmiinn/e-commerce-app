import React from "react";
import "../design/styleTrending.css";
import ProdusTrending from "./ProdusTrending";


function Trending(){
    return(
        <>
        <div className="container-3">
            <h1 className="divider line one-line">Trending Products</h1>
            <h2 className="smaller">Mirum est notare quam littera gothica quam nunc putamus parum claram</h2>
        </div>
        <ProdusTrending/>
        </>
    )
}

export default Trending;