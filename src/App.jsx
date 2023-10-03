import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";
import OtpInput from "./pages/Otp/OtpInput";
import DashBoard from "./pages/DashBoard/DashBoard";
import Buddy from "./pages/Buddy";
import Trip from "./pages/Trip";
import Booking from "./components/layout/Booking";
import Flight from "./pages/Flight";
import Hotel from "./pages/Hotel";
import Layout from "./components/modules/layout/Layout";


function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/otpInput" element={<OtpInput />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* <Route path="/signInPage" element={<SignInPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} /> */}
          <Route path="/buddy" element={<Buddy />} />
        <Route path="/trip" element={<Trip />} />
                <Route path="/booking" element={<Booking />}>
          <Route path="flight" element={<Flight />} />
          <Route path="hotel" element={<Hotel />} />
        </Route>
          <Route path="/testing" element={<Testing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
