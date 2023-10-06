import { NotificationsOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

export default function Topbar() {
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
            Welcome, Emmanuel
          </Typography>
          <Typography variant="subtitle2" color="text.disabled">
            Monday 10th Feb, 2023
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} mt={-1}>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <Typography fontWeight={600}>Nigeria</Typography>
          <Box py={0.5} px={1.5} border="1px solid" borderRadius="0.5rem">
            <Typography fontWeight={600}>Log out</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
