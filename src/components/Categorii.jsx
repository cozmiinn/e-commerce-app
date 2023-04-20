import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../design/styleCategorii.css";

function Categorii() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=3')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <ul>
        <div>
            <div className="container-images">
                {categories.map(category => (
                    <li className="unLI" key={category.id}>
                        <div className="side side-content-center">
                            <div>
                                <div className="details">
                                    <h3 className="h3text">{category.title}</h3>
                                    <a className="randuri" href="https://www.google.com/">Discover now</a>
                                </div>
                            </div>
                            <div className="side">
                                <img className="images" src={category.image} alt={category.title}/>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        </div>
        </ul>

    )

}

export default Categorii