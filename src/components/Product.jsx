import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { connect } from "react-redux";

function Product({ product,dispatch }) {
  const addToCompare=(id)=>{
    dispatch({
      type: "ADDTOCOMPARE",
      payload: id,
    });
  }
  return (
    <div className="productItem">
      <div className="productImage">
        <img src={product.img} alt="laptop pic" />
        <div className="hoverButtons">
          <Link to={`/details/${product.id}`}>Details</Link>
          <button>Basket</button>
          <label>
            <input onChange={()=>addToCompare(product.id)} type="checkbox" /> Compare
          </label>
        </div>
      </div>
      <div className="textCenter">
        <h3 title={product.title}>{product.title.slice(0,20)}..</h3>
        <p>
          {product.cpu}/{product.memory}/{product.storage}/{product.screen}/
          {product.weight}
        </p>
        <div className="bestPrice">
          <p>Best offer at</p>
          <h3>{product.best_price.split("@")[1]}</h3>
        </div>
        <span>{product.best_price.split("@")[0]}</span>
      </div>
    </div>
  );
}
export default connect()(Product);
