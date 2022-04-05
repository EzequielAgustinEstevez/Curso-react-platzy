import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ setModalOpen }) {
	const onClickButton = () => {
		!setModalOpen() ? setModalOpen(false) : console.log('hola');
	};
	return (
		<button className="CreateTodoButton" onClick={onClickButton}>
			+
		</button>
	);
}

export { CreateTodoButton };
