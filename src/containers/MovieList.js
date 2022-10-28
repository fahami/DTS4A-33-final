import { SortByAlpha } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const [moviesReady, setMoviesReady] = useState(false);

  const queryPage = queryParams.get("page");
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week", {
          params: { page: queryPage || 1 },
        });

        setMovies(fetchedMovies.data.results);
        setMoviesReady(true);
      } catch (error) {
        console.log(error);
      }
    };

    if (!queryParams.get("query")) {
      fetchMovies();
    }
	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryPage]);

  useEffect(() => {
    if (!moviesReady) return;
    const sortMovies = (type) => {
		console.log(type)
      if (type === "asc") {
        const sorted = [...movies].sort(
          (a, b) => a.vote_average - b.vote_average
        );
		console.log(sorted)
        setMovies(sorted);
      }
      if (type === "desc") {
        const sorted = [...movies].sort(
          (a, b) => b.vote_average - a.vote_average
        );
		console.log(sorted)
        setMovies(sorted);
      }
    };
	
    sortMovies(queryParams.get("sort"));
	console.log(movies)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams, moviesReady]);

  useEffect(() => {
    const searchMovies = async (query) => {
      try {
        const fetchedMovies = await tmdb.get("search/movie", {
          params: {
            query,
            page: queryParams.get("page") || 1,
          },
        });
        setMovies(fetchedMovies.data.results);
        setMoviesReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    const getData = setTimeout(() => {
      if (queryParams.get("sort")) {
        return;
      }
      if (queryParams.get("query")) {
        searchMovies(queryParams.get("query"));
      }
    }, 2000);
    return () => clearTimeout(getData);
  }, [queryParams]);
  const toggleSort = () => {
	// console.log(sortType);
    if (sortType === "asc") {
      setSortType("desc");
      queryParams.set("sort", "desc");
      setQueryParams(queryParams);
    } else {
      setSortType("asc");
      queryParams.set("sort", "asc");
      setQueryParams(queryParams);
    }
  };
  
  const scrollTop = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  const setNextPage = () => {
    let page = queryParams.get("page") || 1;
    let parsedPage = parseInt(page);
    queryParams.set("page", parsedPage + 1);
    setMoviesReady(false);
    setQueryParams(queryParams);
    // window.location.reload(false);
    scrollTop();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 5,
      }}
    >
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        Sort by Rating
        <IconButton sx={{ mx: 2 }} onClick={toggleSort}>
          <SortByAlpha />
        </IconButton>
      </Box>
      {moviesReady ?? <LinearProgress />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 2,
          justifyContent: "space-around",
        }}
      >
        {movies.length === 0 ? (
          <Typography variant="body1">All movie was displayed</Typography>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie}></MovieCard>
          ))
        )}
      </Box>
      {movies.length === 0 ? (
        <></>
      ) : (
        <Button
          variant="contained"
          sx={{ ml: 2, mr: 2 }}
          onClick={() => setNextPage()}
        >
          Next Page
        </Button>
      )}
    </Box>
  );
};

export default MovieList;
