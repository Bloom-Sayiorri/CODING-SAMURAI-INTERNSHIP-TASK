import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const handleDecrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	const handleReset = () => {
		setCount(0);
	};

	// count > 0} ? color: "green" : {count < 0} color: "red" : color: "white"

	return (
		<div className="App">
			<p
				style={{
					color: count > 0 ? "green" : count < 0 ? "red" : "black",
				}}
			>
				{count}
			</p>
			<div className="buttons">
				<button className="increment" onClick={handleIncrement}>
					Increment
				</button>
				<button className="reset" onClick={handleReset}>
					Reset
				</button>
				<button className="decrement" onClick={handleDecrement}>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default App;
