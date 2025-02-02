import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Brand from "../components/Brand/Brand";
import BrandDetails from "../components/Brand/BrandDetails";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../components/Profile/MyProfile";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import UpdateProfile from "../components/Profile/UpdateProfile";
import ForgetPassword from "../Authentication/ForgetPassword";
import AboutDev from "../components/ExtraSection/AboutDev";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile/update",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <AboutDev></AboutDev>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
