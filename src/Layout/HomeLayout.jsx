import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import TopBrands from "../components/Brand/TopBrands";
import BrandsOnSale from "../components/Brand/BrandsOnSale";
import MobileApp from "../components/ExtraSection/MobileApp";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const HomeLayout = () => {
  const couponData = useLoaderData();
  const brandsOnSale = couponData.filter((coupon) => coupon.isSaleOn);
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
      <Banner></Banner>
      <TopBrands></TopBrands>
      {/* brands on sale */}
      <div className="pb-24">
        <h1 className="text-4xl font-bold text-center">Brands On Sale</h1>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brandsOnSale.map((coupon) => (
            <BrandsOnSale coupon={coupon} key={coupon._id}></BrandsOnSale>
          ))}
        </div>
      </div>
      {/* brands on sale */}
      {/* get out mobile app */}
      <MobileApp></MobileApp>
      {/* get out mobile app */}
    </div>
  );
};

export default HomeLayout;
