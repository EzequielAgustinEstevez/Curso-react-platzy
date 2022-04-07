import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState('');
	//! Traemos desde context la propiedad SaveTodo
	//prettier-ignore
	const { 
    addTodo,
    setOpenModal
   } = React.useContext(TodoContext);

	const onCancel = (event) => {
		setOpenModal(false);
	};

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	return (
		//? El formulario adquiere la propiedad onSubmit para recibir el boton de type="submit"
		<form onSubmit={onSubmit}>
			<label>
				<b>NUEVA TAREA</b>
			</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				placeholder="Comprar comida para la semana"
				required
			/>
			<div className="form-buttons">
				<button type="button" onClick={onCancel}>
					CANCELAR
				</button>
				<button type="submit">AGREGAR</button>
			</div>
		</form>
	);
}
export { TodoForm };
