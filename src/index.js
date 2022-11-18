import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import CV from "./Pages/CV";
import Projets from "./Pages/Projets";
import SlideMenu from "./Components/SlideMenu/SlideMenu";
import WebFont from "webfontloader";
import "./index.css";

WebFont.load({
  google: {
    families: ["Montserrat", "sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Projets" element={<Projets />}></Route>
        <Route path="/CV" element={<CV />}></Route>
        {/* <Route path="/Contact" element={<Contact />}></Route> */}
      </Routes>
      <SlideMenu />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
