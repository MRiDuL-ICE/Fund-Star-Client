import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../assets/img/pexels-lagosfoodbank-9090750.jpg";
import img2 from "../assets/img/pexels-ron-lach-9037596.jpg";
import img3 from "../assets/img/pexels-lagosfoodbank-9823013.jpg";
import img4 from "../assets/img/pexels-ahmed-akacha-3313934-6729257.jpg";
import About from "./About";
import WhyUs from "./WhyUs";
import RunnigCampaigns from "./RunnigCampaigns";

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="py-2">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Add your slides here */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-white">
              <div className="w-[65%] md:w-[55%] lg:w-[45%]   p-6">
                <h1 className="mb-5 text-6xl font-bold">
                  A Platform for All Causes
                </h1>
                <p className="mb-5">
                  Whether you're raising funds for a personal need, a creative
                  venture, or an ambitious startup, our platform welcomes all
                  types of projects. From medical emergencies to groundbreaking
                  innovations, we cater to diverse goals with equal support.
                </p>
                <button className="btn btn-primary bg-[#6330F6] border-none rounded-md text-white">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-white">
              <div className="w-[65%] md:w-[55%] lg:w-[45%]  p-6">
                <h1 className="mb-5 text-6xl font-bold">
                  Building Connections Between Creators and Supporters
                </h1>
                <p className="mb-5">
                  We bridge the gap between dreamers and backers. Creators can
                  present their vision through engaging campaigns, while
                  supporters can contribute to causes that inspire them. It’s
                  about creating a shared journey toward success.
                </p>
                <button className="btn btn-primary bg-[#6330F6] border-none rounded-md text-white">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-white">
              <div className="w-[65%] md:w-[55%] lg:w-[45%]  p-6">
                <h1 className="mb-5 text-6xl font-bold">
                  Support Every Step of the Way
                </h1>
                <p className="mb-5">
                  Our dedicated team is here to guide you through every phase of
                  your crowdfunding journey. Whether it's crafting your
                  campaign, reaching your audience, or achieving your goals,
                  we’re committed to your success.
                </p>
                <button className="btn btn-primary bg-[#6330F6] border-none rounded-md text-white">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${img4})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-white">
              <div className="w-[65%] md:w-[55%] lg:w-[45%]  p-6">
                <h1 className="mb-5 text-6xl font-bold">
                Impact Beyond Funding
                </h1>
                <p className="mb-5">
                  Our dedicated team is here to guide you through every phase of
                  your crowdfunding journey. Whether it's crafting your
                  campaign, reaching your audience, or achieving your goals,
                  we’re committed to your success.
                </p>
                <button className="btn btn-primary bg-[#6330F6] border-none rounded-md text-white">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <RunnigCampaigns></RunnigCampaigns>
      <About></About>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
