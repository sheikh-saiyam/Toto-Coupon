import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Brand from "../components/Brand/Brand";
import BrandDetails from "../components/Brand/BrandDetails";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../components/Profile/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("/coupon.json"),
      },
      {
        path: "/brands",
        element: <Brand></Brand>,
        loader: () => fetch("/coupon.json"),
      },
      {
        path: "/brand/:id",
        element: (
          <PrivateRoutes>
            <BrandDetails></BrandDetails>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/coupon.json");
          const data = await res.json();
          const singleData = data.find((p) => p._id == params.id.trim());
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
      },
      {
        path: "/about",
        element: <h1 className="text-center text-3xl my-8">About Developer</h1>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1 className="flex justify-center items-center font-bold text-5xl">
        Error Page
      </h1>
    ),
  },
]);

export default router;
