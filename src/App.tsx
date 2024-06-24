import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //traffic light - 3 states: red (4000ms), yellow (500ms), green (3000ms)
  const [lights, setLights] = useState([true, false, false]);
  useEffect(() => {
    if (lights[0]) {
      setTimeout(() => {
        setLights([false, true, false]);
      }, 2500);
    }
    if (lights[1]) {
      setTimeout(() => {
        setLights([false, false, true]);
      }, 1200);
    }
    if (lights[2]) {
      setTimeout(() => {
        setLights([true, false, false]);
      }, 6000);
    }
  }, [lights]);
  return (
    <>
      <div className="lights-wrapper">
        <div className={`${lights[0] ? "red" : "black"}`}></div>
        <div className={`${lights[1] ? "yellow" : "black"}`}></div>
        <div className={`${lights[2] ? "green" : "black"}`}></div>
      </div>
    </>
  );
}

export default App;
