import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../modules/buddy/Header";
import MyButton from "../ui/MyButton";

export default function Booking() {
  const navigate = useNavigate();
  const [value, setValue] = useState("flight");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box p={4}>
      <Header
        title="Bookings"
        subtitle="Make bookings that suit your destination"
      >
        <MyButton>Reserve Booking</MyButton>
      </Header>
      <Box pt={2} borderBottom="1px solid #EAECF0">
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ "& button": { textTransform: "capitalize", fontSize: "1rem" } }}
        >
          <Tab
            value="flight"
            label="Flight Bookings"
            onClick={() => navigate("flight")}
          />

          <Tab
            value="hotel"
            label="Hotel Bookings"
            onClick={() => navigate("hotel")}
          />
          <Tab value="packages" label="Packages" />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
}
