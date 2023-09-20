import { Box, Button, Paper, Typography } from "@mui/material";
import MyButton from "../components/ui/MyButton";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default function Testing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/#about", { state: { redirectedFromOtp: true } });
  };

  return (
    <Box>
      <Typography variant="h2" textAlign="center" p={6}>
        Testing
      </Typography>
      <Example />
      
      <MyButton onClick={handleClick}>testing</MyButton>
    </Box>
  );
}
