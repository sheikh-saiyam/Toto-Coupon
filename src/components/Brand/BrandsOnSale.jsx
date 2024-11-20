import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandsOnSale = ({ coupon }) => {
  const { brand_logo, brand_name, coupons, category } = coupon;
  return (
    <div className="min-h-fit">
      <div className="w-full h-full p-4 border-2 rounded-2xl ">
        <div className="p-4 border rounded-xl mb-2">
          <Link to={"/brands"}>
            <img className="w-full h-32" src={brand_logo} alt="" />
          </Link>
        </div>
        <div className="text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{brand_name}</h1>{" "}
            <h3 className="text-xl font-semibold  ">Category: {category}</h3>
            <h3 className="text-lg font-semibold text-gray-700">
              Total Coupons: {coupons.length}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsOnSale;
