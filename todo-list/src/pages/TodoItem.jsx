import React from "react";
import "../styles/todo-item.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function TodoItem({ id, completed, description, toggleComplete, editTodo, deleteTodo }) {

	// const handleChange = () => {
		//check if the completed boolean works without handleChange
	// };

	const handleEditTodo = () => {
		editTodo();
	};

	const handleDeleteTodo = () => {
		deleteTodo(id);
	};

	return (
		<div>
			<li key={id} className="todo-item">
				<h3 className="description">{description}</h3>
				<div className="completed-section">
					<label htmlFor="completed">Completed</label>
					<input className="completed" id="completed" checked={completed} onChange={toggleComplete}/>
				</div>
				<div className="todo-buttons">
					<FaEdit
						role="button"
						className="edit"
						onClick={handleEditTodo}
					/>
					<MdDeleteForever
						role="button"
						className="delete"
						onClick={handleDeleteTodo}
					/>
				</div>
			</li>
		</div>
	);
}

export default TodoItem;
