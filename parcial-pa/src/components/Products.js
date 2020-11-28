import React from 'react';
import ProductCard from './ProductCard';

const Products = ({productos}) => {
    return (
        <div className="row">
            {productos.map(producto => (
                <ProductCard
                    key={producto.id}
                    producto={producto}
                />
            ))}
            
        </div>
    );
}
 
export default Products;