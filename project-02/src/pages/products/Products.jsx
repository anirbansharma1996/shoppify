import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import useFetchData from "../../custom/useFetchData";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";

export default function Products() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );
  if (loading) {
    return <Loader />;
  }
  if(error){
    return <Error/>
  }

  return (
    <div className="products-main">
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
        <div className="product-card-main mt-3 mb-3">
          {data?.map((el) => (
            <ProductCard key={el.id} props={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
