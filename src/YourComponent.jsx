import React, { useState } from "react";
export function YourComponent() {
  
  const [visitPurpose, setVisitPurpose] = useState("");
  const [otherPurpose, setOtherPurpose] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [transportMedium, setTransportMedium] = useState("");
  const [otherTransportMedium, setOtherTransportMedium] = useState("");
  const [transportInputDisabled, setTransportInputDisabled] = useState(false);

  const handlePurposeChange = (event) => {
    const selectedPurpose = event.target.value;
    if (selectedPurpose === visitPurpose) {
      // Deselect the radio button if it was already selected
      setVisitPurpose("");
      setInputDisabled(false);
      setOtherPurpose("");
    } else {
      setVisitPurpose(selectedPurpose);
      setInputDisabled(true);
      setOtherPurpose("");
    }
  };

  const handleOtherPurposeChange = (event) => {
    setOtherPurpose(event.target.value);
  };

  const handleTransportMediumChange = (event) => {
    const selectedTransportMedium = event.target.value;
    if (selectedTransportMedium === transportMedium) {
      // Deselect the radio button if it was already selected
      setTransportMedium("");
      setTransportInputDisabled(false);
      setOtherTransportMedium("");
    } else {
      setTransportMedium(selectedTransportMedium);
      setTransportInputDisabled(true);
      setOtherTransportMedium("");
    }
  };

  const handleOtherTransportMediumChange = (event) => {
    setOtherTransportMedium(event.target.value);
  };

  const deselectPurposeRadioButton = () => {
    const radioButton = document.querySelector('input[name="visitPurpose"]:checked');
    if (radioButton) {
      radioButton.checked = false;
      setVisitPurpose("");
      setInputDisabled(false);
      setOtherPurpose("");
    }
  };

  const deselectTransportMediumRadioButton = () => {
    const radioButton = document.querySelector('input[name="transportMedium"]:checked');
    if (radioButton) {
      radioButton.checked = false;
      setTransportMedium("");
      setTransportInputDisabled(false);
      setOtherTransportMedium("");
    }
  };

  return (
    <div>
      <div className="form-group">
        <label style={{ color: "#00266B", paddingTop: "25px" }}>
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
              checked={visitPurpose === "business"}
              onChange={handlePurposeChange}
              onClick={deselectPurposeRadioButton}
            />
            <label className="form-check-label" htmlFor="purposeBusiness">
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
              checked={visitPurpose === "tourist"}
              onChange={handlePurposeChange}
              onClick={deselectPurposeRadioButton}
            />
            <label className="form-check-label" htmlFor="purposeTourist">
              Tourist
            </label>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Other"
              disabled={inputDisabled}
              value={otherPurpose}
              onChange={handleOtherPurposeChange}
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
              name="transportMedium"
              id="transportPublic"
              value="public"
              checked={transportMedium === "public"}
              onChange={handleTransportMediumChange}
              onClick={deselectTransportMediumRadioButton}
            />
            <label className="form-check-label" htmlFor="transportPublic">
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
              checked={transportMedium === "taxis"}
              onChange={handleTransportMediumChange}
              onClick={deselectTransportMediumRadioButton}
            />
            <label className="form-check-label" htmlFor="transportTaxis">
              Taxis
            </label>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Other"
              disabled={transportInputDisabled}
              value={otherTransportMedium}
              onChange={handleOtherTransportMediumChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}