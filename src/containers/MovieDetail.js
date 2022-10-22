import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../apis/tmdb";

const MovieDetail = () => {
  const [detailMovie, setDetailMovies] = useState([]);
  const [detailMovieReady, setDetailMoviesReady] = useState(false);
  let { movieId } = useParams();

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const detailMovie = await tmdb.get(`/movie/${movieId}`);
        setDetailMovies(detailMovie);
        setDetailMoviesReady(true);
      } catch (error) {
        console.log(error)
      }
    };
    getDetailMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(detailMovie);

  return <div>hai</div>;
};

export default MovieDetail;
