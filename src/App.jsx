import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Signup from "./auth/signup/Signup";
import MainLayout from "./layouts/mainLayout";
import Login from "./auth/login/Login";
import Verify from "./auth/verify/Verify";
import Profile from "./profile/userProfile/profile"
import Bookings from "./profile/bookings/Bookings";
import Journey from "./Pages/journey/Journey";
import NotFound from "./Pages/not-found/NotFound";
import Flashback from "./Pages/flashback-files/Flashback";
import FlashbackDetail from "./Pages/flashbackinner/FlashbackDetails";
import Showtime from "./Pages/showtime/Showtime";
import ShowtimeDetails from "./Pages/showtimelive/ShowtimeDetails";
import ShowtimeWas from "./Pages/showtimewas/ShowtimeWas";
import ShowtimeWasDetail from "./Pages/showtimewasdetail/showtimewasdetail";
import PioneersPage from "./Pages/pironeerspage/pironeerspage";
import GalleryPage from "./Pages/gallerypage/GalleryPage";
import AuditoriumPage from "./Pages/auditorium/AuditoriumPage";

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
      <Route path="/journey" element={<Journey />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/flashback" element={<Flashback />} />
      <Route path="/flashbackinner" element={<FlashbackDetail />} />
      <Route path="/showtime" element={<Showtime />} />
      <Route path="/showtimedetail" element={<ShowtimeDetails />} />
      <Route path="/showtimewas" element={<ShowtimeWas />} />
      <Route path="/showtimewasdetail" element={<ShowtimeWasDetail/>} />
      <Route path="/pironeerspage" element={<PioneersPage/>} />
      <Route path="/gallerypage" element={<GalleryPage/>} />
      <Route path="/auditoriumpage" element={<AuditoriumPage/>} />
      </Route>

      {/* Pages WITHOUT Navbar + Footer */}
      
    </Routes>
    </>
  );
}

export default App;