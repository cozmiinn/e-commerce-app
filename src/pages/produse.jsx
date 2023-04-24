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
        if (selectedCategory) {
            setFiltered(products.filter((product) => product.category === selectedCategory));
        } else {
            setFiltered(products);
        }
    }, [selectedCategory, products]);

    useEffect(() => {
        if (searchWord) {
            setFiltered(
                products.filter(
                    (product) =>
                        product.title.toLowerCase().includes(searchWord.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchWord.toLowerCase())
                )
            );
        } else {
            setFiltered(products);
        }
    }, [searchWord, products]);

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
            <div className="float-child1">
                <ul>
                    <a key="all" onClick={() => handleCategorySelect('')}>
                    </a>
                    <h2>Product Categories</h2>
                    {categories.map((category) => (
                        <li key={category} onClick={() => handleCategorySelect(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="float-child2">
                <div className="search-bar">
                    <input type="text" placeholder="Caută produs" onChange={handleSearch} />
                </div>
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
    );
}

export default Produse;
