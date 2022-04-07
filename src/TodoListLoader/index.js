import React from 'react';
import './TodoListLoader.css';

function TodoListLoader() {
	return (
		<div>
			<li className="TodoItem-loader">
				<p className="TodoItem-p2"> </p>
			</li>
			<li className="TodoItem-loader">
				<p className="TodoItem-p2"> </p>
			</li>
			<li className="TodoItem-loader">
				<p className="TodoItem-p2"> </p>
			</li>
			<div className="CircleContainer">
				<div className="CircleLoading"></div>
				<div className="CircleLoading"></div>
				<div className="CircleLoading"></div>
			</div>
		</div>
	);
}
export { TodoListLoader };
