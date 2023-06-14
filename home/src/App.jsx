import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Button/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
