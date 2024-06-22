import { useState } from "react";
import "./App.css";

function App() {
  //traffic light - 3 states: red (4000ms), yellow (500ms), green (3000ms)
  const [lights, setLights] = useState([true, false, false]);
  return (
    <>
      <div className="lights-wrapper">
        <div className="red">{}</div>
        <div className="yellow">{}</div>
        <div className="red">{}</div>
      </div>
    </>
  );
}

export default App;
