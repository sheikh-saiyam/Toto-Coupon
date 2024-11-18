import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
  return (
    <div className="pb-24">
      <h1 className="text-center text-4xl font-bold">Top brands</h1>
      <div className="border mt-8 rounded-xl p-4">
        <Marquee pauseOnHover={true} speed={50}>
          <div className="flex gap-8">
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/4mQp5rK/800px-Daraz-Logo.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/LtnsDz7/foodpanda-logo-RGB-horizontal.webp"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/nCGBbh3/startech-logo-0-BF29-AE753-seeklogo-com.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/sJtgQFM/181544.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/NjQfKVw/logo-green-af18cf83.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/0Yg7Q4Q/pseo-HC0hf2ff-Dcde-Nlojvrr0j-TQKxrz-1-Uo-U10-FQHmm-Nw-Gg-Vwnx-VBZTUK4x2cewv-MBg.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg ">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/SXzSYm5/Chaldal-Brand-ID-2021.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/brands"}>
              <div className="border p-4 rounded-lg mr-8">
                <img
                  className="w-48 h-24"
                  src="https://i.ibb.co.com/vX0j7SV/615187ac49391-Logo-Amdadul-Hoque.png"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
