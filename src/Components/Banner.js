import React from "react";
import "../Styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <section className="grade-title-container">
          <h4 className="grade-banner">GRADE</h4>
          <h2 className="grade-number">6</h2>
        </section>
        <section className="banner-title-container">
          <h1 className="banner-title">Grammar Resources</h1>
        </section>
      </div>
    </div>
  );
};

export default Banner;
