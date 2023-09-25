import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";
import OtpInput from "./pages/Otp/OtpInput";
import DashBoard from "./pages/DashBoard/DashBoard";
import Layout from "./components/modules/layout/Layout";

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/otpInput" element={<OtpInput />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/signInPage" element={<SignInPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
