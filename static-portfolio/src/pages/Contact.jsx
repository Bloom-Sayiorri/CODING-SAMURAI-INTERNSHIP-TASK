import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
	const [info, setInfo] = useState({
		name: "",
		email: "",
		comments: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		// axios to send the form details
	};

	const handleChange = (event) => {
		setInfo(event.target.value);
	};

	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<div className="container">
			<h2 className="form-title">Contact Me</h2>
			<form onSubmit={handleSubmit} className="form">
				<label htmlFor="name" className="">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter name..."
					value={info.name}
					onChange={handleChange}
					required={true}
					className=""
				/>
				<label htmlFor="email" className="">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter email..."
					value={info.email}
					onChange={handleChange}
					required={true}
					className=""
				/>
				<label htmlFor="comments" className="">
					Comments
				</label>
				<textarea
					id="comments"
					name="comments"
					placeholder="Comments..."
					value={info.comments}
					onChange={handleChange}
					required={true}
					className="h-[200px] w-[300px]"
					resize={false}
				/>
				<button
					type="submit"
					onClick={handleClick}
					className="submit-btn"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;
