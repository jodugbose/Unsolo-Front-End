import { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Header from "../modules/buddy/Header";
import MyButton from "../ui/MyButton";

export default function Booking() {
  return (
    <Box p={4}>
      <Header
        title="Bookings"
        subtitle="Make bookings that suit your destination"
      >
        <MyButton>Reserve Booking</MyButton>
      </Header>
      <Box
        pt={2}
        borderBottom="1px solid #EAECF0"
        sx={{
          "& button": {
            textTransform: "capitalize",
            fontSize: "1rem",
            borderRadius: 0,
            py: 2,
            px: 3.5,
          },
        }}
      >
        {["flight", "hotel", "package"].map((link) => (
          <NavLink to={`/booking/${link}`} key={link}>
            {({ isActive }) => (
              <Button sx={isActive && { borderBottom: "1px solid" }}>
                {link}
              </Button>
            )}
          </NavLink>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
}
