import {
	Box,
	Card,
	CardMedia,
	Chip,
	Grid,
	List,
	ListItem,
	Typography,
} from "@mui/material";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieDetail = ({ movie, date }) => {
	return (
		<Box component="div" width="100%" mt={7}>
			<Box
				sx={{
					backgroundImage: `url(${BASE_IMAGE_URL}${movie.backdrop_path})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: {
						lg: "calc(100vh - 56px)",
						md: "calc(100vh - 56px)",
						sm: "auto",
					},
				}}
			>
				<Box
					component="div"
					sx={{
						width: "100%",
						backgroundColor: "rgba(60,64,72,0.7)",
						height: {
							lg: "calc(100vh - 56px)",
							md: "calc(100vh - 56px)",
							sm: "auto",
						},
						zIndex: 10,
					}}
				>
					<Grid
						container
						sx={{
							display: "flex",
							justifyContent: "center",
							paddingTop: "2.5rem",
						}}
					>
						<Grid
							item
							xs={8}
							md={3}
							sx={{ marginRight: { sm: "0px", md: "20px" } }}
						>
							<Card>
								<CardMedia
									// sx={{ backgroundColor: "black" }}
									component="img"
									image={
										movie.poster_path == null
											? "placeholder.webp"
											: BASE_IMAGE_URL + movie.poster_path
									}
									alt="Movie poster"
								/>
							</Card>
						</Grid>
						<Grid item md={6}>
							<List sx={{ paddingTop: { lg: "15%", md: "10%" } }}>
								<ListItem disablePadding sx={{ marginBottom: "0.5rem" }}>
									<Typography variant="h4" color="white" fontWeight="bold">
										{`${movie.title}(${date.getFullYear()})`}
									</Typography>
								</ListItem>
								<ListItem disablePadding>
									<Typography
										variant="body2"
										marginRight="5px"
										paddingLeft="2px"
										paddingRight="2px"
										border="2px white solid"
										color="white"
									>
										{movie.original_language.toUpperCase()}
									</Typography>
									<Typography
										variant="body2"
										marginRight="5px"
										paddingLeft="2px"
										paddingRight="2px"
										border="2px white solid"
										color="white"
									>
										{date.toLocaleDateString("en-GB")}
									</Typography>
									{movie.genres.map((genre) => (
										<Chip
											key={genre.id}
											sx={{
												borderRadius: "0px",
												color: "black",
												backgroundColor: "white",
												marginLeft: "3px",
											}}
											label={genre.name}
											size="small"
										/>
									))}
								</ListItem>
								<ListItem disablePadding sx={{ marginTop: "20px" }}>
									<Typography variant="h6" color="white">
										Overview
									</Typography>
								</ListItem>
								<ListItem disablePadding>
									<Typography variant="body1" color="white">
										{movie.overview}
									</Typography>
								</ListItem>
								{/* <ListItem disablePadding sx={{marginTop:'20px'}}>
                  <Typography variant="body2" color='white' padding='5px' borderRadius='25%' backgroundColor={theme.palette.primary.main} >{movie.vote_average.toFixed(1)}</Typography>
                  <Rating readOnly max={10} size='small' sx={{paddingTop:'0.2rem', marginLeft:'10px'}} precision={0.5} defaultValue={movie.vote_average.toFixed(1)}></Rating>
                </ListItem> */}
							</List>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default MovieDetail;
