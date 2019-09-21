import React from "react";
import "./App.css";
import Sample from "./Sample";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Sample></Sample>
    </div>
  );
}

export default App;
