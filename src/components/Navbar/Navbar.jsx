import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose, IoHomeOutline } from "react-icons/io5";
const Navbar = () => {
  const links = [
    <>
      <NavLink
        to={"/"}
        key="home"
        className={({ isActive }) =>
          isActive
            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
            : "flex gap-1 items-center"
        }
      >
        <IoHomeOutline />
        Home
      </NavLink>

      <NavLink
        to={"/brands"}
        key="brands"
        className={({ isActive }) =>
          isActive
            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
            : "flex gap-1 items-center"
        }
      >
        Brands
      </NavLink>

      <NavLink
        to={"/profile"}
        key="profile"
        className={({ isActive }) =>
          isActive
            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
            : "flex gap-1 items-center"
        }
      >
        My Profile
      </NavLink>

      <NavLink
        to={"/about"}
        key="about"
        className={({ isActive }) =>
          isActive
            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
            : "flex gap-1 items-center"
        }
      >
        About Dev
      </NavLink>
    </>,
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="bg-bgPrimary py-4">
      <div className="navbar gap-8 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              onClick={toggleMenu}
              className="btn border-primary border-2 bg-transparent mr-3 lg:hidden text-primary"
            >
              {isOpen ? (
                <IoClose className="text-2xl" />
              ) : (
                <FaBars className="text-2xl"></FaBars>
              )}
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu w-60 dropdown-content bg-base-100 rounded-box z-[1] mt-4 p-4 border-2 border-primary space-y-3"
              >
                <li className="font-semibold">{links}</li>{" "}
                <Link
                  to={"/"}
                  className="btn bg-primary font-semibold text-lg text-white"
                >
                  Registration
                </Link>
              </ul>
            )}
          </div>
          <Link>
            <img className="w-full h-20 md:w-52 " src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-10 text-lg  flex items-center">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center gap-3">
            <Link
              to={"/"}
              className="btn bg-primary font-semibold text-lg text-white px-8"
            >
              Login
            </Link>
            <Link
              to={"/"}
              className="btn bg-primary font-semibold text-lg text-white hidden md:flex"
            >
              Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
