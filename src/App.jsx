import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Signup from "./auth/signup/Signup";
import MainLayout from "./layouts/mainLayout";
import Login from "./auth/login/Login";
import Verify from "./auth/verify/Verify";
import Profile from "./profile/userProfile/profile"
import Bookings from "./profile/bookings/Bookings";

function App() {
  return (
    <>
    <Routes>
      {/* Pages WITH Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/bookings" element={<Bookings />} />
      </Route>

      {/* Pages WITHOUT Navbar + Footer */}
      
    </Routes>
    </>
  );
}

export default App;