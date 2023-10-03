import { Box, Stack } from "@mui/material";
import Header from "../components/modules/buddy/Header";
import ReCard from "../components/modules/booking/FlightRemCard";
import Slider from "react-slick";
import "../components/modules/booking/slick.css";
import FlightForm from "../components/modules/booking/FlightForm";

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
};
export default function Flight() {
  return (
    <>
      <Box py={5} pr={2}>
        <FlightForm />
      </Box>
      <Header
        title="Trending Flight Deals"
        subtitle="Make bookings that suit your destination"
      />
      <Box overflow="hidden" height="27rem">
        <Slider {...settings}>
          <ReCard />
          <ReCard />
          <ReCard />
          <ReCard />
        </Slider>
      </Box>
    </>
  );
}
