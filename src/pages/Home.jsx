import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import HomeBanner from "../images/home-banner-2.png";
import Products from "../components/Products";
import Footer from "../components/Footer";
import FlashSale from "../components/FlashSale";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [bannerImg, setBannerImg] = useState();

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    try {
      const response = await axios.get("http://localhost:6001/api/banners"); // public route
      setBannerImg(response.data);
    } catch (err) {
      console.error(
        "Failed to fetch banner:",
        err.response?.data?.message || err.message
      );
    }
  };

  return (
    <div className="HomePage">
      <div className="home-banner">
        {bannerImg ? <img src={bannerImg} alt="" /> : ""}
      </div>

      <div className="home-categories-container">
        <div
          className="home-category-card"
          onClick={() => navigate("/category/Fashion")}
        >
          <img
            src="https://th.bing.com/th/id/OIP.9ZbgvekGYWwmyaM3LRERKAAAAA?w=258&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
            alt=""
          />
          <h5>Fashion</h5>
        </div>

        <div
          className="home-category-card"
          onClick={() => navigate("/category/Electronics")}
        >
          <img
            src="https://th.bing.com/th/id/OIP.AW1uVkqcE4WjMRn_OjLPQAHaEJ?w=299&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
            alt=""
          />
          <h5>Electronics</h5>
        </div>

        <div
          className="home-category-card"
          onClick={() => navigate("/category/mobiles")}
        >
          <img
            src="data:image/webp;base64,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"
            alt=""
          />
          <h5>Mobiles</h5>
        </div>

        <div
          className="home-category-card"
          onClick={() => navigate("/category/Groceries")}
        >
          <img
            src="https://th.bing.com/th/id/OIP.LCiCK0bw0HwwGhmQOEY8xQHaE8?w=219&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
            alt=""
          />
          <h5>Groceries</h5>
        </div>
      </div>

      <div id="products-body"></div>
      <Products category="all" />

      <Footer />
    </div>
  );
};

export default Home;
