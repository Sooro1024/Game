import React from "react";
import { Spinner } from "reactstrap";

const CenterSpiner = () => {
	return (
		<div
			style={{ minHeight: "70vh" }}
			className="d-flex justify-content-center align-items-center"
		>
			<Spinner style={{ width: "3rem", height: "3rem" }} color="secondary" />
		</div>
	);
};

export default CenterSpiner;
