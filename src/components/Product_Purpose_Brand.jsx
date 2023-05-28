import React from "react";
import { Link } from "react-router-dom";
function Product_Purpose_Brand({ product }) {
  return (
    <>
      <Link to={`/details/${product.id}`} className="purposeProdZone">
        <div className="purposeProductImage">
          <img src={product.img} alt="laptop pic" />
        </div>
        <div className="purposeTextCenter">
          <h3>{product.title.slice(0,20)}...</h3>
          <p>
            {product.cpu}/{product.memory}/{product.storage}/{product.screen}/
            {product.weight}
          </p>
          <span>${product.best_price.split("@")[0]}</span>
        </div>
      </Link>
    </>
  );
}
export default Product_Purpose_Brand;
