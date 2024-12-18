import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">

          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#6330F6]">
              Empowering Dreams, Together
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              At <strong className="text-[#6330F6]">Fund Star</strong>, we believe in the power of ideas and the strength of community. Whether it’s a creative project, a personal cause, or a groundbreaking startup, we’re here to help you bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">

            <div className="text-center bg-gradient-to-b from-[#6330F6] to-blue-400 text-white p-6 rounded-md py-8">
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-base-100 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#6330F6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3-.5 3-2-1.5-2-3-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-4.485-2.243-7.5-7.5-7.5s-7.5 3.015-7.5 7.5c0 4.485 2.243 7.5 7.5 7.5s7.5-3.015 7.5-7.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessible to All</h3>
              <p className="">
                A platform designed for everyone—startups, creatives, and individuals with meaningful causes.
              </p>
            </div>


            <div className="text-center bg-gradient-to-b from-[#6330F6] to-blue-400 text-white p-6 rounded-md py-8">
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-base-100 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#6330F6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h3v11H3V10zM9 21h3V10H9v11zm6 0h3V10h-3v11zm6 0h3V10h-3v11z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Funding</h3>
              <p className="">
                Real-time tracking ensures transparency and builds trust for contributors and campaigners.
              </p>
            </div>


            <div className="text-center bg-gradient-to-b from-[#6330F6] to-blue-400 text-white p-6 rounded-md py-8">
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-base-100 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#6330F6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.5 15H5.25a.75.75 0 000 1.5h5.586a.75.75 0 01.53.22l2.72 2.72V6.06A5.06 5.06 0 008.5 11h-5v1.5h5v1.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="">
                Connect with a community of supporters from around the world who share your vision.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to={'/campaigns'}
              className="bg-[#6330F6] text-white px-8 py-4 rounded-md shadow-lg hover:bg-[#FFDE59] hover:text-white transition-all text-lg font-semibold"
            >
              Start Your Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
