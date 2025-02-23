
import React from 'react';
import Productcard from './productcard';


function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Productcard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
