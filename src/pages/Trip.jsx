import { Box, Stack } from "@mui/material";
import Header from "../components/modules/buddy/Header";
import BuddyCard from "../components/modules/buddy/BuddyCard";
import TripModal from "../components/modules/trip/TripModal";
import MyButton from "../components/ui/MyButton";
import useTrip from "../hooks/useTrip";

export default function Trip() {
  const { trips } = useTrip()
  return (
    <Box p={4}>
      <Header
        title="Trips"
        subtitle="Check for popular destinations that interests you."
      >
        <TripModal
          title="Create A Trip"
          subtitle="Invite fellow travellers that share your interests"
          url="http://localhost:8080/api/trip"
          action='create trip'
        >
          <MyButton>Book A Trip</MyButton>
        </TripModal>
      </Header>
      <Stack direction="row" flexWrap="wrap">
        {
          trips?.map((trip, index) => {
            const name = localStorage.getItem("name")
            return (
              <BuddyCard trip={trip} key={index} name={name}/>
            )
          })
        }
      </Stack>
    </Box>
  );
}
