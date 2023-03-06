import React from "react";
import "./rating.css";

function Rating({ rating }) {
  return (
    <>
      <div className="thanks">
        <img src={require("./illustration-thank-you.svg").default}></img>
        <h3>
          You selected <span>{rating}</span> out of 5
        </h3>
        <h4>Thank you!</h4>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
}

export default Rating;
