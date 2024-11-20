import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import footerImage from "../../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="py-12 bg-primary w-full">
        <div>
          <img className="mx-auto h-44 w-fit" src={footerImage} alt="" />
        </div>
        <footer>
          <div className="space-y-8 md:flex gap-12 flex-wrap md:space-y-0 justify-between text-white py-10 px-4 mx-auto w-11/12 md:w-10/12 max-w-screen-2xl ">
            <nav>
              <div className="flex space-x-3 items-center">
                <img src={footerImage} alt="" className="w-12" />
                <h1 className="text-3xl font-bold">
                  <a href="index.html">Toto-Coupon</a>
                </h1>
              </div>
              <div className="space-y-3 mt-4 text-white max-w-sm">
                <p>
                  ToTo-Coupon is a simple platform that helps users in
                  Bangladesh find the best discount coupons for top e-commerce
                  stores. Easily browse and copy coupon codes to save money on a
                  variety of products with just a click. Sign up using email or
                  Google for quick access to the latest deals!!
                </p>
              </div>
            </nav>
            <div className="flex justify-between gap-12 flex-wrap">
              <nav className="space-y-3">
                <h6 className="text-2xl font-bold">Quick Links</h6>
                <li className="list-none text-white">Home</li>
                <li className="list-none text-white">About us</li>
                <li className="list-none text-white">Service</li>
                <li className="list-none text-white">Contact</li>
              </nav>
              <nav className="space-y-3">
                <h6 className="text-2xl font-bold">Legal</h6>
                <li className="list-none text-white">Terms of Service</li>
                <li className="list-none text-white">Privacy Policy</li>
                <li className="list-none text-white">Cookie Policy</li>
                <li className="list-none text-white">FAQ</li>
              </nav>
            </div>
            <div>
              <h6 className="text-2xl font-bold">Subscribe</h6>
              <p className="space-y-3 mt-4 text-white">
                Subscribe to our newsletter for the <br /> latest Coupons
                updates.
              </p>
              <fieldset className="hidden sm:block form-control w-80 mt-4">
                <div className="join">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered join-item border-4 border-white text-black
                    "
                  />
                  <button className="px-4 font-semibold text-white btn rounded-r-xl rounded-l-none bg-primary border-2">
                    Subscribe
                  </button>
                </div>
              </fieldset>
              <fieldset className=" sm:hidden form-control mt-4">
                <div className="flex flex-col join join-vertical">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered join-item border-4 border-white text-black"
                  />
                  <button className="px-4 py-3 join-item font-semibold text-white btn rounded-xl bg-primary border-2">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="pb-10 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Find Us On</h2>
            <div className="flex justify-center space-x-8 mt-4 md:mt-0">
              <a>
                <FaFacebook className="text-2xl hover:text-gray-300" />
              </a>
              <a>
                <FaTwitter className="text-2xl hover:text-gray-300" />
              </a>
              <a>
                <FaInstagram className="text-2xl hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/sheikh-saiyam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>
        </footer>

        {/* Copyright */}
        <hr className="border mt-4 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl  " />
        <div className="mt-4 text-center text-white text-lg font-bold">
          <p>&copy; 2024 ToTo-Coupon All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
