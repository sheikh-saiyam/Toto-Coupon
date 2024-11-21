import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSolidCoupon } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const BrandDetails = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const details = useLoaderData();
  const { brand_name, brand_logo, coupons, shop_Link, category, rating } =
    details;

  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coupon-Page || ToTo-coupon</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="space-y-4 sm:space-y-0 sm:flex gap-4">
          <div className="border p-4">
            <img className="w-full sm:w-64 h-32" src={brand_logo} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-3xl mt-0">
              {brand_name} All Coupon Code 2024
            </h1>
            <h3 className="my-2 text-gray-600 font-semibold text-lg">
              Category: {category}
            </h3>
            <h1 className="flex items-center text-gray-600 font-semibold text-lg gap-2">
              Rating:
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
            </h1>
          </div>
        </div>
      </div>
      {/* coupon section */}
      <div className="pt-8 grid gird-col-1 lg:grid-cols-2 gap-6">
        {coupons.map((coupon) => (
          <div key={coupon.coupon_code} className="w-full md:flex">
            <div className="bg-primary md:w-5/12 p-4 flex justify-center items-center text-center">
              <h1 className="text-white font-bold text-2xl">
                {coupon.description}
              </h1>
            </div>
            <div className="p-6 md:w-7/12 border-t-0 md:border-l-0 border-4 md:border-[3px]">
              <div>
                <div className="space-y-2 border-primary border-2 p-6 md:p-4 text-center">
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
                    className="btn h-full flex items-center text-lg rounded-none w-full font-semibold bg-primary text-white hover:text-primary"
                  >
                    <BiSolidCoupon />
                    View Coupon Code
                  </button>
                </div>
              </div>
              {/* modal */}
              <dialog id={`modal_${coupon.coupon_code}`} className="modal">
                <div className="modal-box rounded-lg sm:p-12 z-50">
                  <div className="modal-action mt-0 mb-6 flex gap-2 justify-between items-center">
                    <div>
                      <h1 className="font-bold text-xl">
                        Coupon Type{" "}
                        <span className="text-gray-700 font-semibold">
                          : {coupon.coupon_type}
                        </span>
                      </h1>
                    </div>
                    <form method="dialog">
                      <button className="btn border-2 border-gray-300 bg-transparent flex items-center text-center text-lg btn-circle ">
                        <IoClose className="text-xl font-bold "></IoClose>
                      </button>
                    </form>
                  </div>
                  <div className="w-full">
                    <div className="join join-vertical sm:join-horizontal w-full">
                      <h1 className="join-item sm:w-1/2 flex items-center text-center justify-center select-none bg-white border-2 sm:border-r-0 border-[#cccccc] p-2 text-xl font-semibold">
                        {coupon.coupon_code}
                      </h1>
                      <button
                        onClick={() => {
                          document.getElementById(
                            `modal_${coupon.coupon_code}`
                          );
                          navigator.clipboard
                            .writeText(coupon.coupon_code)
                            .then(() => {
                              toast.success("Coupon Copied!");
                              setIsCopied(true);
                              setTimeout(() => setIsCopied(false), 3000);
                            });
                        }}
                        className="join-item btn p-2 sm:w-1/2 bg-primary border-primary border-2 border-l-0 text-white text-lg flex items-center"
                      >
                        <LuClipboardList />
                        {isCopied ? "Copied" : "Copy Code"}
                      </button>
                    </div>{" "}
                    {isCopied && (
                      <button className="mt-6 text-primary tex-lg font-bold bg-green-100 border border-primary p-2 rounded-xl w-full hover:bg-green-100 hover:border-primary">
                        Coupon Copied
                      </button>
                    )}
                    <div>
                      <Link
                        to={shop_Link}
                        target="_blank"
                        className="btn w-full mt-6 text-primary border-primary border-2 bg-transparent text-lg font-bold"
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
