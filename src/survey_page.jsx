import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "./Images/Banner1.jpeg";
import "./SurveyPage.css";
import star from "./Images/star.png";
import header from "./Images/header.jpg";
import footer from "./Images/footer.jpg";

const SurveyPage = () => {
  return (
    <>
      <div className="Container">
        
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
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      position: "relative",
                      top: "4px",
                      left: "-2px",
                      marginRight: "5px",
                    }}
                  ></span>
                  <span>Add to favourites</span>
                  <span style={{ display: "none" }}>Added to favourites</span>
                </span>
              </div>
            </div>
          </center>
          <div
            className="white-box"
            style={{
              position: "absolute",
              top: "calc(100% - 3cm)",
              left: "12.5%",
              width: "75%",
              backgroundColor: "#ffffff",
              padding: "20px",
              zIndex: 1,
            }}
          >
            <h2
              style={{
                color: "#00266B",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Plan your Trip!
            </h2>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                }}
              >
                1. How many days is your trip?
              </label>
              <div style={{ paddingTop: "5px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="No. of Days"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                2. Do you need hotel recommendations?
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="hotelRecommendationYes"
                    value="yes"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="hotelRecommendationYes"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="hotelRecommendationNo"
                    value="no"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="hotelRecommendationNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                3. How much is your estimated budget?
              </label>
              <div style={{ paddingTop: "5px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SGD"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                4. How many individuals are you traveling with?
              </label>
              <div style={{ display: "flex", paddingTop: "5px" }}>
                <div style={{ marginRight: "10px" }}>
                  <label>Adults:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                  />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <label>Children:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label>Infants:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                5. What is the purpose of your visit?
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="purposeBusiness"
                    value="business"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="purposeBusiness"
                  >
                    Business
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="purposeTourist"
                    value="tourist"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="purposeTourist"
                  >
                    Tourist
                  </label>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Other"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                6. What is your preferred transportation medium?
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="transportPublic"
                    value="public"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="transportPublic"
                  >
                    Public Transport
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="transportTaxis"
                    value="taxis"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="transportTaxis"
                  >
                    Taxis
                  </label>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Other"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                7. Are you open to exploring off-the-beaten-path destinations and experiences suggested by the travel planning platform?
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="openLikely"
                    value="likely"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="openLikely"
                  >
                    Very Likely
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="openNeutral"
                    value="neutral"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="openNeutral"
                  >
                    Neutral
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="openUnlikely"
                    value="unlikely"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="openUnlikely"
                  >
                    Unlikely
                  </label>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Other"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                8. How likely are you to participate in local events or festivals when you visit a new destination?
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="eventLikely"
                    value="likely"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="eventLikely"
                  >
                    Very Likely
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="eventNeutral"
                    value="neutral"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="eventNeutral"
                  >
                    Neutral
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="eventUnlikely"
                    value="unlikely"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="eventUnlikely"
                  >
                    Unlikely
                  </label>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Other"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                9. Are there any locations that you would prefer to visit on your trip?
              </label>
              <div>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter your preferred locations"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#00266B",
                  paddingTop: "25px",
                }}
              >
                10. Do you have any other comments?
              </label>
              <div>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter your comments"
                ></textarea>
              </div>
            </div>
            <br />
          <center>
            <button
              className="btn btn-primary"
              style={{
                backgroundColor: "#00266B",
                color: "white",
                borderRadius: "3px",
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              GENERATE
            </button>
          </center>
          <br />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${footer})`,
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            height: "1100px",
            marginTop: "calc(100% - 200px)", // Adjust this value as needed
          }}
        ></div>
      </div>


    </>
  );
};

export default SurveyPage;
