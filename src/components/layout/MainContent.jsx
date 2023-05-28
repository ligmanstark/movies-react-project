import React from 'react';
import axios from 'axios';
import Movies from '../../fragments/Movies';
import Search from '../../fragments/Search';
import Preloader from '../../fragments/Preloader';
import TotalResault from '../../fragments/TotalResault';
import Pages from '../../fragments/Pages';

const API_KEY = process.env.REACT_APP_API_KEY;

class MainContent extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			loading: true,
			resaults: null,
			// pages: null,
		};
		this.searchMovies = this.searchMovies.bind(this);
	}

	
	componentDidMount() {
		const OMDB = 'https://www.omdbapi.com/';
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
				// console.log(response.data);
				self.setState({
					movies: response.data.Search,
					loading: false,
					resaults: response.data.totalResults,
					// pages: [
					// 	...Array(Math.ceil(response.data.totalResults / 10)).keys(),
					// ].map((i) => i + 1),
				});
			})
			.catch(function (error) {
				console.log(error);
				self.setState({ loading: false });
			})
			.finally(function () {});
	}

	

	searchMovies(str = 'Marvel', type = '') {
		this.setState({ loading: true });
		const OMDB = 'https://www.omdbapi.com/';
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
				self.setState({
					movies: response.data.Search,
					loading: false,
					resaults: response.data.totalResults,
					// pages: [
					// 	...Array(Math.ceil(response.data.totalResults / 10)).keys(),
					// ].map((i) => i + 1),
				});
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {});
	}

	render() {
		const { movies, loading, resaults, pages } = this.state;

		return (
			<main className='content container'>
				<Search searchMovies={this.searchMovies} />
				<TotalResault
					resaults={resaults}
					// pages={pages}
				/>

				{loading ? <Preloader /> : <Movies movies={movies} />}
				{/* <Pages pages={pages}/> */}

			</main>
		);
	}
}

export default MainContent;
