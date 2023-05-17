import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import SocietyDashboardSideNavD17 from "../SocietyDashboardSideNavD17/SocietyDashboardSideNavD17";

const SocietyDashboardD17 = () => {
    const navigate = useNavigate();
	const { user, logout } = UserAuth() ||{};
	const handleLogout = async () => {
	  try {
		await logout();
		navigate("/home");
		window.alert("You are logged out");
		console.log("You are logged out");
	  } catch (e) {
		console.log(e.message);
	  }
	};
  return (
    <>
      <SocietyDashboardSideNavD17/>
    </>
  )
}

export default SocietyDashboardD17