import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //traffic light - 3 states: red (4000ms), yellow (500ms), green (3000ms)
  const [lights, setLights] = useState([true, false, false]);
  useEffect(() => {
    if (lights[0]) {
      setInterval(() => {
        setLights([false, true, false]);
      }, 4000);
    }
    if (lights[1]) {
      setInterval(() => {
        setLights([false, false, true]);
      }, 1000);
    }
    if (lights[2]) {
      setInterval(() => {
        setLights([true, false, false]);
      }, 3000);
    }
  }, [lights]);
  return (
    <>
      <div className="lights-wrapper">
        <div className={`${lights[0] ? "red" : "black"}`}>red</div>
        <div className={`${lights[1] ? "yellow" : "black"}`}>yellow</div>
        <div className={`${lights[2] ? "green" : "black"}`}>green</div>
      </div>
    </>
  );
}

export default App;
