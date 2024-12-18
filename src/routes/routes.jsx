import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddNewCampaign from "../pages/AddNewCampaign";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllCampaigns from "../pages/AllCampaigns";
import MyCampaigns from "../pages/MyCampaigns";
import DetailsPage from "../pages/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import UpdateCampaign from "../pages/UpdateCampaign";
import MyDonation from "../pages/MyDonation";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "addCampaign",
        element: <AddNewCampaign></AddNewCampaign>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "campaigns",
        element: <AllCampaigns></AllCampaigns>,
      },
      {
        path: "campaign/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://fund-star-server.vercel.app/campaign/${params.id}`),
      },
      {
        path: "myCampaigns/:email",
        element: <MyCampaigns></MyCampaigns>,
        loader: ({params}) => fetch(`https://fund-star-server.vercel.app/myCampaigns/${params.email}`),
      },
      {
        path: `updateCampaign/:id`,
        element: <UpdateCampaign></UpdateCampaign>,
        loader: ({params}) => fetch(`https://fund-star-server.vercel.app/campaign/${params.id}`)
      },
      {
        path: `myDonations/:email`,
        element: <MyDonation></MyDonation>,
        loader: ({params}) => fetch(`https://fund-star-server.vercel.app/donation/${params.email}`)
      }
    ],
  },
]);

export default routes;
