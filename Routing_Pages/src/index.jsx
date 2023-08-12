import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./RoutingPages/home";
import About from "./RoutingPages/about";
import Education from "./RoutingPages/education";
import Skills from "./RoutingPages/skills";
import Contact from "./RoutingPages/contact";
import Nav from "./RoutingPages/navPage";
import FEndSkills from "./RoutingPages/frontend-skills";
import BEndSkills from "./RoutingPages/backend-skills";

function Main() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact-me" element={<Contact />}></Route>
          <Route path="/frontend-skills" element={<FEndSkills />}></Route>
          <Route path="/backend-skills" element={<BEndSkills />}></Route>
        </Routes>
      </div>
      <div>
        <h1>Welome To My Portfolio</h1>
        <h2>Example of Routers</h2>
      </div>
    </>
  );
}

const root_value = ReactDOM.createRoot(document.getElementById("root"));

root_value.render(
  <>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </>
);
