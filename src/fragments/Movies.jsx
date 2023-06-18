import Movie from './Movie';

function Movies(props) {
	const { movies = [] } = props;
	return (
		<div className='movies'>
			{movies.length ? (
				movies.map((movie) => (
					<Movie
						key={movie.imdbID}
						{...movie}
						searchFilmPage={props.searchFilmPage}
					/>
				))
			) : (
				<h4>Nothing...</h4>
			)}
		</div>
	);
}

export default Movies;
