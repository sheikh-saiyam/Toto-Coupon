import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = ({ coupon }) => {
  return (
    <div className="pb-24">
      <h1 className="text-center text-4xl font-bold">Top brands</h1>
      <div className="border mt-8 rounded-xl p-4">
        <Marquee pauseOnHover={true} speed={50}>
          <div className="flex ">
            {coupon.map((item) => (
              <Link key={item._id} to={`/brand/${item._id}`}>
                <div className="border p-4 rounded-lg mr-4 md:mr-8">
                  <img
                    className="w-48 h-16 md:h-24"
                    src={item.brand_logo}
                    alt=""
                  />
                </div>
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
