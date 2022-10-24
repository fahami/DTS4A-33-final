import { LockOutlined } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import useUserStore, {
	selectErrorRegister,
	selectOnRegister,
	selectUserReady,
} from "../store/user";

const Register = () => {
	const navigate = useNavigate();
	const onRegister = useUserStore(selectOnRegister);
	const userReady = useUserStore(selectUserReady);
	const errorRegister = useUserStore(selectErrorRegister);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		await onRegister(email, password);

		if (userReady) {
			navigate("/login");
		}
	};
	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					mt: 10,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>
					<Typography color="red">{errorRegister}</Typography>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<NavLink
								to="/login"
								style={{ textDecoration: "none", color: "white" }}
							>
								Already have an account? Sign in
							</NavLink>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default Register;
