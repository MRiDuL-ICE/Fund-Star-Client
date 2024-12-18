import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaSortAlphaDown } from "react-icons/fa";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState(null);
  const { setLoading, loading } = useContext(AuthContext);
  const [sortedCampaigns , setSortedCampaigns ] = useState(null)

  useEffect(() => {
    fetch("https://fund-star-server.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);


  const handleSorting = () => {
    console.log('sort')
    setLoading(false)
    const sort = [...campaigns].sort((a,b) => a.minDonation - b.minDonation)
    setCampaigns(sort)
  }


  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-[#6330F6] mb-2">
        All Campaigns
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
      <button onClick={handleSorting} className="bg-[#6330F6] text-white px-6 py-2 rounded-md shadow  flex gap-2 text-xl w-32 my-10 hover:bg-[#7A47FA] justify-center items-center">
      <FaSortAlphaDown />Sort
                    </button>
      {loading ? (
        <p className="text-center h-screen w-screen mx-auto justify-center items-center mt-80">
          <span className="loading loading-bars loading-lg"></span>
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-5/7 mx-auto gap-6">
          {campaigns?.map((campaign) => (
            <div
              key={campaign.id}
              className="w-[95%] rounded-lg border gap-8 h-[36rem] border-base-200 shadow-lg bg-base-100 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
                <p className=" mb-4">Purpose: {campaign?.type}</p>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCampaigns;
