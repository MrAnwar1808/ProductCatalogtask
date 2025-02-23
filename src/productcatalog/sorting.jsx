
import React from "react";

function Sorting({ setSortBy, setFilteredProducts, filteredProducts }){

    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        setSortBy(sortBy);
        sortProducts(sortBy);
      };
    
      const sortProducts = (sortBy) => {
        let sortedProducts = [...filteredProducts];
        if (sortBy === 'name') {
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'price') {
          sortedProducts.sort((a, b) => a.price - b.price);
        }
        setFilteredProducts(sortedProducts);
      }

    return(
        <div className="sort">
                <h3>Sort By</h3>
                <select onChange={handleSortChange}>
                <option value="">Select Sorting</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                </select>
        </div>
    )
}

export default Sorting