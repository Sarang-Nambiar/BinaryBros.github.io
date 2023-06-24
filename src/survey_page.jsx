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
          style={{
            minHeight: "80px",
          }}
        ></div>

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
                    type="radio"
                    name="hotelRecommendation"
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
                    type="radio"
                    name="hotelRecommendation"
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
                    type="radio"
                    name="visitPurpose"
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
                    type="radio"
                    name="visitPurpose"
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
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="visitPurpose"
                    id="purposeTourist"
                    value="tourist"
                  />
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
                    type="radio"
                    name="transportMedium"
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
                    type="radio"
                    name="transportMedium"
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
                    type="radio"
                    name="openExplore"
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
                    type="radio"
                    name="openExplore"
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
                    type="radio"
                    name="openExplore"
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
                    type="radio"
                    name="participateEvents"
                    id="participateLikely"
                    value="likely"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="participateLikely"
                  >
                    Very Likely
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="participateEvents"
                    id="participateNeutral"
                    value="neutral"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="participateNeutral"
                  >
                    Neutral
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="participateEvents"
                    id="participateUnlikely"
                    value="unlikely"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="participateUnlikely"
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
                9. Do you have any specific dietary restrictions or preferences?
              </label>
              <div style={{ paddingTop: "5px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your dietary restrictions or preferences"
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
                10. Any other special requests or requirements?
              </label>
              <div style={{ paddingTop: "5px" }}>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter your special requests or requirements"
                ></textarea>
              </div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "30px" }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#00266B",
                  border: "none",
                  width: "150px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            minHeight: "50px",
          }}
        ></div>
        <div className="Foot"></div>
      </div>
      
    </>
  );
};

export default SurveyPage;
