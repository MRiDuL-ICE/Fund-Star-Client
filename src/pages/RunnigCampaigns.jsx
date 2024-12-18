import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const RunnigCampaigns = () => {
  const { loading } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState(null);
  useEffect(() => {
    fetch(`https://fund-star-server.vercel.app/runningCampaigns`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filteredCampaigns = data.filter((campaign) => {
          const campaignDeadline = new Date(campaign?.deadline);
          const currentDate = new Date();
          return campaignDeadline >= currentDate;
        });
        setCampaigns(filteredCampaigns);
        console.log(campaigns);
      });
  }, []);
  console.log(campaigns)


  return (
    <div className="p-8">
      <h2 className="text-5xl font-bold text-center text-[#6330F6] mb-2">
        Runnig Campaigns
      </h2>
      <h3 className="text-2xl mb-10 text-center font-bold">
        We are for{" "}
        <span style={{ color: "#6330F6", fontWeight: "bold" }}>
          <Typewriter
            words={["Humanity", "Dignity", "Socialization", "Empowerment"]}
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
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-4/5 mx-auto gap-8">
          {campaigns && campaigns.length > 0 ? (
            campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="w-[85%] rounded-lg border gap- h-[38rem] border-base-200 shadow-lg bg-base-100 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={campaign.imageURL}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col h-[30rem] py-14">
                  <h3 className="text-xl font-semibold text-[#6330F6] mb-4">
                    {campaign.title}
                  </h3>
                  <p className=" mb-4">Purpose: {campaign.type}</p>
                  <p className=" mb-4 truncate max-w-sm">
                    {campaign.description}
                  </p>
                  <p className="text-lg font-bold mb-4">
                    Minimum Donation: ${campaign.minDonation}
                  </p>
                  <p className=" mb-4">
                    Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                  </p>
                  <div className="text-center my-6 items-center mx-auto justify-center">
                  <Link to={`/campaign/${campaign._id}`}>
                    <button className="bg-[#6330F6] text-white px-6 py-2 rounded-md shadow hover:bg-[#7A47FA]">
                      See More
                    </button>
                  </Link>
                </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl">
              No upcoming campaigns available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RunnigCampaigns;
