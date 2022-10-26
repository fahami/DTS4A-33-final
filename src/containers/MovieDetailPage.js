import { Box, CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../apis/tmdb";
import MovieDetail from "../components/MovieDetail";

const MovieDetailPage = () => {
  const [detailMovie, setDetailMovies] = useState([]);
  const [detailMovieReady, setDetailMoviesReady] = useState(false);

  let { movieId } = useParams();

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const detailMovie = await tmdb.get(`/movie/${movieId}`);
        setDetailMovies(detailMovie.data);
        setDetailMoviesReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  if (!detailMovieReady) {
    return (
      <Box component="div" sx={{position:'absolute',top:'50%', left:'50%'}}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }
  const date = new Date(detailMovie.release_date);

  return (
    <Fragment>
      <MovieDetail movie={detailMovie} date={date} />
    </Fragment>
  );
};

export default MovieDetailPage;
