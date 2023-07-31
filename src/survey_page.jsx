import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "./Images/Banner1.jpeg";
import "./SurveyPage.css";
import star from "./Images/star.png";
import CardArray from "./CardArray.tsx";
import { ScriptComponent } from "./script";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getRes } from "./script";

function SurveyPage() {
  // initialising formik
  const [showCardArray, setShowCardArray] = React.useState(true);
  const [resetCards, setResetCards] = React.useState(false);
  const [cardValues, setCardValues] = React.useState([""]);

  var counter = 0;
  const formik = useFormik({
    initialValues: {
      tripDuration: null,
      hotelRecommendation: "",
      budget: "",
      adults: "",
      children: "",
      infants: "",
      purpose: "",
      medium: "",
      beaten_off_path: "",
      festivals: "",
      restrictions: "",
      requests: "",
    },
    // Form validation
    validationSchema: Yup.object({
      tripDuration: Yup.number()
        .positive("Please enter a positive number")
        .integer("Please enter an integer")
        .max(60, "Trip Duration cannot exceed a month")
        .required("Please enter the duration of your trip"),
      hotelRecommendation: Yup.string(),
      budget: Yup.number(),
      adults: Yup.number().max(100, "More than 100 Adults are not allowed"),
      children: Yup.number().max(100, "More than 100 Children are not allowed"),
      infants: Yup.number().max(100, "More than 100 Infants are not allowed"),
      purpose: Yup.string(),
      medium: Yup.string(),
      beaten_off_path: Yup.string(),
      festivals: Yup.string(),
      restrictions: Yup.string(),
      requests: Yup.string(),
    }),
    // Submit form

    onSubmit: (values) => {
      console.log(values);
      counter++;
      if (counter === 1) {
        setShowCardArray(false);
      } else if (counter > 1) {
        setShowCardArray(false);
        setResetCards(true);
        setCardValues([""]);
      }
      const fetchData = async () => {
        const res = await getRes(values);
        var cardRes = cardValues;
        cardRes.push(res);
        setCardValues(cardRes);
      };

      fetchData();
      formik.resetForm();
    },
  });
  const [inputDisabled, setInputDisabled] = useState(false);
  const [tripDuration, setTripDuration] = useState("");

  const handleTripDurationChange = (event) => {
    const value = event.target.value;
    setTripDuration(value);
    // setFirstQuestionAnswered(value.trim() !== "");
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!firstQuestionAnswered) {
  //     alert("Please answer the first question.");
  //     return;
  //   } else {
  //   }
  // };

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
              borderRadius: "25px",
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
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label style={{ color: "#00266B" }}>
                  1. How many days is your trip?{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <div style={{ paddingTop: "5px" }}>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Days"
                    id="tripDuration"
                    value={formik.values.tripDuration}
                    onChange={formik.handleChange}
                    required
                  />
                </div>
                <label
                  style={{
                    color: "red",
                    padding: 0,
                    marginLeft: "10px",
                    fontSize: "12px",
                  }}
                >
                  {formik.touched.tripDuration && formik.errors.tripDuration ? ( // added this block
                    <div>{formik.errors.tripDuration}</div>
                  ) : null}
                </label>
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
                      value="Yes"
                      onChange={formik.handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="hotelRecommendation"
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
                      value="No"
                      onChange={formik.handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="hotelRecommendation"
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
                    name="budget"
                    id="estimBudget"
                    value={formik.values.budget}
                    onChange={formik.handleChange}
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
                      id="adults"
                      value={formik.values.adults}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.adults && formik.errors.adults ? (
                    <div
                      style={{
                        color: "red",
                        marginTop: "70px",
                        marginLeft: "-230px",
                        marginRight: "10px",
                      }}
                    >
                      {formik.errors.adults}
                    </div>
                  ) : null}
                  <div style={{ marginRight: "10px" }}>
                    <label>Children:</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0"
                      id="children"
                      value={formik.values.children}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.children && formik.errors.children ? (
                    <div
                      style={{
                        color: "red",
                        marginTop: "70px",
                        marginLeft: "-230px",
                        marginRight: "10px",
                      }}
                    >
                      {formik.errors.children}
                    </div>
                  ) : null}
                  <div>
                    <label>Infants:</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0"
                      id="infants"
                      value={formik.values.infants}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.infants && formik.errors.infants ? (
                    <div
                      style={{
                        color: "red",
                        marginTop: "70px",
                        marginLeft: "-220px",
                      }}
                    >
                      {formik.errors.infants}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="form-group">
                <label style={{ color: "#00266B", paddingTop: "25px" }}>
                  5. What is the purpose of your visit?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="purpose"
                      id="purposeBusiness"
                      value="business"
                      onChange={formik.handleChange}
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
                      name="purpose"
                      id="purposeTourist"
                      value="tourist"
                      onChange={formik.handleChange}
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
                      name="purpose"
                      id="otherPurposeInput"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label style={{ color: "#00266B", paddingTop: "25px" }}>
                  6. What is your preferred transportation medium?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="medium"
                      id="transportPublic"
                      value="public"
                      onChange={formik.handleChange}
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
                      name="medium"
                      id="transportTaxis"
                      value="taxis"
                      onChange={formik.handleChange}
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
                      name="medium"
                      id="otherPurposeInput2"
                      onChange={formik.handleChange}
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
                  7. Are you open to exploring off-the-beaten-path destinations
                  and experiences suggested by the travel planning platform?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="beaten_off_path"
                      id="openVeryLikely"
                      value="Very Likely"
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="openLikely">
                      Very Likely
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="beaten_off_path"
                      id="openLikely"
                      value="Likely"
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="openLikely">
                      Likely
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="beaten_off_path"
                      id="openNeutral"
                      value="Neutral"
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="openNeutral">
                      Neutral
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="beaten_off_path"
                      id="openUnlikely"
                      value="Unlikely"
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="openUnlikely">
                      Unlikely
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="beaten_off_path"
                      id="openVeryUnlikely"
                      value="Very Unlikely"
                      onChange={formik.handleChange}
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
                      name="festivals"
                      id="participateVeryLikely"
                      value="Very Likely"
                      onChange={formik.handleChange}
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
                      name="festivals"
                      id="participateLikely"
                      value="Likely"
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="openLikely">
                      Likely
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="festivals"
                      id="participateNeutral"
                      value="Neutral"
                      onChange={formik.handleChange}
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
                      name="festivals"
                      id="participateUnlikely"
                      value="Unlikely"
                      onChange={formik.handleChange}
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
                      name="festivals"
                      id="participateVeryUnlikely"
                      value="Very Unlikely"
                      onChange={formik.handleChange}
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
                    id="restrictions"
                    placeholder="Enter your dietary restrictions or preferences"
                    value={formik.values.restrictions}
                    onChange={formik.handleChange}
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
                    id="requests"
                    rows="4"
                    placeholder="Enter your special requests or requirements"
                    value={formik.values.requests}
                    onChange={formik.handleChange}
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
