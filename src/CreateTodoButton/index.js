import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
	const onClickButton = () => {
		//? TIP: vuelve al estado anterior enviando otra funcion, negandose a si misma
		setOpenModal((prevState) => !prevState);
	};
	return (
		<button className="CreateTodoButton" onClick={onClickButton}>
			+
		</button>
	);
}

export { CreateTodoButton };
