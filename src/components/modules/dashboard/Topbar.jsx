import { NotificationsOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import useTrip from "../../../hooks/useTrip";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const { displayName } = useTrip()
  const navigate = useNavigate()

  const getMonth = (monthNum) => {
    switch (monthNum) {
      case 1: return 'January'
      case 2: return 'February'
      case 3: return 'March'
      case 4: return 'April'
      case 5: return 'May'
      case 6: return 'June'
      case 7: return 'July'
      case 8: return 'August'
      case 9: return 'September'
      case 10: return 'October'
      case 11: return 'November'
      case 12: return 'December'
    }
  }
  function formatDate(date) {
    return `${padTo2Digits(date.getDate())}
      ${getMonth(date.getMonth() + 1)}
      ${date.getFullYear()}`
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("travellerId");
    localStorage.removeItem("token");
    navigate("/")
  }
  return (
    <Box p={2} px={4} borderBottom="1px solid #EAECF0">
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          divider={
            <Divider orientation="vertical" color="text.disabled" flexItem />
          }
          spacing={2}
        >
          <Typography variant="subtitle2" color="text.disabled">
            Welcome, {displayName}
          </Typography>
          <Typography variant="subtitle2" color="text.disabled">
            { formatDate(new Date()) }
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} mt={-1}>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <Typography fontWeight={600}>Nigeria</Typography>
          <Box py={0.5} px={1.5} border="1px solid" borderRadius="0.5rem">
            <Typography fontWeight={600} onClick={handleLogout}>Log out</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
