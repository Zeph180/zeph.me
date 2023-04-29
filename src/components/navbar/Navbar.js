import React, { useState } from "react";
import CloseBtn from "../../assets/CloseBtn";
import Hamburger from "../../assets/hamburg";
import MyLogo from "../../assets/MyLogo";
// import { Link,} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const [isListShown, setIsListShown] = useState(false);
	const toggleListShown = () => {

		setIsListShown(!isListShown);
	};

	return (
		<nav>
			<div id="nav-container">
				<MyLogo onClick={() => alert("Clicked")}/>
				<div>{isListShown ? <CloseBtn onClick={toggleListShown}/> : <Hamburger onClick={toggleListShown}/>}</div>
				<ul id="nav-list" className={!isListShown ? "hidden" : null}>
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
