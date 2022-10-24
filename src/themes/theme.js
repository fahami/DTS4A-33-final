import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#f37515",
		},
		secondary: {
			main: "#f37515",
		},
		background: {
			default: "#1d2024",
			paper: "#2c2e31",
		},
		text: {
			primary: "rgba(255,255,255,0.87)",
			secondary: "rgba(255,255,255,0.54)",
		},
	},
	typography: {
		fontFamily: "Nunito",
	},
});

export default theme;
