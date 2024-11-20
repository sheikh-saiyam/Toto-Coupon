import { useLoaderData } from "react-router-dom";
import BrandsCard from "./BrandsCard";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Brand = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const coupons = useLoaderData();
  return (
    <div className="min-h-screen w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pb-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brands || ToTo-coupon</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center my-6">All Brands</h1>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search For A Brand........"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* coupons section */}
      <div className="space-y-4">
        {coupons.map((coupon) => (
          <BrandsCard coupon={coupon} key={coupon._id}></BrandsCard>
        ))}
      </div>
      {/* coupons section */}
    </div>
  );
};

export default Brand;
