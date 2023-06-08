import React from "react";
import { MoonLoader } from "react-spinners";

function Loader() {
	return (
		<div className="h-screen w-full items-center justify-center flex">
			<MoonLoader
				color="#36d7b7"
				size={200}
			/>
		</div>
	);
}

export default Loader;
