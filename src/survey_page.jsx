import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SurveyPage = () => {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `./Images/Banner1.jpeg`,
          backgroundPosition: "top center",
          height: "420px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          marginTop: "-1px",
        }}
      >
        <center>
          <h4>VIETNAM</h4>
          <br />
          <h2>Hanoi</h2>
        </center>
      </div>
      <div className="TileContainer"></div>
    </>
  );
};

export default SurveyPage;
