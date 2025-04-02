import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./pages/Form";
import Todos from "./pages/Todos";

function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("TODOS");
		if (localValue == null) return [];
		return JSON.parse(localValue);
	});
	// const [ editedTodo, setEditedTodo ] = useState("");

	useEffect(() => {
		localStorage.setItem("TODOS", JSON.stringify(todos));
	}, [todos]);

	function toggleComplete(id, completed) {
		const updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				return {...todo, completed}
			} else {
				return todo
			}
		});
		setTodos(updatedTodos);
		// setTodos((currentTodos) => {
		// 	return currentTodos.map((todo) => {
		// 		if (todo.id === id) {
		// 			return { ...todos, completed };
		// 		}
		// 	});
		// });
	}

	function addTodo(newTodo) {
		const updatedTodos = [...todos, newTodo];
		setTodos(updatedTodos);
	}

	function editTodo(id, editedTodo) {
		// find a todo using its id and append new text to its existing text
		console.log("edit todo");
		const updatedTodos = todos.map(todo => {
			if(todo.id === id) {
				return {...todo, editedTodo}
			} else {
				return todo
			}
		});
		setTodos(updatedTodos);
		// setTodos(currentTodos => {
		// 	return currentTodos.filter(todo => {
		// 		// find the todo using its id
		// 		if(todo.id === id) {
		// 			// return the other todos along with the new todo and add them to state.
		// 			return {...todos, editedTodo}
		// 		};
		// 	})
		// });
	}

	function deleteTodo(id) {
		setTodos((currentTodos) =>
			currentTodos.filter((todo) => todo.id !== id)
		);
	}

	return (
		<div className="App">
			<Form addTodo={addTodo} todos={todos} setTodos={setTodos} />
			<Todos todos={todos} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
