
import React from "react";

function Productcard({ product }){
    return(
            <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating} / 5</p>
            </div>
    )
}

export default Productcard