import React from "react";
import { createRoot } from "react-dom"; // Utiliza createRoot en lugar de unstable_createRoot
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store.js";

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
