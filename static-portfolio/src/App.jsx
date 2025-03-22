import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="App">
				<Routes>
					<Route index path="/" element={<Details />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
