import axios from "axios";

const API_KEY = "e1d8626fca32945f124ea2720d0cf5c0";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
	baseURL: baseUrl,
	params: {
		api_key: API_KEY,
	},
});

export default tmdb;
