import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import * as bootstrap from "bootstrap";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./App.jsx";

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
