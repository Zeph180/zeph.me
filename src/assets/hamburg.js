/* eslint-disable react/prop-types */
import * as React from "react";
const Hamburger = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={25}
		fill="none"
		{...props}
		onClick={props.onClick}
	>
		<path stroke="#0E7EE7" strokeWidth={5} d="M0 2.5h25M0 12.5h25M0 22.5h25" />
	</svg>
);
export default Hamburger;