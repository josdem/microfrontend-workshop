import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
