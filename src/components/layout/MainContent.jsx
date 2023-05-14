import React from 'react';
import axios from 'axios';
import Movies from '../../fragments/Movies';
import Search from '../../fragments/Search';
import Preloader from '../../fragments/Preloader';

const API_KEY=process.env.REACT_APP_API_KEY

class MainContent extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			loading: true,
		};
		this.searchMovies = this.searchMovies.bind(this);
	}

	componentDidMount() {
		const OMDB = 'http://www.omdbapi.com/';
		const APIKEY = API_KEY;

		const self = this;
		axios
			.get(OMDB, {
				params: {
					apikey: APIKEY,
					s: 'Marvel',
					type: '',
				},
			})
			.then((response) => {
				console.log(response.data);
				self.setState({ movies: response.data.Search, loading: false });
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {});
	}

	searchMovies(str = 'Marvel', type = '') {
		this.setState({ loading: true });
		const OMDB = 'http://www.omdbapi.com/';
		const APIKEY = API_KEY;
		const self = this;
		axios
			.get(OMDB, {
				params: {
					apikey: APIKEY,
					s: `${str !== '' ? str : 'Marvel'}`,
					type: `${type !== '' ? type : ''}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				self.setState({ movies: response.data.Search, loading: false });
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {});
	}

	render() {
		const { movies, loading } = this.state;

		return (
			<main className='content container'>
				<Search searchMovies={this.searchMovies} />

				{loading ? <Preloader /> : <Movies movies={movies} />}
			</main>
		);
	}
}

export default MainContent;
