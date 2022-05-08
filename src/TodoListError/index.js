import React from 'react';
import errorimg from '../img/error.svg';
import './TodoListError.css';

function TodoListError({ error }) {
	return (
		<div className="errorContainer">
			<img src={errorimg} alt="Error" className="errorImg" />
			<h2>Ups!</h2>
			<p>
				Tenemos un problema con la base de datos <br />
				<b>Intenta recargar el sitio.</b>
			</p>
		</div>
	);
}
export { TodoListError };
