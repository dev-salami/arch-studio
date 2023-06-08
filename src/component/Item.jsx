import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

function Item({ image, text, num, btn, date }) {
	useEffect(() => {
		Aos.init({
			duration: 3000,
		});
	}, []);
	return (
		<div
			data-aos="zoom-in"
			className="relative min-h-[60vh] w-full  mx-auto  cursor-pointer ">
			<img
				className="absolute h-full w-full "
				src={image}
				alt=""
			/>
			{/* <div className="absolute inset-0">abjhekjlrekverklv;mrkjvnvmrlo</div> */}
			{btn && (
				<span className="text-7xl text-gray-600 font-extrabold absolute top-8 right-10  ">
					{num}
				</span>
			)}
			<div className="absolute left-[10%] bottom-[10%] bg-white hover:-translate-y-1/4 hover:translate-x-1/4 duration-700 py-4 px-8 text-xl max-w-xs flex flex-col space-y-2 text-orange-500-700">
				<p className="text-2xl font-semibold">{text}</p>
				<p className=" ">{date}</p>

				{btn && <Link to="portfolio">View All Projects</Link>}
			</div>
		</div>
	);
}
export default Item;
