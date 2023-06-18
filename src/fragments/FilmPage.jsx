import React from 'react';

const FilmRender = (props) => {
	const {
		Actors,
		Country,
		Genre,
		Language,
		Plot,
		Poster,
		Released,
		Title,
		Type,
		imdbRating,
		imdbVotes,
		imdbID,
	} = props.film;
	const { buttonBack = Function.prototype} =
		props;

	let ratingInternetMovieDatabase = '';
	let ratingRottenTomatoes = '';
	let ratingMetacritic = '';

	if (props.film.Ratings[2]) {
		ratingInternetMovieDatabase = props.film.Ratings[0].Value;
		ratingRottenTomatoes = props.film.Ratings[1].Value;
		ratingMetacritic = props.film.Ratings[2].Value;
	} else if (props.film.Ratings[1]) {
		ratingInternetMovieDatabase = props.film.Ratings[0].Value;
		ratingRottenTomatoes = props.film.Ratings[1].Value;
	} else if (props.film.Ratings[0]) {
		ratingInternetMovieDatabase = props.film.Ratings[0].Value;
	} else {
		return false;
	}
	console.log(props.film);
	console.log(props);
	return (
		<div
			className='film-page'
			key={imdbID}
		>
			<div className='film-card'>
				{Poster === 'N/A' ? (
					<>
						<div>
							<button onClick={buttonBack}>
								<i className='fa-solid fa-angles-left'> Back</i>
							</button>
						</div>
						<h4>Too little information about film...</h4>
					</>
				) : (
					<>
						<div>
							<button onClick={buttonBack}>
								<i className='fa-solid fa-angles-left'> Back</i>
							</button>
						</div>

						<div className='poster'>
							<img
								className=''
								src={Poster}
								alt=''
							/>
						</div>

						<div className='about-film'>
							<h3>{Title}</h3>
							<p>
								<b>Intro: </b>
								{Plot}
							</p>
							<p>
								<b>Actors: </b>
								{Actors}
							</p>
							<p>
								<b>Country: </b>
								{Country}
							</p>
							<p>
								<b>Released: </b>
								{Released}
							</p>
							<p>
								<b>Genre: </b>
								{Genre}
							</p>
							<p>
								<b>Type: </b>
								{Type}
							</p>
							<p>
								<b>Language: </b>
								{Language}
							</p>
							<div className='ratings-film'>
								<div className='imdb-rating'>
									<p>
										<b>Imdb Rating: </b>
										{imdbRating ? imdbRating : 'N/A'}
									</p>
									<p>
										<b>Imdb Votes: </b>
										{imdbVotes ? imdbVotes : 'N/A'}
									</p>
								</div>
								<div className='rating-internet-movie-database'>
									<p>
										<b>Rating Internet Movie DataBase: </b>

										{ratingInternetMovieDatabase
											? ratingInternetMovieDatabase
											: 'N/A'}
									</p>
								</div>
								<div className='rating-rotten-tomatoes'>
									<p>
										<b>Rating RottenTomatoes: </b>
										{ratingRottenTomatoes ? ratingRottenTomatoes : 'N/A'}
									</p>
								</div>
								<div className='rating-metacritic'>
									<p>
										<b>Rating Metacritic: </b>
										{ratingMetacritic ? ratingMetacritic : 'N/A'}
									</p>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default FilmRender;
