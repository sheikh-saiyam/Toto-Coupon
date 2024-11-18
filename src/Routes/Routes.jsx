import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Brand from "../components/Brand/Brand";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("/coupon.json")
      },
      {
        path: "/brands",
        element: <Brand></Brand>,
        loader: () => fetch("/coupon.json")
      }
    ],
  },
]);

export default router;
