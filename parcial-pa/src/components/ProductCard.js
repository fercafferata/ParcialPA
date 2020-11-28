import React from 'react';

const ProductCard = ({producto}) => {

    const {title, price, available_quantity, condition, thumbnail} = producto;

    return (
        <div className= "col s12 m6 l3">
            <div className="card">
                <div className="card-image">
                    <img src={thumbnail}/>
                </div>
                    <hr />
                <div className="card-content">
                    <h6><b>{title}</b></h6>
                    <h5>${price}</h5>
                    <h6>{condition}</h6>
                    <h6>Articulos disponibles: {available_quantity}</h6>
                </div>
            </div>
        </div>

    );
}
 
export default ProductCard;