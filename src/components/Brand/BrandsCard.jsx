import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "animate.css";
/* eslint-disable react/prop-types */
const BrandsCard = ({ coupon }) => {
  const { _id, brand_name, rating, description, brand_logo, isSaleOn } = coupon;
  return (
    <div>
      <div className="space-y-4 md:space-y-0 md:flex items-center gap-4 p-4 border-2 rounded-xl">
        {/* coupon Logo */}
        <div className="md:w-4/12 p-5 rounded-lg border-2 relative">
          <div>
            <img src={brand_logo} alt={brand_name} className="w-full h-32" />
            <div className="absolute top-4 right-2">
              {isSaleOn ? (
                <button className="text-sm text-green-500 font-bold animate-bounce">
                  <span className="">Sale is on!</span>
                </button>
              ) : (
                <button className="text-sm text-red-500 font-bold">
                  Sale is off!
                </button>
              )}
            </div>
          </div>
        </div>

        {/* coupon Info */}
        <div className="md:w-6/12">
          <h2 className="text-2xl font-bold mb-2">{brand_name}</h2>
          <p title={description} className="text-gray-600 block lg:hidden">
            {description.slice(0, 200)}...{" "}
          </p>
          <p title={description} className="text-gray-600 hidden lg:block">
            {description.slice(0, 350)}...{" "}
          </p>
          <div className="flex items-center gap-2 my-2">
            <i className="text-yellow-400 mr-1 flex gap-1">
              {Array.from(
                {
                  length:
                    rating > 4.6 ? Math.round(rating) : Math.floor(rating),
                },
                (_, index) => (
                  <FaStar key={index} />
                )
              )}
            </i>
            <span className="text-gray-700 font-semibold">{rating}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-right md:w-2/12">
          <Link
            to={`/brand/${_id}`}
            className="px-4 py-2 btn w-full bg-primary text-white"
          >
            View Coupons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
