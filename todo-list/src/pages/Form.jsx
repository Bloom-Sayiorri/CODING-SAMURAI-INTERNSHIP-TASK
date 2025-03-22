import React, { useState } from "react";
import "../styles/form.css";
import Todos from "./Todos";

function Form({addTodo}) {
    const [ newTodo , setNewTodo ] = useState("");

	const handleChange = (event) => {
		setNewTodo(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
        if(newTodo === "") return;
        addTodo(newTodo);
        setNewTodo(""); 
	};

	return (
		<div className="wrapper">
			<h2 className="heading">Form</h2>
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="todo-label" className="todo-label">
					Add New Todo
				</label>
				<input
					type="text"
					id="todo"
					name="todo"
					value={newTodo}
					placeholder="Enter todos..."
					className="todo-input"
					onChange={handleChange}
				/>
                <button type="submit" className="button">Submit</button>
			</form>
		</div>
	);
}

export default Form;
