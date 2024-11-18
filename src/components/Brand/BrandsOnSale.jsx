/* eslint-disable react/prop-types */
const BrandsOnSale = ({ coupon }) => {
  const { brand_logo, brand_name, coupons, category, isSaleOn } = coupon;
  return (
    <div>
        <div className="w-full p-4 border-2 border-primary rounded-2xl">
          <div className="p-4 border border-primary rounded-xl mb-2">
            <img className="w-full h-32" src={brand_logo} alt="" />
          </div>
          <div>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Brand: {brand_name}</h1>
              <h3 className="text-2xl font-semibold">Total Coupons: {coupons.length}</h3>
              <h3 className="text-lg font-semibold">Category: {category}</h3>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BrandsOnSale;
