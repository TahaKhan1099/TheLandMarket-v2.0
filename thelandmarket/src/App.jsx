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
import SocietyDashboardHomeD17 from "./components/SocietyDashboardPagesD17/SocietyDashboardHomeD17";
import SocietyDashboardDealerD17 from "./components/SocietyDashboardPagesD17/SocietyDashboardDealerD17";
import SocietyDashboardPlotsD17 from "./components/SocietyDashboardPagesD17/SocietyDashboardPlotsD17";
import SocietyDashboardSettingsD17 from "./components/SocietyDashboardPagesD17/SocietyDashboardSettingsD17";
import DealerRegistrationBahria from "./components/DealerRegistrationBahria/DealerRegistrationBahria";
import SocietyRegistrationD17 from "./components/SocietyRegistrationD17/SocietyRegistrationD17";
import DealerRegDetailsBahria from "./components/DealerRegDetailsBahria/DealerRegDetailsBahria";
import DealerDashboardBahria from "./components/DealerDashboardBahria/DealerDashboardBahria";
import DashboardHomeBahria from "./components/DashboardPagesBahria/DashboardHomeBahria";
import PlotsBahria from "./components/DashboardPagesBahria/PlotsBahria";
import SettingsBahria from "./components/DashboardPagesBahria/SettingsBahria";
import SocietyRegDetailsD17 from "./components/SocietyRegDetailsD17/SocietyRegDetailsD17";
import SocietyDashboardD17 from "./components/SocietyDashboardD17/SocietyDashboardD17";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminDashboardHome from "./components/AdminDashboardPages/AdminDashboardHome";
import AdminDashboardDealers from "./components/AdminDashboardPages/AdminDashboardDealers";
import AdminDashboardPlots from "./components/AdminDashboardPages/AdminDashboardPlots";
import AdminDashboardSociety from "./components/AdminDashboardPages/AdminDashboardSociety";

function App() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("/dealerDashboard") ||
    location.pathname.includes("/societyDashboard") ||
    location.pathname.includes("/adminDashboard");

  return (
    <>
      {hideHeaderFooter ? null : <Navbar />}
      <AuthContextProvider>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/societies" element={<Societies />} />
          <Route path="/dealerLogin" element={<DealerLogin />} />
          <Route path="/societyLogin" element={<SocietyLogin />} />
          <Route path="/dealerRegistrationBahria" element={<DealerRegistrationBahria />} />
          <Route path="/societyRegistrationD17" element={<SocietyRegistrationD17 />} />
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
            path="/dealerDashboardBahria"
            element={
              <ProtectedRoute>
                <DealerDashboardBahria />
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
           <Route
            path="/societyDashboardD17"
            element={
              <ProtectedRoute>
                <SocietyDashboardD17 />
              </ProtectedRoute>
            }
          />
          <Route path="/dealerRegDetails" element={<DealerRegDetails />} />
          <Route path="/dealerRegDetailsBahria" element={<DealerRegDetailsBahria />} />
          <Route path="/societyRegDetails" element={<SocietyRegDetails />} />
          <Route path="/societyRegDetailsD17" element={<SocietyRegDetailsD17 />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settingsBahria" element={<SettingsBahria />} />
          <Route path="/dashboardHome" element={<DashboardHome />} />
          <Route path="/dashboardHomeBahria" element={<DashboardHomeBahria />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/plotsBahria" element={<PlotsBahria />} />
          <Route path="/societyDashboardHome" element={<SocietyDashboardHome />} />
          <Route path="/societyDashboardDealers" element={<SocietyDashboardDealers />} />
          <Route path="/societyDashboardPlots" element={<SocietyDashboardPlots />} />
          <Route path="/societyDashboardSettings" element={<SocietyDashboardSettings />} />
          <Route path="/societyDashboardHomeD17" element={<SocietyDashboardHomeD17 />} />
          <Route path="/societyDashboardDealerD17" element={<SocietyDashboardDealerD17 />} />
          <Route path="/societyDashboardPlotsD17" element={<SocietyDashboardPlotsD17 />} />
          <Route path="/societyDashboardSettingsD17" element={<SocietyDashboardSettingsD17 />} />
          <Route path="/adminDashboardHome" element={<AdminDashboardHome />} />
          <Route path="/adminDashboardDealers" element={<AdminDashboardDealers />} />
          <Route path="/adminDashboardPlots" element={<AdminDashboardPlots />} />
          <Route path="/adminDashboardSocieties" element={<AdminDashboardSociety />} />
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
