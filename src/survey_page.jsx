import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "./Images/Banner1.jpeg";
import "./SurveyPage.css";
import star from "./Images/star.png";
import CardArray from "./CardArray.tsx";
import { YourComponent } from "./YourComponent.jsx";
import getRes from "./script";

function SurveyPage() {
  const [tripDuration, setTripDuration] = useState("");
  const [firstQuestionAnswered, setFirstQuestionAnswered] = useState(false);

  const handleTripDurationChange = (event) => {
    const value = event.target.value;
    setTripDuration(value);
    setFirstQuestionAnswered(value.trim() !== "");
  };

  var counter = 0;
  const [showCardArray, setShowCardArray] = React.useState(true);
  const [resetCards, setResetCards] = React.useState(false);
  const [cardValues, setCardValues] = React.useState([""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstQuestionAnswered) {
      alert("Please answer the first question.");
      return;
    } else {
      counter++;
      if ((counter = 1)) {
        setShowCardArray(false);
      } else if (counter > 1) {
        setShowCardArray(false);
        setResetCards(true);
        setCardValues([""]);
      }
      const fetchData = async () => {
        const res = await getRes();
        var cardRes = cardValues;
        cardRes.push(res);
        setCardValues(cardRes);
      };

      fetchData();
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label style={{ color: "#00266B" }}>
                  1. How many days is your trip?{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <div style={{ paddingTop: "5px" }}>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="No. of Days"
                    id="q1input"
                    value={tripDuration}
                    onChange={handleTripDurationChange}
                    required
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
                    id="q3input"
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
                      type="number"
                      className="form-control"
                      placeholder="0"
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <label>Children:</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label>Infants:</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <YourComponent />

              <div className="form-group">
                <label
                  style={{
                    color: "#00266B",
                    paddingTop: "25px",
                  }}
                >
                  7. Are you open to exploring off-the-beaten-path destinations
                  and experiences suggested by the travel planning platform?
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
                    <label className="form-check-label" htmlFor="openLikely">
                      Very Likely
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="openExplore"
                      id="openLikely"
                      value="Likely"
                    />
                    <label className="form-check-label" htmlFor="openLikely">
                      Likely
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
                    <label className="form-check-label" htmlFor="openNeutral">
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
                    <label className="form-check-label" htmlFor="openUnlikely">
                      Unlikely
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="openExplore"
                      id="openVeryUnlikely"
                      value="unlikely"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="openVeryUnlikely"
                    >
                      Very Unlikely
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
                  8. How likely are you to participate in local events or
                  festivals when you visit a new destination?
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
                      name="openExplore"
                      id="openLikely"
                      value="Likely"
                    />
                    <label className="form-check-label" htmlFor="openLikely">
                      Likely
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
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="openExplore"
                      id="openVeryUnlikely"
                      value="Veryunlikely"
                    />
                    <label className="form-check-label" htmlFor="openUnlikely">
                      Very Unlikely
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
                  9. Do you have any specific dietary restrictions or
                  preferences?
                </label>
                <div style={{ paddingTop: "5px" }}>
                  <input
                    type="text"
                    className="form-control"
                    id="q9input"
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
                    id="q10input"
                    rows="4"
                    placeholder="Enter your special requests or requirements"
                  ></textarea>
                </div>
              </div>

              <div style={{ textAlign: "center", paddingTop: "30px" }}>
                <button
                  id="submitbtn"
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#00266B",
                    border: "none",
                    width: "150px",
                  }}
                  disabled={!firstQuestionAnswered}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div
            className="white-box-2"
            style={{
              position: "absolute",
              top: "calc(3cm + 1cm + 85rem)", // Adjust the top value as per your requirement
              left: "12.5%",
              width: "75%",
              backgroundColor: "#ffffff",
              padding: "20px",
              zIndex: 1,
              display: showCardArray ? "none" : "block",
              marginBottom: "50px",
            }}
          >
            <br />
            <CardArray
              disableSection={showCardArray}
              reset={resetCards}
              cardContents={cardValues}
            />
          </div>
        </div>

        <div
          className="Foot"
          style={{
            marginTop: showCardArray ? "90rem" : "95rem",
          }}
        ></div>
      </div>
    </>
  );
}

export default SurveyPage;
