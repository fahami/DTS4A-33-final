import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import PrivateComponent from "./components/PrivateComponent";
import Login from "./containers/Login";
import MovieList from "./containers/MovieList";
import Register from "./containers/Register";
=======
import MovieList from "./containers/MovieList";
>>>>>>> search_movie
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<MovieList />} />
<<<<<<< HEAD
					<Route
						path="register"
						element={
							<PrivateComponent loginOnly={false}>
								<Register />
							</PrivateComponent>
						}
					/>
					<Route
						path="login"
						element={
							<PrivateComponent loginOnly={false}>
								<Login />
							</PrivateComponent>
						}
					/>
=======
>>>>>>> search_movie
					<Route path="*" element={<h1>404</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
