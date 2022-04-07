import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoListLoader } from '../TodoListLoader';

function AppUI() {
	//! Trae las props del contexto "TodoContext" y las guarda en una variable
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		modalOpen,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <p>Desespérate, hubo un error...</p>}
				{loading && !error && <TodoListLoader />}
				{!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
				{searchedTodos.map((todo, index) => (
					<TodoItem
						key={index}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{!!modalOpen && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			<CreateTodoButton setModalOpen={setOpenModal} />
		</React.Fragment>
	);
}

export { AppUI };
