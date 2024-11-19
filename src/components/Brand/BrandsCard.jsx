import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import 'animate.css';
/* eslint-disable react/prop-types */
const BrandsCard = ({ coupon }) => {
  const {
    _id,
    brand_name,
    rating,
    description,
    brand_logo,
    isSaleOn,
  } = coupon;
  return (
    <div>
      <div className="space-y-4 md:space-y-0 md:flex items-center gap-4 p-4 border-2 rounded-xl">
        {/* coupon Logo */}
        <div className="md:w-4/12 p-4 rounded-lg border-2">
          <img src={brand_logo} alt={brand_name} className="w-full h-32" />
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
          {isSaleOn ? (
            <button className="mt-2 btn w-full text-sm text-green-500 bg-green-100 border-2 border-green-500">
              <span className="animate__animated animate__bounce"> Sale is on!</span>
            </button>
          ) : (
            <button className="mt-2 btn w-full text-sm text-red-500 bg-red-100 border-2 border-red-500">
              Sale is off!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
