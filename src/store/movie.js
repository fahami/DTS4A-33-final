import create from "zustand";

const useMovieStore = create((set) => ({
	movies: [],
	moviesReady: false,
	queryParams: new URLSearchParams(),
}));

export const selectQuery = (state) => state.queryParams;
export const selectMovies = (state) => state.movies;
export const selectMoviesReady = (state) => state.moviesReady;

export default useMovieStore;
