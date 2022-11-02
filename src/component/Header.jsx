import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import One from "../asset/Car-1.jpg";
import Two from "../asset/Car-2.jpg";

import Three from "../asset/Car-3.jpg";

import Four from "../asset/A.jpg";
import D from "../asset/D.jpg";

import E from "../asset/E.jpg";

import F from "../asset/F.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Item from "./Item";

function Header() {
  return (
    <div className="container mx-auto md:px-20 pt-10 text-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="w-[90vw] px-12 ">
          <div className="bg-1 w-full h-[90vh]   ">
            <div className="w-full h-full bg-black bg-opacity-40">
              <div className=" max-w-sm md:max-w-2xl items-center mx-auto text-center flex flex-col space-y-12 pt-60">
                <h2 className=" text-7xl md:text-9xl  font-extrabold">
                  Project Paramount
                </h2>
                <h3 className=" text-2xl md:text-3xl text-center">
                  Project made for an art museum near Southwest London. Project
                  Paramour is a statement of bold, modern architecture.
                </h3>
                <Link
                  className="bg-black flex space-x-3 text-2xl items-center px-8 py-4"
                  to="portfolio"
                >
                  See Our Portfolio
                  <BsFillArrowRightCircleFill className="ml-2" size={25} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[90vw] px-12 ">
          <div className="bg-3 w-full h-[90vh]   ">
            <div className="w-full h-full bg-black bg-opacity-40">
              <div className=" max-w-sm md:max-w-2xl items-center mx-auto text-center flex flex-col space-y-12 pt-60">
                <h2 className=" text-7xl md:text-9xl  font-extrabold">
                  Trinity Bank
                </h2>
                <h3 className=" text-2xl md:text-3xl text-center">
                  Trinity Bank challenged us to make a concept for a 84 story
                  building located in the middle of a city with a high
                  earthquake frequency. For this project we used curves to blend
                  design and stability to meet our objectives.
                </h3>
                <Link
                  className="bg-black flex space-x-3 text-2xl items-center px-8 py-4"
                  to="portfolio"
                >
                  See Our Portfolio
                  <BsFillArrowRightCircleFill className="ml-2" size={25} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[90vw] px-12 ">
          <div className="bg-2 w-full h-[90vh]   ">
            <div className="w-full h-full bg-black bg-opacity-40">
              <div className=" max-w-sm md:max-w-2xl items-center mx-auto text-center flex flex-col space-y-12 pt-60">
                <h2 className=" text-7xl md:text-9xl  font-extrabold">
                  Federal II Tower
                </h2>
                <h3 className=" text-2xl md:text-3xl text-center">
                  A sequel theme project for a tower originally built in the
                  1800s. We achieved this with a striking look of brutal
                  minimalism with modern touches.
                </h3>
                <Link
                  className="bg-black flex space-x-3 text-2xl items-center px-8 py-4"
                  to="portfolio"
                >
                  See Our Portfolio
                  <BsFillArrowRightCircleFill className="ml-2" size={25} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[90vw] px-12 ">
          <div className="bg-4 w-full h-[90vh]   ">
            <div className="w-full h-full bg-black bg-opacity-40">
              <div className=" max-w-sm md:max-w-2xl items-center mx-auto text-center flex flex-col space-y-12 pt-60">
                <h2 className=" text-7xl md:text-9xl  font-extrabold">
                  Seraph Station
                </h2>
                <h3 className=" text-2xl md:text-3xl text-center">
                  The Seraph Station project challenged us to design a unique
                  station that would transport people through time. The result
                  is a fresh and futuristic model inspired by space stations.
                </h3>
                <Link
                  className="bg-black flex space-x-3 text-2xl items-center px-8 py-4"
                  to="portfolio"
                >
                  See Our Portfolio
                  <BsFillArrowRightCircleFill className="ml-2" size={25} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <section className="container mx-auto lg:px-8">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="relative ">
            <Item image={D} />
          </div>
          <div className="relative ">
            <Item image={E} />
          </div>
          <div className="relative ">
            <Item image={F} />
          </div>
        </div>
      </section> */}
    </div>
  );
}
export default Header;
