import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/navbar/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";
// import darkBg from "./assets";

function App() {
	return (
		<BrowserRouter>
			<div id="app-container">
				<Navbar />
				<Routes>
					<Route exact path="/" element=<HomePage /> />
					<Route path="/about" element=<AboutPage /> />
					<Route path="/projects" element=<ProjectsPage /> />
					<Route path="/contact" element=<ContactPage /> />
					{/* <Route path="/resume" element=<AboutPage /> /> */}
				</Routes>
			</div>

		</BrowserRouter>
	);
}

export default App;