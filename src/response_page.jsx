import React from "react";
import banner_img from "./Images/Banner1.jpeg";
import header_img from "./Images/header.jpg";
import footer_img from "./Images/footer.jpg";
import CardArray from "./CardArray";

const ResponsePage = () => {
  return (
    <>
      <div className="header" style={{ position: "relative" }}>
        <img
          src={header_img}
          alt="header"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
            top: "0",
            left: "0",
            zIndex: "-1",
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
            zIndex: "1",
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
            backgroundColor: "black", // Singapore Airlines blue color
            opacity: "0.5", // Adjust the transparency as needed
            zIndex: "2",
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
            zIndex: "3",
          }}
        >
          <h4>VIETNAM</h4>
          <h2>Hanoi</h2>
        </div>
      </div>
      <div className="container">
        <br />
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

export default ResponsePage;
