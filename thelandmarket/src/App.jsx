import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import Dashboards from "./components/Dashboards/Dashboards";
import Societies from "./components/Societies/Societies";
import DealerLogin from "./components/DealerLogin/DealerLogin";
import SocietyLogin from "./components/SocietyLogin/SocietyLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/societies" element={<Societies />} />
            <Route path="/dealerLogin" element={<DealerLogin />} />
            <Route path="/societyLogin" element={<SocietyLogin />} />
          </Routes>
      
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
