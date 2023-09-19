import {
  AppBar,
  Avatar,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MyButton from "../../ui/MyButton";
import { Link } from "react-router-dom";
import { useState } from "react";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Nav() {
  const [navColor, setNavColor] = useState(true);
  const changeNavColor = () => {
    if (window.scrollY > 600) {
      setNavColor(false);
    } else {
      setNavColor(true);
    }
  };

  window.addEventListener("scroll", changeNavColor);
  return (
    <HideOnScroll>
      <AppBar
        sx={{
          bgcolor: `${navColor ? "#1c1c1c" : "rgba(0, 0, 0, 0.6)"}`,
          backdropFilter: "blur(4px)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            transition: "0.5s",
            "&:hover": { bgcolor: "#000000" },
          }}
        >
          <Stack direction="row" alignItems="center">
            <IconButton>
              <Avatar
                sx={{ borderRadius: 0, width: 20, height: 20 }}
                src="/unsolo-icon.png"
              />
            </IconButton>
            <Typography color="primary" fontWeight={700}>
              UNSOLO
            </Typography>
          </Stack>
          <Stack direction="row">
            <MyButton variant="text" fontWeight={700}>
              Home
            </MyButton>

            <MyButton href="/#explore" variant="text" fontWeight={700}>
              Explore
            </MyButton>
            <MyButton href="/#about" variant="text" fontWeight={700}>
              About
            </MyButton>
            <MyButton href="/#contact" variant="text" fontWeight={700}>
              Contact
            </MyButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
