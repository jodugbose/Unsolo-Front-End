import { useState } from "react";
import {
  Box,
  CircularProgress,
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
import axios from "axios";

export default function SignIn({ closeModal, insideSignUpDialog }) {
  const [loading, setLoading] = useState(false);
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
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

  const submitSignInDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        userData
      );
      console.log(response);
      const resData = await response.data;
      console.log(resData);
      localStorage.setItem("token", resData.token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        console.log(error.response)
        if (error.response.status == 401) {
          setEmailErrMsg(error.response.data);
        }
        if (error.response.status == 403) {
          setEmailErrMsg(error.response.data);
        }
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error);
      }
    }
    // setLoading(false);
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
          error={emailErrMsg ? true : false}
          helperText={emailErrMsg}
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
        <Box position="relative">
          <MyButton
            width="100%"
            color="white"
            mySubmit="submit"
            myDisabled={loading}
          >
            proceed
          </MyButton>
          {loading && (
            <CircularProgress
              size={40}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-20px",
                marginLeft: "-20px",
              }}
            />
          )}
        </Box>
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
