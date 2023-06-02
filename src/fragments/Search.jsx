import React, { useState,useEffect } from 'react';

export function setValueSearch() {
	const userValueSearch = localStorage.getItem('valueSearch');
	return userValueSearch ? userValueSearch : '';
}

export function setValueType() {
	const userValueType = localStorage.getItem('valueType');
	return userValueType ? userValueType : '';
}

export const Search = (props) => {
	const { searchMovies = Function.prototype } = props;

	 const [search, setSearch] = useState(setValueSearch());
	const [type, setType] = useState(setValueType());


	const handleKey = (event) => {
		if (event.key === 'Enter') {
			searchMovies(search, type);
		}
	};

	const handleFilter = (event) => {
		setType(event.target.dataset.type);
		searchMovies(search, event.target.dataset.type);
	};

	useEffect(() => {
		localStorage.setItem('valueSearch',search)
		return () => {
		};
	}, [search]);

	useEffect(() => {
		localStorage.setItem('valueType',type)
		return () => {};
	}, [type]);

	return (
		<div className='row'>
			<div className='col s12'>
				<div className='input-field col s12'>
					<input
						placeholder='Search movies'
						type='search'
						className='validate'
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						onKeyDown={handleKey}
					/>
					<button
						className='btn search-btn'
						onClick={() => searchMovies(search, type)}
					>
						Search
					</button>
					<div className='filter'>
						<p>
							<label>
								<input
									className='with-gap'
									name='type'
									data-type=''
									type='radio'
									onChange={handleFilter}
									checked={type === ''}
								/>
								<span>All</span>
							</label>
						</p>
						<p>
							<label>
								<input
									className='with-gap'
									name='type'
									data-type='movie'
									type='radio'
									onChange={handleFilter}
									checked={type === 'movie'}
								/>
								<span>Movies</span>
							</label>
						</p>
						<p>
							<label>
								<input
									className='with-gap'
									name='type'
									data-type='series'
									type='radio'
									onChange={handleFilter}
									checked={type === 'series'}
								/>
								<span>Serials</span>
							</label>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

