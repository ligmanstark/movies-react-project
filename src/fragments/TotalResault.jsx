import React from 'react';

function TotalResault(props) {
	const { resaults } = props;
    return <p>
        Всего найдено: {resaults} единиц контента
    </p>;
}

export default TotalResault;
