import { useEffect } from 'react'
import { Box, Stack } from "@mui/material";
import Header from "../components/modules/buddy/Header";
import BuddyCard from "../components/modules/buddy/BuddyCard";
import BuddyModal from "../components/modules/buddy/BuddyModal";
import MyButton from "../components/ui/MyButton";
import useTrip from "../hooks/useTrip";

export default function Buddy() {
  const { buddies } = useTrip()

  return (
    <Box p={4}>
      <Header title="Buddy" subtitle="Link up with buddies around you">
        <BuddyModal
          title="Find A Buddy"
          subtitle="Find a travel buddy that suits you."
          url="http://localhost:8080/api/trip/match"
          action="search"
          isTrip={false}
        >
          <MyButton>Find A Buddy</MyButton>
        </BuddyModal>
      </Header>
      <Stack direction="row" flexWrap="wrap">
      {
          buddies?.filter(buddy => buddy.buddyId != localStorage.getItem('travellerId')).map((buddy, index) => {
            const name = buddy?.buddyName
            return (
              <BuddyCard trip={buddy} key={index} name={name}/>
            )
          })
        }
      </Stack>
    </Box>
  );
}
