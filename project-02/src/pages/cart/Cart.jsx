import React from "react";
import CartCard from "./CartCard";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="container mt-3">
      <CartCard />
      <hr />
      <Checkoutfn />
    </div>
  );
}

export function Checkoutfn() {
  return (
    <div className="text-end">
      <h3>Total : ₹ 1000/-</h3>
      <button
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#paymentModal"
      >
        {" "}
        Checkout
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="paymentModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ₹ Payment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <PaymentForm />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success w-100"
                data-bs-dismiss="modal"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaymentForm() {
  return (
    <form>
      <input
        type="tel"
        minLength={16}
        required
        placeholder="XXXX XXXX XXXX XXXX"
        className="form-control"
      />
      <div className="d-flex mt-2 gap-3">
        <input type="date" className="form-control" required />
        <input
          type="tel"
          required
          maxLength={3}
          className="form-control"
          placeholder="CVV"
        />
      </div>
    </form>
  );
}
