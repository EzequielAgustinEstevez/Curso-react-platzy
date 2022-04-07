import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
	//! Trae las props del contexto "TodoContext" y las guarda en una variable
	const { searchValue, setSearchValue } = React.useContext(TodoContext);

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<input
			className="TodoSearch"
			placeholder="Cebolla"
			value={searchValue}
			onChange={onSearchValueChange}
		/>
	);
}

export { TodoSearch };
