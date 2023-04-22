import { useEffect, useState } from 'react';
import Product from '../components/Product.jsx';

function Produse() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

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
        if (searchTerm) {
            setFiltered(
                products.filter(
                    (product) =>
                        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFiltered(products);
        }
    }, [searchTerm, products]);

    function handleCategorySelect(category) {
        setSelectedCategory(category);
    }

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    const categories = Array.from(new Set(products.map((product) => product.category)));
        // .map((category) => category.charAt(0).toUpperCase() + category.slice(1)); - nu mai aduce datele din api

    return (
        <div className="product-page">
            <div className="category-list">
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
            <div className="product-list">
                <div className="search-bar">
                    <input type="text" placeholder="Caută produs" onChange={handleSearch} />
                </div>
                <ul>
                    {filtered.map((product) => (
                        <li key={product.id}>
                            <Product product={product} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Produse;
