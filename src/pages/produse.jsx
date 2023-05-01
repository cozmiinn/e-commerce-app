import { useEffect, useState } from 'react';
import Product from '../components/Product.jsx';
import '../design/styleProdusePage.css';

function Produse() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchWord, setWordSearch] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFiltered(data);
            });
    }, []);

    useEffect(() => {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.category === selectedCategory);
        }

        if (searchWord) {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.title.toLowerCase().includes(searchWord.toLowerCase())
            );
        }

        setFiltered(filteredProducts);
    }, [selectedCategory, searchWord, products]);


    function handleCategorySelect(category) {
        setSelectedCategory(category);
    }

    function handleSearch(event) {
        setWordSearch(event.target.value);
    }

    const categories = Array.from(new Set(products.map((product) => product.category)));
    // .map((category) => category.charAt(0).toUpperCase() + category.slice(1)); - nu mai aduce datele din api

    return (

        <div className="float-container">
            <div className="float-child-left">
                <ul>
                    <h2>Product Categories</h2>
                    <a key="all" onClick={() => handleCategorySelect('')}>
                        <li>all</li>
                    </a>
                    {categories.map((category) => (
                        <li key={category} onClick={() => handleCategorySelect(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="float-child-right">
                <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Search.." onChange={handleSearch} />
                </form>
                <div className="allProducts">
                    <ul>
                        <div className="container-6">
                            {filtered.map((product) => (
                                <li key={product.id}>
                                    <Product product={product} />
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Produse;
