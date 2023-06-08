import Form from "../component/form";
import Footer from "../component/Footer";
import Phone from "../asset/phone.jpg";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function Contact() {
	useEffect(() => {
		Aos.init({
			duration: 3000,
		});
	}, []);
	return (
		<>
			<section className="container mx-auto px-12">
				<div className="flex md:flex-row flex-col  items-center md:justify-between mt-16 relative md:ml-8 ">
					<img
						data-aos="zoom-out-right"
						className="md:w-[60%] lg:w-[45%] w-[80%]  "
						src={Phone}
						alt=""
					/>
					<h1
						data-aos="flip-left"
						className="font-bold xl:flex hidden text-gray-400 md:absolute md:top-[20%] md:left-[40%] text-[18rem]">
						Contact
					</h1>

					<div className="md:w-[40%] w-90% flex flex-col justify-end md:absolute md:bottom-0 md:left-1/3 gap-12 p-12  bg-white">
						<p
							data-aos="zoom-in"
							className="text-7xl  md:text-left ">
							Tell us about <br /> your project
						</p>
						<p
							data-aos="flip-up"
							className="text-2xl leading-[1.5]  tracking-wide">
							We’d love to hear more about your project. Please, leave a message
							below or give us a call. We have two offices, one in Texas and one
							in Tennessee. If you find yourself nearby, come say hello!
						</p>
					</div>
				</div>
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-8 my-20">
					<div className="font-bold text-6xl">Contact Details</div>
					<div
						data-aos="fade-right"
						className="text-2xl lg:flex-col flex-row justify-between">
						<div className="flex flex-col gap-4">
							<p className=" text-4xl font-bold">Main Office</p>
							<p className="flex gap-3">
								<span>Mail</span> :<span>archone@gmail.com</span>
							</p>
							<p className="flex gap-3">
								<span>Address</span> :<span>1892 Chenoweth Drive TN</span>
							</p>
							<p className="flex gap-3">
								<span>Phone</span> :<span>123-456-3612</span>
							</p>
						</div>
						<button>
							<span>View of map</span>
						</button>
					</div>
					<div
						data-aos="fade-left"
						className="text-2xl lg:flex-col flex-row justify-between">
						<div className="flex flex-col gap-4">
							<p className="font-bold text-4xl"> Office II </p>
							<p className="flex gap-3">
								<span>Mail</span> :<span>archtwo@gmail.com</span>
							</p>
							<p className="flex gap-3">
								<span>Address</span> :<span>3399 Wines Lane TX</span>
							</p>
							<p className="flex gap-3">
								<span>Phone</span> :<span>831-123-0456</span>
							</p>
						</div>
						<button>
							<span>View of map</span>
						</button>
					</div>
				</div>
			</section>
			<Form />
			<Footer />
		</>
	);
}
export default Contact;
