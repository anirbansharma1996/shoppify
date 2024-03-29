import React from "react";
import "./Products.css";

export default function SoloProduct() {
  return (
    <section className="container mt-3">
      <ProductDetails />
      <Review />
    </section>
  );
}

export function ProductDetails() {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button className="btn btn-dark">Add to Cart</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export function Review() {
  return (
    <div>
      <h5>Product Reviews</h5>
      <p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio eveniet
        inventore corrupti nostrum, enim fugit nam. Excepturi asperiores quas,
        earum reiciendis facere inventore assumenda pariatur, consequuntur eum
        quod necessitatibus facilis?
      </p>
      <span> - Shreya Modak</span>
      <hr />
      <p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        <i class="bi bi-star"></i>
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio eveniet
        inventore corrupti nostrum, enim fugit nam. Excepturi asperiores quas,
        earum reiciendis facere inventore assumenda pariatur, consequuntur eum
        quod necessitatibus facilis?
      </p>
      <span> - Soham Bose</span>
    </div>
  );
}
