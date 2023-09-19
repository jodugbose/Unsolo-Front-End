import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Footer from "../components/modules/landing/Footer";
import Destinations from "../components/modules/landing/Destinations";
import Continents from "../components/modules/landing/Continents";
import About from "../components/modules/landing/About";
import Explore from "../components/modules/landing/Explore";
import Travel from "../components/modules/landing/Travel";
import Home from "../components/modules/landing/Home";
import Nav from "../components/modules/landing/Nav";
import "./landing.css";
import { useLocation } from "react-router-dom";

export default function Landing() {
  // const { state } = useLocation();

  // useEffect()
  // console.log(state);
  return (
    <>
      <Box>
        <Nav yes={true} />
        <Home />
        <Travel />
        <Explore />
        <About />
        <Continents />
        <Destinations />
        <Footer />
      </Box>
    </>
  );
}
