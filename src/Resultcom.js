import React from "react";

function Result() {
  return (
    <div className="resultcon">
      <div className="resultelement">
        Your Result <br />
        <div className="marks">
          <span> 76</span> <br />
          of 100
          <br />
        </div>
        <span className="greatclass">Great</span>
        <br />
        <p className="highsc">
          {" "}
          You scored higher than 65% of the people who have taken these tests.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Result;
