import React from "react";
import ReactDOM from "react-dom/client";

import Form from "./Manage_statework/manage_states";
import { StrictMode } from "react";


const root_value = ReactDOM.createRoot(document.getElementById("root"));

root_value.render(
  <>
    <StrictMode>
      <Form/>
    </StrictMode>
  </>
);
