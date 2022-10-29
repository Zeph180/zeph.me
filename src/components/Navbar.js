import React from "react";
import { Link,} from "react-router-dom";
// import AboutPage from "../pages/AboutPage";
// import HomePage from "../pages/HomePage";
// import ProjectsPage from "../pages/ProjectsPage";

const Navbar = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>	
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/projects">Projects</Link>
			</li>
		</ul>
	
	);
};

export default Navbar;
