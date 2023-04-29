/* eslint-disable react/prop-types */
import * as React from "react";
const CloseBtn = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={23}
		height={22}
		fill="none"
		{...props}
		onClick={props.onClick}
	>
		<path
			stroke="#0E7EE7"
			strokeWidth={5}
			d="M1.894 19.678 19.57 2M2.768 1.839l17.677 17.678"
		/>
	</svg>
);
export default CloseBtn;
