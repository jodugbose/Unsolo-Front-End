import { Box, Container, Typography } from "@mui/material";

export default function Destinations() {
  return (
    <Box>
      <Container sx={{ textAlign: "center", py: 12, bgcolor: "#fcf8f7" }}>
        <Typography variant="h2">Popular</Typography>
        <Typography variant="h2">Destinations</Typography>
        <Typography
          variant="h6"
          color="text.disabled"
          textTransform="uppercase"
        >
          Meet travelers around the world.
        </Typography>
        <Box p={4}>
          <img src={"/frame4.png"} width="100%" />
        </Box>
      </Container>
    </Box>
  );
}
