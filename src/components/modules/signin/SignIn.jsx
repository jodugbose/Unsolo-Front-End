import { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Close,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import MyButton from "../../ui/MyButton";
import SignUpDialog from "../signup/SignUpDialog";

export default function SignIn({ closeModal, insideSignUpDialog }) {
  const [myError, setMyError] = useState("error");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const submitSignInDetails = async () => {
    try {
      const response = await axios.post("/", userData);
      console.log(response);
      const fetchedUserData = await response.data;
      console.log(fetchedUserData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Paper sx={{ width: "30rem", p: 3, pb: 0, borderRadius: "1rem" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <IconButton sx={{ opacity: 0, cursor: "default" }}>
          <Close />
        </IconButton>
        <Box>
          <img src="/unsolo-icon.png" alt="unsolo-icon" />
        </Box>
        <IconButton
          onClick={() => {
            closeModal(false);
          }}
          sx={{ mt: -1 }}
        >
          <Close />
        </IconButton>
      </Stack>
      <Box textAlign="center" py={2}>
        <Typography variant="h6">Sign in to your Account</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Enter your personal details
        </Typography>
      </Box>
      <Box component="form" onSubmit={submitSignInDetails}>
        <TextField
          error={false}
          type="email"
          fullWidth
          size="small"
          required
          label="Email Address"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          fullWidth
          sx={{ my: 2 }}
          size="small"
          required
          label="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <MyButton
          width="100%"
          color="white"
          mySubmit="submit"
          myDisabled={false}
        >
          proceed
        </MyButton>
      </Box>
      <Typography color="text.secondary" textAlign="center" py={2}>
        Don’t have an account?{" "}
        {insideSignUpDialog ? (
          <Typography
            onClick={() => closeModal(false)}
            sx={{ cursor: "pointer" }}
            component="span"
            color="primary"
          >
            Sign Up
          </Typography>
        ) : (
          <SignUpDialog insideSignInModal={true}>
            <Typography
              component="span"
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              Sign Up
            </Typography>
          </SignUpDialog>
        )}
      </Typography>
    </Paper>
  );
}
