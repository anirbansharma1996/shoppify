import React from "react";
import "./Cart.css";

export default function CartCard() {
  return (
    <div className="cart-card-main">
      <img src="" alt="name" />
      <h4>prod title</h4>
      <div className="d-flex align-items-center  gap-3">
        <button className="btn btn-outline-secondary">-</button>
        <p className="mt-2">0</p>
        <button className="btn btn-outline-secondary">+</button>
      </div>
      <button className="btn btn-dark">
        <i class="bi bi-trash3"></i>
      </button>
    </div>
  );
}
