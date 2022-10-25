import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFound = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "100vh",
			}}
		>
			<Typography variant="h1">404</Typography>
			<Typography variant="body1">Page not found</Typography>
			<NavLink to={"/"} style={{ textDecoration: "none" }}>
				<Button sx={{ margin: 2 }}>Back to Home</Button>
			</NavLink>
		</Box>
	);
};
export default NotFound;
