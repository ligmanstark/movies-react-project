import React from 'react';

function TotalResault(props) {
	const { resaults } = props;
	return (
		<p>
			{resaults > 0
				? `Всего найдено: ${resaults} единиц контента`
				: 'Контент не найден :С'}
		</p>
	);
}

export default TotalResault;
