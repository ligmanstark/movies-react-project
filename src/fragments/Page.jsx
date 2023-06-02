import React from 'react';

function Page(props) {
	const { page, searchMovies = Function.prototype } = props;

	return (
		<div className='page'>
			<button onClick={searchMovies}>{page}</button>
		</div>
	);
}

export default Page;
