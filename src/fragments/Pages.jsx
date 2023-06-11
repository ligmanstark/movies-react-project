import { useState } from 'react';
import React from 'react';
import Page from './Page';

function Pages(props) {
	const { pages = [], searchMovies = Function.prototype } = props;
	const {
		setValueSearch = Function.prototype,
		setValueType = Function.prototype,
	} = props;

	let [search, setSearch] = useState(setValueSearch());
	let [type, setType] = useState(setValueType());

	search = localStorage.valueSearch;
	type = localStorage.valueType;

	return (
		<div className='pages'>
			{pages.length ? (
				pages.map((page) => (
					<Page
						key={page}
						page={page}
						searchMovies={() => searchMovies(search, type, page)}
					/>
				))
			) : (
				<h4>Nothing...</h4>
			)}
		</div>
	);
}

export default Pages;
