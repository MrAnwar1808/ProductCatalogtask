
import React, { useEffect, useState } from "react";
import Filterpricerangeandcatalog from "../productcatalog/filterpriceandcatalog";
import Sorting from "../productcatalog/sorting";
import ProductList from "../productcatalog/productlist";
import './Maincontent.css'

function Maincontent(){

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sortBy, setSortBy] = useState('');
    
    const categories = ['Electronics', 'Fashion'];
  
    useEffect(() => {
      // Simulating API call for product data
      const fetchProducts = async () => {
        const response = await fetch('products.json'); // Use actual endpoint if real API
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)
      };
      
      fetchProducts()
    }, [])

    return(
        <div className="App">
            <h1>Product Catalog</h1>

            <Filterpricerangeandcatalog 
            setCategory={setCategory}
            setPriceRange={setPriceRange}
            categories={categories}
            setFilteredProducts={setFilteredProducts}
            allProducts={products}
            />

            <Sorting 
            setSortBy={setSortBy}
            setFilteredProducts={setFilteredProducts}
            filteredProducts={filteredProducts}
            />

            <ProductList 
            products={filteredProducts}
            />

        </div>
    )
}

export default Maincontent