import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const MyDonation = () => {
  const { user, loading } = useContext(AuthContext);
  const donations = useLoaderData();
  console.log(donations);
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-[#6330F6] mb-4">
        My Donations
      </h2>
      <h3 className="text-2xl mb-10 text-center font-bold">
        We are for{" "}
        <span style={{ color: "#6330F6", fontWeight: "bold" }}>
          <Typewriter
            words={["Humaninity", "Dignity", "Socialization", "Empowerment"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h3>
      {loading ? (
        <p className="text-center h-screen w-screen mx-auto justify-center items-center mt-80">
          <span className="loading loading-bars loading-lg"></span>
        </p>
      ) : donations?.length === 0 ? (
        <p className="text-center text-xl  mt-20">
          No donations found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
          {donations?.map((donation) => (
            <div
              key={donation._id}
              className="bg-base-100 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <img
                src={donation.campImg}
                alt={donation.campTitle}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 py-8">
                <h3 className="text-xl font-bold text-[#6330F6] mb-2">
                  {donation.campTitle}
                </h3>
                <p className=" mb-2">
                  <strong>Descriptions:</strong> {donation.campDes}
                </p>
                <p className=" mb-2">
                  <strong>Purpose:</strong> {donation.campType}
                </p>
                <p className="text-gray-700 mb-4 truncate">
                  {donation.description}
                </p>
                <p className="text-lg font-bold mb-2">
                  Amount Donated: ${donation.campMinDonation}
                </p>
                <p className="">
                  <strong>Donor:</strong> {donation.naame} ({donation.email})
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonation;
