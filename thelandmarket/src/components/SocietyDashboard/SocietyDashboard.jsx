import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Container, Box, Button, Typography } from "@mui/material";
import {motion} from "framer-motion";
import SocietyDashboardSideNav from "../SocietyDashboardSideNav/SocietyDashboardSideNav";

const SocietyDashboard = () => {
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
      <SocietyDashboardSideNav/>
    </>
  )
}

export default SocietyDashboard