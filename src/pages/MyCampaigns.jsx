import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState(null);
  const { setLoading, loading, user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  console.log(user?.email)

  let myCampaigns = data;
  

  const handleDelete = (id) => {
    console.log(id)
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if(result.isConfirmed){
        fetch(`https://fund-star-server.vercel.app/campaign/${id}`,{
          method: 'delete',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount > 0) {
            const rem = myCampaigns.filter(campaign => campaign?._id !== id)
            myCampaigns = rem
            console.log(myCampaigns)
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success",
            });
          }
        })
      }
    })
  } 


  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-[#6330F6] mb-2">
        My Campaigns
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
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-5/7 mx-auto gap-4">
          {myCampaigns?.map((campaign) => (
            <div
              key={campaign._id}
              className="w-[95%] rounded-lg gap-5 h-[36rem] border border-base-300 shadow-lg bg-base-100 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
                <div className="text-center my-6 items-center mx-auto justify-center gap-6 flex">
                  <Link to={`/updateCampaign/${campaign?._id}`}><button className="bg-[#6330F6] text-white px-6 py-2 rounded-md shadow hover:bg-[#7A47FA]">
                    Update
                  </button></Link>
                  <button onClick={() => handleDelete(campaign?._id)} className="bg-[#f63030] text-white px-6 py-2 rounded-md shadow hover:bg-[#fa475f]">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCampaigns;
