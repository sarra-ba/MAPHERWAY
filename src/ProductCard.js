import React from 'react';
import './ProductCard.css'; 
const ProductCard = ({ product }) => {
    const price = parseFloat(product.price) || 0; 
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${price.toFixed(2)}</p>
            {product.image_url ? (
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="product-image" 
                />
            ) : (
                <p>No image available</p> 
            )}
        </div>
    );
};

export default ProductCard;
