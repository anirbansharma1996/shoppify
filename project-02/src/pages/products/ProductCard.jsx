import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ props }) {
  const navigate = useNavigate();
  const { id, title, rating, price, image, category } = props;

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div class="card" key={id} onClick={() => handleClick(id)}>
      <img src={image} class="card-img-top" alt={title} />
      <div class="card-body">
        <span>{category}</span>
        <h6 class="card-title">{title.substring(0, 30)}</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>
            <span>Rating</span> : {rating.rate} / 5
          </p>
          <p>
            <span>Votes</span> : {rating.count}{" "}
          </p>
        </div>

        <div className="d-flex">
          Price :{" "}
          <s style={{ color: "grey" }}>$ {Math.round(price) * 80 + 236}</s>
          &nbsp;
          <h5>$ {Math.round(price) * 80}</h5>
        </div>
      </div>
    </div>
  );
}
