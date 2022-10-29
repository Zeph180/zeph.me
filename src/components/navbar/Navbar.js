import React from "react";
import { Link,} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div id="nav-container">
			<div id="nav-logo">
				<p >logo</p>
			</div>
			<ul id="nav-list">
				<li className="nav-list-item">
					<Link to="/" className="nav-link">Home</Link>
				</li>	
				<li className="nav-list-item">
					<Link to="/about" className="nav-link">About</Link>
				</li>
				<li className="nav-list-item">
					<Link to="/projects" className="nav-link">Projects</Link>
				</li>
				<li className="nav-list-item">
					<Link to="/contact" className="nav-link">Contact</Link>
				</li>
			</ul>
		</div>	
	);
};

export default Navbar;
