import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import AboutUsBanner from "../Pages/AboutUs/AboutUsBanner";
import BlogDetailsPage from "../Pages/Blogs/BlogDetailsPage";
import Blogs from "../Pages/Blogs/Blogs/Blogs";
import EarlyBirdSale from "../Pages/EarlyBirdSale/EarlyBirdSale/EarlyBirdSale";
import Home from "../Pages/Home/Home/Home";
import PlaceDetailPage from "../Pages/PlaceDetailPage/PlaceDetailPage/PlaceDetailPage";
import TripDetailsInsidePlace from "../Pages/PlaceDetailPage/PlaceDetailPage/TripDetailsInsidePlace";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage/TripDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trip/:id",
        element: <TripDetailsPage />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:4000/trip/single-trip/${params.id}`);
        },
      },
      {
        path: "place/trip/:id",
        element: <TripDetailsInsidePlace />,
        loader: async ({ params }) => {
          return fetch(
            `http://localhost:4000/trip/single-trip/${params.id}`
          );
        },
      },
      {
        path: "/place/:name",
        element: <PlaceDetailPage />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:4000/trip/${params.name}`);
        },
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailsPage />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:4000/blog/single-blog/${params.id}`);
        },
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/early-bird-sale",
        element: <EarlyBirdSale />,
      },
    ],
  },
]);

export default routes;
