import { useState } from "react";
import Snowfall from "react-snowfall";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("cold");
  const [snow, setSnow] = useState(<Snowfall />);
  const [bgcolor, setBgcolor] = useState("rgb(32, 31, 31)");
  // (document.body.style = "background: rgb(32, 31, 31);")

  document.body.style = `background: ${bgcolor} `;
  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
    if (newCount >= 15) {
      setColor("hot");
      setSnow("");
      setBgcolor("rgb(255, 255, 125)");
    }
  };

  const decrement = () => {
    let newCount = count - 1;
    setCount(newCount);
    if (newCount < 15) {
      setColor("cold");
      setSnow(<Snowfall />);
      setBgcolor("rgb(32, 31, 31)");
    }
  };
  return (
    <>
      <div>
        <div className="container">
          <div className={`display ${color}`}>
            <h1>{count}°C</h1>
          </div>
          <div className="button-div">
            <button onClick={increment} className="button">
              +
            </button>
            <button onClick={decrement} className="button">
              -
            </button>
          </div>
        </div>
      </div>
      {snow}
    </>
  );
}

export default App;
