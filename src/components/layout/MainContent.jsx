import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from '../../fragments/Movies';
import { Search, setValueSearch, setValueType } from '../../fragments/Search';
import Preloader from '../../fragments/Preloader';
import TotalResault from '../../fragments/TotalResault';
import Pages from '../../fragments/Pages';

const API_KEY = process.env.REACT_APP_API_KEY;

const MainContent = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [resaults, setResaults] = useState(null);
	const [pages, setPages] = useState([]);

	useEffect(() => {
		const OMDB = 'https://www.omdbapi.com/';
		const APIKEY = API_KEY;

		axios
			.get(OMDB, {
				params: {
					apikey: APIKEY,
					s: 'Marvel',
					type: '',
					page: 1,
				},
			})
			.then((response) => {
				setMovies(response.data.Search);
				setLoading(false);
				setResaults(response.data.totalResults);
				setPages(
					[...Array(Math.ceil(response.data.totalResults / 10)).keys()].map(
						(i) => i + 1
					)
				);
			})
			.catch(function (error) {
				console.log(error);
				setLoading(false);
			})
			.finally(function () {});

		return () => {};
	}, []);

	const searchMovies = (str = 'Marvel', type = '', page) => {
		setLoading(true);
		const OMDB = 'https://www.omdbapi.com/';
		const APIKEY = API_KEY;
		axios
			.get(OMDB, {
				params: {
					apikey: APIKEY,
					s: `${str !== '' ? str : 'Marvel'}`,
					type: `${type !== '' ? type : ''}`,
					page: `${page !== 1 ? page : 1}`,
				},
			})
			.then((response) => {
				console.log(response.data);

				setMovies(response.data.Search);
				setLoading(false);
				setResaults(response.data.totalResults);
				setPages(
					[...Array(Math.ceil(response.data.totalResults / 10)).keys()].map(
						(i) => i + 1
					)
				);

				console.log(pages);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {});
	};

	return (
		<main className='content container'>
			<Search searchMovies={searchMovies} />
			<TotalResault resaults={resaults} />

			{loading ? <Preloader /> : <Movies movies={movies} />}
			<Pages
				pages={pages}
				searchMovies={searchMovies}
				setValueSearch={setValueSearch}
				setValueType={setValueType}
			/>
		</main>
	);
};

export default MainContent;
