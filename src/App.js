import "./App.css";
import Card from "./card.js";
import Rating from "./rating.js";
import { useState } from "react";

function App() {
  const [showrating, setshowrating] = useState(false);
  const [rating, setrating] = useState(null);

  return (
    <div className="app">
      {showrating ? (
        <Rating rating={rating} />
      ) : (
        <Card
          rating={rating}
          setrating={setrating}
          setshowrating={setshowrating}
        />
      )}
    </div>
  );
}

export default App;
