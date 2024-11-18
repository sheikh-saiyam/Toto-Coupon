import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white p-6">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl flex flex-col justify-start md:flex-row md:justify-between items-center">
          {/* Project info */}
          <div className="text-center md:text-left mb-4 md:mb-0 md:w-4/12">
            <h2 className="text-2xl font-bold mb-4">Toto-Coupon</h2>
            <p className="text-sm">
              ToTo-Coupon is a simple platform that helps users in Bangladesh
              find the best discount coupons for top e-commerce stores. Easily
              browse and copy coupon codes to save money on a variety of
              products with just a click. Sign up using email or Google for
              quick access to the latest deals!!
            </p>
          </div>

          {/* Links section */}
          <div className="md:w-4/12 flex flex-col md:flex-row md:justify-between">
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/terms" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/terms" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social media & profile link */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-gray-300" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border mt-4 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl  " />
        <div className="mt-4 text-center text-lg font-bold">
          <p>&copy; 2024 ToTo-Coupon All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
