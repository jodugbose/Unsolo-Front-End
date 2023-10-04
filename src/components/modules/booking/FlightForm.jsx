import { ConnectingAirports, Person } from "@mui/icons-material";
import { Box, MenuItem, Stack, TextField } from "@mui/material";
import MyButton from "../../ui/MyButton";

export default function FlightForm() {
  return (
    <Box bgcolor="#101828" borderRadius="0.5rem" p={3}>
      <Stack direction="row" color="#fff">
        <Stack direction="row">
          <ConnectingAirports />
          <TextField
            // fullWidth
            select
            size="small"
            required
            // label="Gender"
            name="gender"
            // value={userData.gender}
            // onChange={handleChange}
          >
            <MenuItem value="round">Round Trip</MenuItem>
            <MenuItem value="one">One way</MenuItem>
          </TextField>
        </Stack>
        <Stack direction="row">
          <Person />
          <TextField
            // fullWidth
            select
            size="small"
            required
            // label="Gender"
            name="gender"
            // value={userData.gender}
            // onChange={handleChange}
          >
            <MenuItem value="round">Round Trip</MenuItem>
            <MenuItem value="one">One way</MenuItem>
          </TextField>
        </Stack>
        <TextField
          // fullWidth
          select
          size="small"
          required
          // label="Gender"
          name="gender"
          // value={userData.gender}
          // onChange={handleChange}
        >
          <MenuItem value="round">Round Trip</MenuItem>
          <MenuItem value="one">One way</MenuItem>
        </TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack direction="row" width="50%">
          <Stack
            direction="row"
            width="50%"
            height="4rem"
            borderRadius="1rem"
            bgcolor="#fff"
          ></Stack>
          <Stack
            direction="row"
            width="50%"
            bgcolor="#fff"
            borderRadius="1rem"
          ></Stack>
        </Stack>
        <Stack direction="row" width="50%" spacing={2}>
          <Stack
            direction="row"
            width="32%"
            bgcolor="#fff"
            borderRadius="1rem"
          ></Stack>
          <Stack
            direction="row"
            width="32%"
            bgcolor="#fff"
            borderRadius="1rem"
          ></Stack>
          <MyButton color="#fff">search flights</MyButton>
        </Stack>
      </Stack>
    </Box>
  );
}
