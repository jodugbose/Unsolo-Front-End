import {
  AccountCircleOutlined,
  ExploreOutlined,
  LabelOutlined,
  PaymentsOutlined,
  ReceiptLongOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";

function Item({ icon, name, value }) {
  return (
    <Stack direction="row" width="13rem" pb={1.5}>
      {icon}
      <Typography color="text.disabled" fontSize="80%">
        {name}
        <Typography component="span" ml={1} color="initial">
          {value}
        </Typography>
      </Typography>
    </Stack>
  );
}

export default function BuddyCard({ trip, index, name }) {
  const {
    aboutTheTrip,
    budget,
    country,
    journeyType,
    splitCost,
  } = trip


  return (
    <Stack
      direction="row"
      minWidth="50%"
      borderBottom="1px solid #EAECF0"
      flexGrow={1}
      py={4}
    >
      <Avatar
        alt="Travis"
        src="https://material-ui.com/static/images/avatar/3.jpg"
        sx={{ width: "6vw", height: "6vw", mx: 2, my: 1, ml: 1 }}
      />

      <Stack>
        <Stack direction="row" alignItems="center">
          <Typography fontWeight={500} fontSize="140%" width="13rem">
            {name}
          </Typography>
          <Stack direction="row" spacing={1}>
            <ExploreOutlined />
            <Typography fontSize="100%">{country}</Typography>
          </Stack>
        </Stack>

        <Typography width="25rem" color="text.disabled" fontSize="80%" py={1}>
          {aboutTheTrip}
        </Typography>

        <Stack direction="row" flexWrap="wrap" width="26rem">
          <Item
            icon={<LabelOutlined color="primary" sx={{ mr: 0.5 }} />}
            name="Type of Journey"
            value={`${journeyType}`}
          />
            <Item
              icon={<PaymentsOutlined color="primary" sx={{ mr: 0.5 }} />}
              name="Split cost"
              value={`${splitCost ? "Yes" : "No"}`}
            />
            <Item
              icon={<ReceiptLongOutlined color="primary" sx={{ mr: 0.5 }} />}
              name="Budget"
              value={`$${budget}`}
            />
        </Stack>
      </Stack>
    </Stack>
  );
}
