import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <CssBaseline />
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          bodyClassName="toastBody"
        />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
