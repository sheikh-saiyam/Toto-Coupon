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
      <div>
        <div className="space-y-4 sm:space-y-0 sm:flex gap-4">
          <div className="border p-4">
            <img className="w-full sm:w-64 h-32" src={brand_logo} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-3xl">
              {brand_name} All Coupon Code 2024
            </h1>
          </div>
        </div>
      </div>
      {/* coupon section */}
      <div className="py-8 grid gird-col-1 md:grid-cols-2 gap-6 ">
        {coupons.map((coupon) => (
          <div key={coupon.coupon_code} className=" w-full flex">
            <div className="bg-primary w-5/12 p-4 flex justify-center items-center text-center">
              <h1 className="text-white font-bold text-2xl">
                {coupon.description}
              </h1>
            </div>
            <div className="p-6 w-7/12 border-l-0 border-[3px]">
              <div>
                <div className="space-y-2 border-primary border-2 p-4 text-center">
                  <h1 className="text-xl font-bold ">
                    Condition: {coupon.condition}
                  </h1>
                  <h1 className="text-lg font-semibold text-gray-600">
                    Expiry Date: {coupon.expiry_date}
                  </h1>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById(`modal_${coupon.coupon_code}`)
                        .showModal()
                    }
                    className="btn flex items-center text-lg gap-2 rounded-none w-full font-semibold bg-primary text-white hover:text-primary"
                  >
                    <BiSolidCoupon />
                    View Coupon Code
                  </button>
                </div>
              </div>
              {/* modal */}
              <dialog
                id={`modal_${coupon.coupon_code}`}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="modal-action mt-0 mb-6">
                    <form method="dialog">
                      <button className="btn text-3xl font-bold btn-active">
                        <IoClose></IoClose>
                      </button>
                    </form>
                  </div>
                  <div className="w-full">
                    <div className="join join-horizontal w-full">
                      <h1 className="join-item w-1/2 flex items-center text-center justify-center select-none bg-primary text-white px-2 text-2xl font-semibold">
                        Code: {coupon.coupon_code}
                      </h1>
                      <button
                        onClick={() =>
                          navigator.clipboard
                            .writeText(coupon.coupon_code)
                            .then(() => alert("Copied!"))
                        }
                        className="join-item btn p-4 w-1/2"
                      >
                        Copy Coupon Code
                      </button>
                    </div>
                    <div>
                      <Link
                        to={shop_Link}
                        target="_blank"
                        className="btn w-full mt-6"
                      >
                        Use Now
                      </Link>
                    </div>
                  </div>
                </div>
              </dialog>
              {/* modal */}
            </div>
          </div>
        ))}
      </div>
      {/* coupon section */}
    </div>
  );
};

export default BrandDetails;
