import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./containers/MovieList";
import theme from "./themes/theme";
import Register from "./containers/Register";
import Login from "./containers/Login";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Navbar></Navbar>
				<Routes>
					<Route path="/" element={<MovieList />} />
					<Route path="register" element={<Register/> }/>
					<Route path="login" element={<Login/> }/>
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
