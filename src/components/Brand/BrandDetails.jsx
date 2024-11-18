import { useEffect } from "react";
import { BiSolidCoupon } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const details = useLoaderData();
  const { brand_name, brand_logo, coupons, shop_Link } = details;

  //   const { coupon_code, expiry_date, condition, coupon_type , description} = coupons;
  return (
    <div className="min-h-screen w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
    
    </div>
  );
};

export default BrandDetails;
