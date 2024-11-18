/* eslint-disable react/prop-types */
const BrandsCard = ({ coupon }) => {
  const {
    brand_name,
    rating,
    description,
    brand_logo,
    coupons,
    shop_Link,
    category,
    isSaleOn,
  } = coupon;
  return (
    <div>
      <div className="flex items-center p-4 border-2 rounded-xl">
        {/* coupon Logo */}
        <div className="w-4/12 p-4 rounded-lg border-2">
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-full h-32"
          />
        </div>

        {/* coupon Info */}
        <div className="w-8/12 px-4">
          <h2 className="text-xl font-semibold">{brand_name}</h2>
          <p className="text-gray-600">{description}</p>
          <div className="flex items-center mt-2">
            <i className="text-yellow-500 mr-1">⭐</i>
            <span className="text-gray-700">{rating}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-right">
          <button
            // onClick={() => handleViewCoupons(coupon)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            View Coupons
          </button>
          {isSaleOn && (
            <p className="mt-2 text-sm text-red-500 animate-bounce">
              Sale is on!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
