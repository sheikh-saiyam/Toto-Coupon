import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandsOnSale = ({ coupon }) => {
  const { brand_logo, brand_name, coupons, category } = coupon;
  return (
    <div>
      <div className="w-full p-4 border-2 rounded-2xl">
        <div className="p-4 border rounded-xl mb-2">
          <Link to={"/brands"}>
            <img className="w-full h-32" src={brand_logo} alt="" />
          </Link>
        </div>
        <div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Brand: {brand_name}</h1>
            <h3 className="text-2xl font-semibold">
              Total Coupons: {coupons.length}
            </h3>
            <h3 className="text-lg font-semibold">Category: {category}</h3>
            <Link to={"/brands"} className="px-4 py-2 btn btn-wide bg-transparent border-2 text-primary border-primary font-bold">
              View Brands
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsOnSale;
