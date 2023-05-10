import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import Dashboards from "./components/Dashboards/Dashboards";
import Societies from "./components/Societies/Societies";
import DealerLogin from "./components/DealerLogin/DealerLogin";
import SocietyLogin from "./components/SocietyLogin/SocietyLogin";
import Register from "./components/Register/Register";
import PlotFinder from "./components/PlotFinder/PlotFinder";
import DealerRegistration from "./components/DealerRegistration/DealerRegistration";
import SocietyRegistration from "./components/SocietyRegistration/SocietyRegistration";
import DealerDashboard from "./components/DealerDashboard/DealerDashboard";
import SocietyDashboard from "./components/SocietyDashboard/SocietyDashboard";
import DealerRegDetails from "./components/DealerRegDetails/DealerRegDetails";
import SocietyRegDetails from "./components/SocietyRegDetails/SocietyRegDetails";
import DashboardHome from "./components/DashboardPages/DashboardHome";
import Settings from "./components/DashboardPages/Settings";
import Plots from "./components/DashboardPages/Plots";
import SideNav from "./components/SideNav.jsx/SideNav";
import ProtectedRoute from "./Context/ProtectedRoute";
import { AuthContextProvider } from "./Context/AuthContext";
import SocietyDashboardHome from "./components/SocietyDashboardPages/SocietyDashboardHome";
import SocietyDashboardDealers from "./components/SocietyDashboardPages/SocietyDashboardDealers";
import SocietyDashboardPlots from "./components/SocietyDashboardPages/SocietyDashboardPlots";
import SocietyDashboardSettings from "./components/SocietyDashboardPages/SocietyDashboardSettings";

function App() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("/dealerDashboard") ||
    location.pathname.includes("/societyDashboard");

  return (
    <>
      {hideHeaderFooter ? null : <Navbar />}

      <AuthContextProvider>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/societies" element={<Societies />} />
          <Route path="/dealerLogin" element={<DealerLogin />} />
          <Route path="/societyLogin" element={<SocietyLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/plotfinder" element={<PlotFinder />} />
          <Route path="/dealerRegistration" element={<DealerRegistration />} />
          <Route
            path="/societyRegistration"
            element={<SocietyRegistration />}
          />

          <Route
            path="/dealerDashboard"
            element={
              <ProtectedRoute>
                <DealerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/societyDashboard"
            element={
              <ProtectedRoute>
                <SocietyDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/dealerRegDetails" element={<DealerRegDetails />} />
          <Route path="/societyRegDetails" element={<SocietyRegDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboardHome" element={<DashboardHome />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/societyDashboardHome" element={<SocietyDashboardHome />} />
          <Route path="/societyDashboardDealers" element={<SocietyDashboardDealers />} />
          <Route path="/societyDashboardPlots" element={<SocietyDashboardPlots />} />
          <Route path="/societyDashboardSettings" element={<SocietyDashboardSettings />} />
        </Routes>
      </AuthContextProvider>
      {hideHeaderFooter ? null : <Footer />}
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
