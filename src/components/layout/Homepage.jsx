import {
  ChatOutlined,
  GridView,
  GroupAddOutlined,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  LibraryAddCheckOutlined,
  MapOutlined,
  MapsUgcOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Topbar from "../modules/dashboard/Topbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Homepage() {
  const [open, setOpen] = useState(true);
  const drawerWidth = open ? "13rem" : "2.88rem";
  return (
    <Box position="relative">
      <Box
        position="fixed"
        width={drawerWidth}
        p={1}
        overflow="hidden"
        sx={{ transition: "0.5s" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={1}
          ml={open ? 0 : -2}
          sx={{ transition: "0.5s" }}
        >
          <Link to="/" style={{textDecoration: 'none'}}>
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ transitionDuration: "1s" }}
              display={open ? "" : "none"}
            >
              <Box width="1.6rem">
                <img alt="" width="100%" src="/unsolo-icon.svg" />
              </Box>

              <Typography fontWeight={700} color="primary">
                UNSOLO
              </Typography>
            </Stack>
          </Link>
          <IconButton color="primary" onClick={() => setOpen((prev) => !prev)}>
            <Avatar
              sx={{
                bgcolor: "rgba(243, 172, 84, 0.1)",
                width: "2rem",
                height: "2rem",
              }}
            >
              {open ? (
                <KeyboardDoubleArrowLeft color="primary" />
              ) : (
                <KeyboardDoubleArrowRight color="primary" />
              )}
            </Avatar>
          </IconButton>
        </Stack>

        {myRoutes.map(({ link, icon }) => (
          <NavLink to={`/homepage/${link}`} key={link}>
            {({ isActive }) => (
              <Button sx={{ p: 1, px: 0.5 }}>
                <Stack
                  width="11.5rem"
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <IconButton
                    component="div"
                    color={isActive ? "primary" : ""}
                    size="small"
                  >
                    {icon}
                  </IconButton>
                  <Typography
                    fontWeight={700}
                    variant="button"
                    textTransform="capitalize"
                    color={isActive ? "primary" : "#000"}
                  >
                    {link}
                  </Typography>
                </Stack>
              </Button>
            )}
          </NavLink>
        ))}
      </Box>
      <Box
        ml={drawerWidth}
        sx={{ borderLeft: "1px solid #EAECF0", transition: "0.5s" }}
      >
        <Topbar />
        {/* <Box height="50rem">outlet</Box> */}
        <Outlet />
      </Box>
    </Box>
  );
}
const myRoutes = [
  { link: "dashboard", icon: <GridView sx={{ fontSize: 16 }} /> },
  { link: "buddy", icon: <PeopleAltOutlined sx={{ fontSize: 16 }} /> },
  { link: "Trip", icon: <MapOutlined sx={{ fontSize: 16 }} /> },
  { link: "Invites", icon: <GroupAddOutlined sx={{ fontSize: 16 }} /> },
  { link: "Booking", icon: <LibraryAddCheckOutlined sx={{ fontSize: 16 }} /> },
  { link: "Chats", icon: <MapsUgcOutlined sx={{ fontSize: 16 }} /> },
  { link: "Broadcasts", icon: <ChatOutlined sx={{ fontSize: 16 }} /> },
];
