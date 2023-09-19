import { Box, Divider, Stack, Typography } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import MyButton from "../../ui/MyButton";
import SignInModal from "../signin/SignInModal";
import SignUpDialog from "../signup/SignUpDialog";

export default function FooterBottom() {
  return (
    <Box id="contact" p={4} px="8" textTransform={"uppercase"}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4" color="text.secondary">
          Want to
        </Typography>
        <SignUpDialog>
          <MyButton variant="outlined">Sign up</MyButton>
        </SignUpDialog>
      </Stack>
      <Typography
        width="100%"
        variant="h2"
        fontSize="5.3vw"
        textAlign="justify"
        fontWeight="400"
      >
        travel the world with friends
      </Typography>
      <Divider />
      <Stack direction={"row"} justifyContent={"space-between"} py={4}>
        <Typography>tRAVBUD</Typography>
        <Stack direction={"row"} spacing={2}>
          <Twitter />
          <FacebookRounded />
          <LinkedIn />
          <Instagram />
        </Stack>
        <Typography> LAgos, Nigeria 09:00</Typography>
      </Stack>
    </Box>
  );
}
