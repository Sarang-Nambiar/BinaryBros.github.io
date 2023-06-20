import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "./Images/Banner1.jpeg";
import "./SurveyPage.css";
import star from "./Images/star.jpg";
import header from "./Images/header.jpg";
import footer from "./Images/footer.jpg";

const SurveyPage = () => {
  return (
    <>
      <div style={{
        backgroundImage: `url(${header})`,
        backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        position: "relative",
          height: "80px",

      }}>

      </div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: "top center",
          height: "420px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          marginTop: "-1px",
        }}
      >
        <div className="overlay"></div>
        <center>
          <div className="masthead-banner__content">
            <span className="masthead-banner__content-country">Vietnam</span>
            <div className="masthead-banner__content-dash"></div>
            <h1 className="masthead-banner__content-capital">Hanoi</h1>
            <div className="favouriteCityHAN">
              <span className="masthead-banner__content-favourites">
                <span
                  className="icon-star-grey"
                  style={{
                    backgroundImage: `url(${star})`,
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    position: 'relative',
                    top: '-2px',
                    marginRight: '5px',
                  }}
                ></span>
                <span>Add to favourites</span>
                <span style={{ display: "none" }}>Added to favourites</span>
              </span>
            </div>
          </div>
        </center>
      </div>
      <br /><br/><br/><br/><br /><br/><br /><br/>
      <div className="TileContainer"></div>

      <div style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        position: "relative",
          height: "1100px",

      }}></div>
      <br /><br />
    </>
  );
};

export default SurveyPage;


