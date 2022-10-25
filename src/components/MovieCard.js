import { Badge, Box, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

const MovieCard = ({ movie }) => {
	const navigate = useNavigate();
	const onDetailMovie = (movieId) => {
		navigate(`/movie/${movieId}`);
	};
	return (
		<Box sx={{ width: 200, margin: 2, '&:hover': {
			transform: 'scale'
		}}}>
			<Badge
				overlap="rectangular"
				color="warning"
				badgeContent={movie.vote_average.toFixed(1)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Card sx={{ marginBottom: 1 }} onClick={() => onDetailMovie(movie.id)}>
					<CardMedia
						component="img"
						height="300"
						image={
							movie.poster_path == null
								? "placeholder.webp"
								: BASE_IMAGE_URL + movie.poster_path
						}
						alt="Movie poster"
					/>
				</Card>
			</Badge>
			<Typography variant="h6">{movie.title}</Typography>
			<Typography variant="body1" display="block" gutterBottom>
				{new Date(movie.release_date).getFullYear()}
			</Typography>
		</Box>
	);
};

export default MovieCard;
