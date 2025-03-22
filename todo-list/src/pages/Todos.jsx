import React from "react";
import "../styles/todos.css";
import TodoItem from "./TodoItem";

function Todos({ todos, toggleComplete, editTodo, deleteTodo }) {
	return (
		<>
			<TodoItem
				{...todos}
				toggleComplete={toggleComplete}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
}

export default Todos;
