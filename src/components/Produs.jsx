import React, {useEffect, useState} from 'react';
import "../design/styleProdus.css"
import axios from "axios";

function Produs(){
    const [trendings, setTrending] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then(response => {
                setTrending(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);
    return(
        <div className="container-4">
            {trendings.map((trending) => (
                <div key={trending.id}>
                    <div className="imagini">
                        <img src={trending.image} alt={trending.title} />
                    </div>
                    <div>
                        <h3 className="h3_text_title">{trending.title}</h3>
                    </div>
                    <div>
                        <h3 className="h3_text_prizes">${trending.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Produs;