import React, { useEffect } from "react";
import "./Main.css";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function Main() {
  return (
    <section>
      <HeroSlide />
      <h3 className="text-center m-4">Best Seller Men's</h3>
      <SwipeItem />
      <h3 className="text-center m-4">Best Seller Women's</h3>
      <SwipeItem />
      <h3 className="text-center m-4">Frequently Asked Questions</h3>
      <Faq />
    </section>
  );
}

// Hero Section
export function HeroSlide() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
             
              src="https://t4.ftcdn.net/jpg/05/96/62/65/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
             
              src="https://media.istockphoto.com/id/496604536/photo/exclusive-mens-clothing.jpg?s=170667a&w=0&k=20&c=zM-opP_YkwllzxpJLaAk2naq5gf6ygxdIQsuMQzzXXc="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              
              src="https://t3.ftcdn.net/jpg/06/87/35/38/360_F_687353838_OkFmP2wZyg23Z4EtJTd1ugSWEvsdvI3H.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

//Swiper function
export function SwipeItem() {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 4</div>
        <div className="swiper-slide">Slide 5</div>
        <div className="swiper-slide">Slide 6</div>
        {/* Add more slides here */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
//FAQ
export function Faq() {
  return (
    <div className="container">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              How can I track my order?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              We've made order tracking easy for you! Once your order has been
              processed and shipped, you will receive a confirmation email
              containing a tracking number. You can use this tracking number to
              monitor the status of your shipment on our website. Simply
              navigate to the "Track Order" section, enter your tracking number,
              and you'll get real-time updates on the whereabouts of your
              package.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              What is your return policy?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              We want you to be completely satisfied with your purchase. If for
              any reason you're not happy with your order, we offer a
              hassle-free return policy. You can return any unused or defective
              items within 30 days of delivery for a full refund or exchange.
              Please make sure the items are in their original packaging with
              all tags attached. To initiate a return, simply contact our
              customer support team, and they will guide you through the
              process.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Is it safe to shop on your website?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Absolutely! The security of your personal information is our top
              priority. Our website employs state-of-the-art encryption
              technology to ensure that all your data, including payment
              details, is protected and kept confidential. Additionally, we
              never store your credit card information on our servers, making
              your online transactions secure. You can shop with peace of mind
              knowing that your privacy and security are our utmost concern.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
