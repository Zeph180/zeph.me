import React from "react";
import Hamburger from "../../assets/hamburg";
import MyLogo from "../../assets/MyLogo";
// import { Link,} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<div id="nav-container">
				<MyLogo />
				<Hamburger />
				<ul id="nav-list">
					<li className="nav-list-item">
						<a href="#home-container">Home</a>
					</li>	
					<li className="nav-list-item">
						<a href="#about">About</a>
					</li>
					<li className="nav-list-item">
						<a href="#contact">Works</a>
					</li>
					<li className="nav-list-item">
						<a href="#contact">Contact</a>
					</li>
					<li className="nav-list-item">
						<a href="#contact">Resume</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
