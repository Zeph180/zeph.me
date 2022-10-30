import React from "react";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div id="home-container">
			<p className="home-greeting">Hi, my name is</p>
			<h1 className="my-name" style={{color: "#0F85F2"}}>Kigozi Joseph Suubi aka <i>Zeph</i></h1>
			<h1 className="profession" style={{color: "#9CC8E1"}}>I am a front end developer.</h1>
			<p className="brief-intro" style={{color: "#0F85F2"}}>I am a software engineer spaecialising in building and ocassionally <br/>
			designing pixel perfect user interfaces both for the web, android and <br/>
			ios devices. I am focused on building inaccessible, human-centered<br/>
			products in react and react native. And looking for a great team.</p>
			<button style={{ width: "100px", marginTop: "15px", height: "35px", fontSize: "17px", fontWeight: "bold",borderWidth: "0px", backgroundColor: "#9CC8E1"}}>Git hub</button>
		</div>
	);
};

export default HomePage;
