import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";
import useUserStore, { selectOnLogout } from "../store/user";

const UserLog = () => {
	const navigate = useNavigate();
	const [user] = useAuthState(auth);
	const onLogout = useUserStore(selectOnLogout);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = async () => {
		await onLogout();
		navigate("/login");
	};

	return user ? (
		<div style={{ marginLeft: 5 }}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenu}
				color="inherit"
			>
				<AccountCircle />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem>{user.email}</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</div>
	) : (
		<NavLink
			to={"/login"}
			key={"login"}
			style={{ textDecoration: "none", marginLeft: 10 }}
		>
			<Button variant="text">Login</Button>
		</NavLink>
	);
};

export default UserLog;
