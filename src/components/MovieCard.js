import { Badge, Box, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/w200";

const MovieCard = ({ movie }) => {
	return (
		<Box sx={{ width: 200, margin: 2 }}>
			<Badge
				overlap="rectangular"
				color="warning"
				badgeContent={movie.vote_average.toFixed(1)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Card sx={{ marginBottom: 1 }} onClick={() => alert(movie.title)}>
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
