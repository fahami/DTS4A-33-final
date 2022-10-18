import { MovieFilter } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar>
				<Toolbar>
					<MovieFilter sx={{ display: "flex", mr: 1 }} />
					<Typography
						variant="h6"
						sx={{
							flexGrow: 1,
							display: "block",
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
						}}
					>
						<Link
							style={{ color: "inherit", textDecoration: "inherit" }}
							to="/"
						>
							NONTON
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
