import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner_img from "./Images/Banner1.jpeg";
import header_img from "./Images/header.jpg";
import footer_img from "./Images/footer.jpg";
import Card from "./Card.tsx";
import CardArray from "./CardArray.tsx";

const SurveyPage = () => {
  return (
    <>
      <div className="header">
        <img
          src={header_img}
          alt="header"
          style={{
            width: "100%",
            objectFit: "cover",
            position: "top",
            top: "0",
            left: "0",
            zIndex: "-1", // Update the zIndex to -1 for the header image
          }}
        />
      </div>
      <div className="banner" style={{ position: "relative" }}>
        <img
          src={banner_img}
          alt="banner"
          style={{
            width: "100%",
            objectFit: "cover",
            position: "relative",
            zIndex: "1", // Update the zIndex to 1 for the banner image
          }}
        />
        <div
          className="banner-overlay"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "2", // Increase the zIndex to 2 for the overlay
          }}
        />
        <div
          className="banner-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: "3", // Increase the zIndex to 3 for the banner content
          }}
        >
          <h4>VIETNAM</h4>
          <h2>Hanoi</h2>
        </div>
      </div>
      <div className="container">
        <div className="card" style={{ padding: "1rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              Trip Planner
            </h5>
            <div className="card-text">
              <p>Insert the rest of the content here</p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="container">
        <CardArray />
        <br />
      </div>
      <div className="footer">
        <img
          src={footer_img}
          alt="footer"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};

export default SurveyPage;