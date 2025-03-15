import React, { useState } from "react";
import "./App.css";
// import Todos from "./pages/Todos";

function App() {
	const [todos, setTodos] = useState({
		description: "",
		completed: false,
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		// localStorage.setItem("todos", parse(...todos));
	};

	const editTodo = () => {
		localStorage.getItem("todos", JSON.stringify(todos));
	};

	const displayedTodos = todos.map((todo, index) => {
		return (
			<li key={index} className="todo-list">
				<div className="todo-details">
					<p className="completed">{todo.completed}</p>
					<h3 className="description">{todo.description}</h3>
				</div>
				<div className="todo-buttons">
					<button role="button" className="edit">
						<FaEdit />
					</button>
					<button role="button" className="delete">
						<MdDeleteForever />
					</button>
				</div>
			</li>
		);
	});

	return (
		// <BrowserRouter>
		// 	<div className="App">
		// 		<Todos />
		// 	</div>
		// </BrowserRouter>

		<div className="container">
			<section>
				<form className="form" onSubmit={handleSubmit}>
					<h3 className="heading">New Todo</h3>
					<label htmlFor="todo" className="todo-label"></label>
					<input
						type="text"
						id="todo"
						name="todo"
						value={todos}
						onChange={(e) => {
							setTodos(e.target.value);
						}}
						className="todo-input"
					/>
				</form>
			</section>
		</div>
	);
}

export default App;
