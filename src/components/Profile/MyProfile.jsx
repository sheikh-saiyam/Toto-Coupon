/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="mx-auto w-11/12 lg:w-8/12 my-12 rounded-xl py-12 bg-gradient-to-r to-secondary  from-primary flex flex-col justify-center items-center animate__animated animate__backInLeft">
        {/* Cover Section */}
        <div className="flex flex-col gap-y-2 justify-center text-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-lg lg:leading-[50px] tracking-wide">
            Hello {}
            <span className="font-semibold">
              <Typewriter
                words={[user.displayName]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold flex gap-2 items-center tracking-widest">
            Welcome to Your profile
          </h2>
        </div>

        {/* User Info Card */}
        <div className="flex justify-center mt-8 w-full">
          <div className="w-11/12 lg:w-7/12 bg-white rounded-lg shadow-md p-6">
            <img
              src={user.photoURL}
              alt={`${user.displayName}'s photo`}
              className="w-40 h-40 mx-auto rounded-full shadow-lg"
            />
            <h2 className="text-center text-2xl font-semibold mt-4">
              {user.displayName}
            </h2>
            <p className="text-center text-gray-600 mt-2">{user.email}</p>

            <div className="text-center mt-4">
              <Link to={"/profile/update"} className="btn btn-wide text-white bg-primary text-lg font-semibold">
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
