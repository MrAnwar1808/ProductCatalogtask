 
 import React from "react";

 function Filterpricerangeandcatalog({ setCategory, setPriceRange, categories, setFilteredProducts, allProducts }){

    const handleCategoryChange = (e) => {
        const category = e.target.value
        setCategory(category)
        applyFilters(category, null)
      }
    
      const handlePriceChange = (e) => {
        const priceRange = e.target.value
        setPriceRange(priceRange)
        applyFilters(null, priceRange)
      }
    
      const applyFilters = (category, priceRange) => {
        let filteredProducts = allProducts
    
        if (category) {
          filteredProducts = filteredProducts.filter(product => product.category === category)
        }
    
        if (priceRange) {
          const [minPrice, maxPrice] = priceRange.split('-').map(Number)
          filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
        }
    
        setFilteredProducts(filteredProducts)
      };

    return(
        <div className="filter">

            <h3>Filter</h3>
            <select onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
        ))}
             </select>

            <select onChange={handlePriceChange}>
            <option value="">Select Price Range</option>
            <option value="0-5000">0 - 5000</option>
            <option value="5000-10000">5000 - 10000</option>
            <option value="10000-50000">10000 - 50000</option>
            </select>

        </div>
    )
 }

 export default Filterpricerangeandcatalog