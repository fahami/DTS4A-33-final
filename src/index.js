import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PrivateHome from "./components/PrivateHome";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./containers/Login";
import MovieDetailPage from "./containers/MovieDetailPage";
import MovieList from "./containers/MovieList";
import Register from "./containers/Register";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/"
            element={
              <PrivateHome>
                <MovieList />
              </PrivateHome>
            }
          />
          <Route
            path="movie/:movieId"
            element={
              <PrivateHome>
                <MovieDetailPage />
              </PrivateHome>
            }
          />
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
