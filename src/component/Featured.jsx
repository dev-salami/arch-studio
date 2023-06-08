import D from "../asset/D.jpg";

import E from "../asset/E.jpg";

import F from "../asset/F.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Item from "./Item";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Featured() {
	useEffect(() => {
		Aos.init({
			offset: 100,
			duration: 3000,
		});
	}, []);
	return (
		<section className="container mx-auto lg:px-8 h-fit pt-20  ">
			<div
				data-aos="zoom-in"
				data-aos-delay="300"
				className="flex flex-col space-y-6 mb-12 pl-16">
				<h2 className="text-6xl font-bold">Featured</h2>
				<Link
					to="/portfolio"
					className="bg-black text-white w-fit py-4 px-8 text-2xl flex items-center ">
					See All{" "}
					<BsFillArrowRightCircleFill
						className="ml-4"
						size={25}
					/>
				</Link>
			</div>
			<div
				//  className="flex md:flex-row flex-col gap-4 justify-center "
				className="mx-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div data-aos="fade-down">
					<Item
						image={D}
						text="Project Del Sol"
						num="1"
						btn={true}
					/>
				</div>

				<div data-aos="zoom-in">
					<Item
						image={E}
						text="228B Tower"
						num="2"
						btn={true}
					/>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="300">
					<Item
						image={F}
						text="Le Prototype"
						num="3"
						btn={true}
					/>
				</div>
			</div>
		</section>
	);
}
export default Featured;
