import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

import "./index.css";

import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <div className="my-10">
      Home Page Content
    </div>
    <div>Language: JavaScript</div>
    <Button/>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
