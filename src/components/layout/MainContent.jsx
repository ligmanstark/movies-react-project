import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from '../../fragments/Movies';
import { Search, setValueSearch, setValueType } from '../../fragments/Search';
import Preloader from '../../fragments/Preloader';
import TotalResault from '../../fragments/TotalResault';
import Pages from '../../fragments/Pages';
import FilmRender from '../../fragments/FilmPage';

const API_KEY = process.env.REACT_APP_API_KEY;

const MainContent = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [resaults, setResaults] = useState(null);
	const [pages, setPages] = useState([]);
	const [film, setFilm] = useState([]);
	const [IsLoadingFilm, setFilmLoad] = useState(false);

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
					[
						...Array(Math.ceil(response.data.totalResults / 10)).keys(),
					].map((i) => i + 1)
				);
				// console.log(response.data.Search);
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
					[
						...Array(Math.ceil(response.data.totalResults / 10)).keys(),
					].map((i) => i + 1)
				);

				console.log(pages);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {});
	};

	const searchFilmPage = (imdbID) => {
		setLoading(true);
		const OMDB = 'https://www.omdbapi.com/';
		const APIKEY = API_KEY;
		axios
			.get(OMDB, {
				params: {
					apikey: APIKEY,
					i: imdbID,
				},
			})
			.then((response) => {
				setFilm(response.data);
				setLoading(false);
				setFilmLoad(true);
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {});
	};

	const buttonBack = () => {
		setFilmLoad(false);
	};

	return (
		<main className="content container">
			{!IsLoadingFilm ? <Search searchMovies={searchMovies} /> : ''}

			{!IsLoadingFilm ? <TotalResault resaults={resaults} /> : ''}

			{loading ? (
				<Preloader />
			) : IsLoadingFilm ? (
				<FilmRender film={film} buttonBack={buttonBack} />
			) : (
				<Movies movies={movies} searchFilmPage={searchFilmPage} />
			)}

			{!IsLoadingFilm ? (
				<Pages
					pages={pages}
					searchMovies={searchMovies}
					setValueSearch={setValueSearch}
					setValueType={setValueType}
				/>
			) : (
				''
			)}
		</main>
	);
};

export default MainContent;
