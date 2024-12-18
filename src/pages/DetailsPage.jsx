import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const campaign = useLoaderData()
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  console.log(campaign)
  console.log(campaign._id)

  const handleDonate = (e) => {
    e.preventDefault()
    const campTitle = campaign.title;
    const campImg = campaign.imageURL;
    const campType = campaign.type;
    const campDes = campaign.description;
    const campMinDonation = campaign.minDonation;
    const email = user?.email
    const name = user?.displayName
    const data = {name, email, campImg, campTitle, campDes, campType, campMinDonation};
    fetch(`https://fund-star-server.vercel.app/donate`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      const filterDate = new Date(campaign?.deadline)
      const currentDate = new Date()
      if(filterDate >= currentDate){
        Swal.fire({
          icon: "success",
          title: "Donation Successful!",
          text: "You have successfully contributed.",
          confirmButtonColor: "#6330F6",
        })
        navigate(-1)
      }
      else{
        Swal.fire({
          title: "Deadline Over!",
          text: "Failed to donate.",
          icon: "error",
        });
      }
      
    })
    .catch(err => {
      console.log(err)
      Swal.fire({
        title: "Error!",
        text: "Failed to donate.",
        icon: "error",
      });
    })
  }


  if (!campaign) {
    return <p className="text-center text-red-700">Campaign not found.</p>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-lg rounded-lg overflow-hidden">
        <img
          src={campaign.imageURL}
          alt={campaign.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-[#6330F6] mb-4">{campaign.title}</h2>
          <p className=" mb-4">
            <strong>Type:</strong> {campaign.type}
          </p>
          <p className=" mb-4">
            <strong>Description:</strong> {campaign.description}
          </p>
          <p className=" mb-4">
            <strong>Minimum Donation:</strong> ${campaign.minDonation}
          </p>
          <p className=" mb-4">
            <strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}
          </p>
          <p className=" mb-4">
            <strong>Created By:</strong> {campaign.userName} ({campaign.email})
          </p>
          <div className="text-center">
            <button
              className="bg-[#6330F6] text-white px-6 py-2 rounded-md shadow hover:bg-[#7A47FA]"
              onClick={handleDonate}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
