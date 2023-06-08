import { useEffect } from "react";
import One from "../asset/about-0.jpg";
import Two from "../asset/about-1.jpg";
import p2 from "../asset/person-2.jpg";
import p3 from "../asset/person-3.jpg";
import p4 from "../asset/person-4.jpg";
import Footer from "../component/Footer";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
	useEffect(() => {
		Aos.init({
			duration: 3000,
		});
	}, []);
	return (
		<>
			<section className="container mx-auto px-12 text-gray-800 ">
				<div className="flex md:flex-row flex-col justify-between mt-16 relative ">
					<img
						data-aos="zoom-out-right"
						className="md:w-[45%] md:block hidden "
						src={One}
						alt=""
					/>
					<h1 className="font-bold xl:flex hidden text-gray-400 md:absolute md:top-1/4 md:left-[40%] text-[12rem]">
						About
					</h1>

					<div className="md:w-[45%] w-90% flex flex-col justify-end md:absolute md:bottom-0 md:left-1/3 gap-12 p-12  bg-white">
						<p
							data-aos="flip-down"
							className="text-7xl  md:text-left ">
							Your team of <br /> professionals
						</p>
						<p
							data-aos="flip-up"
							className="text-2xl leading-[1.5]  tracking-wide">
							Our small team of world-class professionals will work with you
							every step of the way. Strong relationships are at the core of
							everything we do. This extends to the relationship our projects
							have with their surroundings.
						</p>
					</div>
				</div>
				<div className="flex md:flex-row-reverse justify-around flex-col gap-6 mt-36 ">
					<img
						data-aos="zoom-out-left"
						className="md:w-[45%]  md:block hidden"
						src={Two}
						alt=""
					/>
					<div className="md:w-[35%] w-90% flex flex-col justify-end gap-6 pb-8">
						<h3
							data-aos="zoom-in"
							className="text-7xl ">
							Our Heritage
						</h3>
						<p
							data-aos="flip-left"
							className="text-2xl leading-[2]  tracking-wide">
							Founded in 2007, we started as a trio of architects. Our
							complimentary skills and relentless attention to detail turned
							Arch into one of the most sought after boutique firms in the
							country. <br />
							Speciliazing in Urban Design allowed us to focus on creating
							exceptional structures that live in harmony with their
							surroundings. We consider every detail from every surrounding
							element to inform our designs. <br /> Our small team of
							world-class professionals provides input on every project.
						</p>
					</div>
				</div>
				<div>
					<h3 className="text-4xl font-semibold m-4 p-4">The Leaders</h3>
					<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-8">
						<div
							data-aos="zoom-in"
							className=" flex flex-col space-y-3">
							<img
								className="w-full"
								src={p2}
								alt="leaders"
							/>
							<h3 className="text-3xl font-semibold">Thompson Smith</h3>
							<span className="text-xl tracking-wide">Head of Finance</span>
							<span className="flex space-x-4">
								<FaTwitter size={30} /> <FaLinkedin size={30} />
							</span>
						</div>
						<div
							data-aos="zoom-in"
							className=" flex flex-col space-y-3">
							<img
								className="w-full"
								src={p3}
								alt="leaders"
							/>{" "}
							<h3 className="text-3xl font-semibold">Anthony Santos</h3>
							<span className="text-xl tracking-wide">Structural Engineer</span>
							<span className="flex space-x-4">
								<FaTwitter size={30} /> <FaLinkedin size={30} />
							</span>
						</div>
						<div
							data-aos="zoom-in"
							className=" flex flex-col space-y-3">
							<img
								className="w-full"
								src={p4}
								alt="leaders"
							/>{" "}
							<h3 className="text-3xl font-semibold">Maria Simpson</h3>
							<span className="text-xl tracking-wide">Senior Architect</span>
							<span className="flex space-x-4">
								<FaTwitter size={30} /> <FaLinkedin size={30} />
							</span>
						</div>
						<div
							data-aos="zoom-in"
							className=" flex flex-col space-y-3">
							<img
								src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
							/>
							<h3 className="text-3xl font-semibold">Jake Daniels</h3>
							<span className="text-xl tracking-wide">Chief Architect</span>
							<span className="flex space-x-4">
								<FaTwitter size={30} /> <FaLinkedin size={30} />
							</span>
						</div>

						<div
							data-aos="zoom-in"
							className=" flex flex-col space-y-3">
							<img
								src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
							/>
							<h3 className="text-3xl font-semibold">Jackson Rourke</h3>
							<span className="text-xl tracking-wide">Lead Designer</span>
							<span className="flex space-x-4">
								<FaTwitter size={30} /> <FaLinkedin size={30} />
							</span>
						</div>

						<div
							data-aos="zoom-in"
							className=" flex flex-col space-y-3">
							<img
								src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
							/>
							<h3 className="text-3xl font-semibold">James Brown</h3>
							<span className="text-xl tracking-wide">Head of Finance</span>
							<span className="flex space-x-4">
								<FaTwitter size={30} /> <FaLinkedin size={30} />
							</span>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
export default About;
