import React from 'react';
import Page from './Page';

function Pages(props) {
	const { pages=[] } = props;
	return (
		<div className='pages'>
			{
				pages.map(page => <Page key={page}  />)
}
		</div>
	);
}

export default Pages;
