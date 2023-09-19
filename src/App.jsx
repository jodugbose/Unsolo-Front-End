import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";
import OtpInput from "./pages/Otp/OtpInput";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/otpInput" element={<OtpInput />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/signInPage" element={<SignInPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
