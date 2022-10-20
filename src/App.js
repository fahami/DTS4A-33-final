import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import theme from "./themes/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Navbar></Navbar>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}

export default App;
