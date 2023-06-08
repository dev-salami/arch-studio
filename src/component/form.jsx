import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Form() {
	useEffect(() => {
		Aos.init({
			duration: 1000,
		});
	}, []);
	return (
		<section
			data-aos="zoom-in"
			data-aos-delay="200"
			className="container mx-auto px-12">
			<div className="grid md:grid-cols-2 grid-cols-1 items-center  gap-8 my-12 ">
				<h3 className="md::text-8xl text-5xl font-semibold text-gray-700 text-center">
					Connect with <br />
					Us
				</h3>
				<form
					className="flex flex-col space-y-6 pl-20   "
					action=""
					method="post">
					<input
						required
						className="form"
						placeholder="Name"
						type="text"
					/>
					<input
						required
						className="form"
						placeholder="Email"
						type="text"
					/>
					<input
						required
						className="form"
						placeholder="Message"
						type="text"
					/>
					<button
						className="px-4 py-2 w-fit text-xl bg-black text-white"
						type="submit">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}
export default Form;
