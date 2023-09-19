import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import * as bootstrap from "bootstrap";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#F3AC54",
    },
    // textColors: {
    //   main: #FCF8F7
    // }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
