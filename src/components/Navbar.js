import { MovieFilter, Search } from "@mui/icons-material";
import { alpha, InputBase, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import UserLog from "./UserLog";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [queryParams, setQueryParams] = useSearchParams();

  const handleSearch = (e) => {
    if (queryParams.get("sort")) {
      queryParams.delete("sort");
    }
    queryParams.set("query", e.target.value);
    setQueryParams(queryParams);
    if (e.target.value === "") {
      queryParams.delete("query");
      setQueryParams(queryParams);
    }
  };

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
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              CINEMAX
            </Link>
          </Typography>
          {user && (
            <SearchContainer>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onKeyDown={handleSearch}
              />
            </SearchContainer>
          )}

          <UserLog />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
