import React from "react";
import ReactDOM from "react-dom/client";

import MyCv from "./My-CV/myCV";
import { StrictMode } from "react";


const root_value = ReactDOM.createRoot(document.getElementById("root"));

root_value.render(
  <>
    <StrictMode>
      <MyCv name="Kashif Hussain"/>
    </StrictMode>
  </>
);
