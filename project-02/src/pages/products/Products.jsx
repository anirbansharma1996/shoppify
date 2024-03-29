import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

export default function Products() {
  return (
    <div className="container products-main">
      <div className="product-filter container">
        <h4 className="mt-3">Find products accordingly</h4>
        <hr />
      </div>
      <div className=" container product-card">
        <div className="d-flex align-items-center gap-2 mt-3">
          <input
            type="text"
            placeholder="search product here"
            className="form-control"
          />
          <button className="btn btn-dark">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <ProductCard/>
      </div>
    </div>
  );
}
