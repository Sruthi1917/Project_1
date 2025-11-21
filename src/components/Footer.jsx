import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <h4>
        @Online Shop - India's ultimate One-stop Online Shopping Destination....
      </h4>
      <div className="footer-body">
        <ul>
          <li>Home </li>
          <li>Categories</li>
          <li>All products</li>
        </ul>

        <ul>
          <li>Cart</li>
          <li>Profile</li>
          <li>Orders</li>
        </ul>

        <ul>
          <li>Electronics</li>
          <li>Mobiles</li>
          <li>Laptops</li>
        </ul>

        <ul>
          <li>Fashion</li>
          <li>Grocery</li>
          <li>Sports</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>@ online_shop.com - All rights reserved</p>
        <span>
          If any Queries
          <a href="mailto:onlineshop@gamil.com"> 📧online_shop@gmail.in</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
