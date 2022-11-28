import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import CV from "./Pages/CV";
import Projets from "./Pages/Projets";
import Contact from "./Pages/Contact";
import SlideMenu from "./Components/SlideMenu/SlideMenu";
import { Navigate } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <SlideMenu />
      <Header></Header>
      <Routes>
        <Route path="/Portfolio_React" element={<Home />}></Route>
        <Route path="/Portfolio_React/Projets" element={<Projets />}></Route>
        <Route path="/Portfolio_React/CV" element={<CV />}></Route>
        <Route path="/Portfolio_React/Contact" element={<Contact />}></Route>
        <Route path="/Portfolio_React/*" element={<Navigate to="/Portfolio_React" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
