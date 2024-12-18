import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const { user } = useContext(AuthContext);
  const campaign = useLoaderData()
  const naviagte = useNavigate()
  console.log(campaign)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const updateData = Object.fromEntries(formData.entries());
    console.log(campaign?._id)
    

    fetch(`https://fund-star-server.vercel.app/updateCampaign/${campaign._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            title: "Success!",
            text: "Campaign Updated Successfully!",
            icon: "success",
          });
          e.target.reset();
          naviagte(-1)
        })
        .catch((error) => {
          console.error("Error updating campaign:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to update campaign.",
            icon: "error",
          });
        });
  }


  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <form
          onSubmit={handleSubmit}
          className="bg-base-100 shadow-xl border border-base-300 rounded-lg p-8 md:w-[60rem] mx-auto"
        >
          <h2 className="text-3xl md:text-5xl  font-extrabold text-[#6330F6] text-center mb-8">
            Update Campaign
          </h2>


          <div className="mb-6">
            <label
              htmlFor="imageURL"
              className="block text-sm font-bold  mb-2"
            >
              Campaign Thumbnail (Image URL)
            </label>
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              defaultValue={campaign.imageURL}
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-base-100 focus:ring-2 focus:ring-[#6330F6]"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-bold  mb-2"
            >
              Campaign Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={campaign.title}
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-base-100 focus:ring-2 focus:ring-[#6330F6]"
              placeholder="Enter campaign title"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="type"
              className="block text-sm font-bold  mb-2"
            >
              Campaign Type
            </label>
            <select
              id="type"
              name="type"
              defaultValue={campaign.type}
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-base-100 focus:ring-2 focus:ring-[#6330F6]"
              required
            >
              <option value="Personal Issue">Personal Issue</option>
              <option value="Startup">Startup</option>
              <option value="Business">Business</option>
              <option value="Creative Ideas">Creative Ideas</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-bold  mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={campaign.description}
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-base-100 focus:ring-2 focus:ring-[#6330F6]"
              rows="4"
              placeholder="Enter campaign description"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              htmlFor="minDonation"
              className="block text-sm font-bold  mb-2"
            >
              Minimum Donation Amount
            </label>
            <input
              type="number"
              id="minDonation"
              name="minDonation"
              defaultValue={campaign.minDonation}
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-base-100 focus:ring-2 focus:ring-[#6330F6]"
              placeholder="Enter minimum donation amount"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="deadline"
              className="block text-sm font-bold  mb-2"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              defaultValue={campaign.deadline}
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-base-100 focus:ring-2 focus:ring-[#6330F6]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-bold  mb-2"
            >
              User Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email}
              className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="userName"
              className="block text-sm font-bold  mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#6330F6] text-white px-8 py-3 rounded-md shadow-lg hover:bg-[#FFDE59] hover:text-black transition-all text-lg font-semibold"
            >
              Update Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaign;
