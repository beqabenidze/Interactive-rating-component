import "./card.css";
import { useState } from "react";

const Card = ({ rating, setrating, setshowrating }) => {
  const [activeratings, setactiveratings] = useState({
    onestar: false,
    twostar: false,
    threestar: false,
    fourstar: false,
    fivestar: false,
  });

  const handleSubmit = () => {
    if (rating) {
      setshowrating(true);
    }
  };

  return (
    <>
      <div className="main">
        <div className="star">
          <img src={require("./icon-star.svg").default}></img>
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="nums">
          <h2
            className={activeratings.onestar ? "active" : ""}
            onClick={() => {
              setactiveratings({
                onestar: true,
                twostar: false,
                threestar: false,
                fourstar: false,
                fivestar: false,
              });
              setrating(1);
            }}
          >
            1
          </h2>
          <h2
            className={activeratings.twostar ? "active" : ""}
            onClick={() => {
              setactiveratings({
                onestar: false,
                twostar: true,
                threestar: false,
                fourstar: false,
                fivestar: false,
              });
              setrating(2);
            }}
          >
            2
          </h2>
          <h2
            className={activeratings.threestar ? "active" : ""}
            onClick={() => {
              setactiveratings({
                onestar: false,
                twostar: false,
                threestar: true,
                fourstar: false,
                fivestar: false,
              });
              setrating(3);
            }}
          >
            3
          </h2>
          <h2
            className={activeratings.fourstar ? "active" : ""}
            onClick={() => {
              setactiveratings({
                onestar: false,
                twostar: false,
                threestar: false,
                fourstar: true,
                fivestar: false,
              });
              setrating(4);
            }}
          >
            4
          </h2>
          <h2
            className={activeratings.fivestar ? "active" : ""}
            onClick={() => {
              setactiveratings({
                onestar: false,
                twostar: false,
                threestar: false,
                fourstar: false,
                fivestar: true,
              });
              setrating(5);
            }}
          >
            5
          </h2>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Card;
