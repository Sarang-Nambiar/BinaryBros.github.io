import React, { useState } from "react";

export function YourComponent2() {
  const [tripDuration, setTripDuration] = useState("");

  const handleTripDurationChange = (event) => {
    setTripDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate if the trip duration is filled
    if (tripDuration.trim() === "") {
      alert("Please enter the number of days for your trip.");
      return;
    }

    // Perform form submission logic
    // ...

    // Reset the form
    setTripDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label style={{ color: "#00266B" }}>
          1. How many days is your trip? <span style={{ color: "red" }}>*</span>
        </label>
        <div style={{ paddingTop: "5px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="No. of Days"
            value={tripDuration}
            onChange={handleTripDurationChange}
            required
          />
        </div>
      </div>
      
    </form>
  );
}
