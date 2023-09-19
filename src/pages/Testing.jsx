import { Box, Typography } from "@mui/material";
import MyButton from "../components/ui/MyButton";
import axios from "axios";

export default function Testing() {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/post"
      );
      console.log(response);
      const fetchedData = await response.data;
      console.log(fetchedData);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  };

  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      console.log(response);
      const fetchedData = await response.data;
      console.log(fetchedData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const url = "/posts";
  const data = {
    title: "test Data",
    body: "this is a test post request",
    userId: 120,
  };

  const handleClick = () => {
    getData();
    // postData(url, data);
  };
  // getData();
  //

  // const testApi = async () => {
  //   try {
  //     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     console.log(response);
  //     const fetchedUserData = await response.data;
  //     console.log(fetchedUserData);
  //   } catch (error) {
  //     console.error("Error: ", error);
  //   }
  // };
  return (
    <Box>
      <Typography variant="h2" textAlign="center" p={6}>
        Testing
      </Typography>
      <MyButton onClick={handleClick}>testing</MyButton>
    </Box>
  );
}
