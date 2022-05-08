import React from 'react';
import emptyImg from '../img/empty.svg';
import './TodoListEmpty.css';

function TodoListEmpty() {
	return (
		<div className="emptyContainer">
			<img src={emptyImg} alt="Error" className="emptyImg" />
			<h2>Nada por aquí 🥺</h2>
			<p>
				Crea tu primer tarea <br />
				<b>Exito! 😎👈🏻</b>
			</p>
		</div>
	);
}
export { TodoListEmpty };
