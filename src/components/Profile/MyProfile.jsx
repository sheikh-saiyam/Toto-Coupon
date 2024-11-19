import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="py-20 bg-gradient-to-r to-primary via-secondary from-primary flex flex-col justify-center items-center">
        {/* Cover Section */}
        <div className="flex justify-center text-center">
          <h1 className="text-white text-4xl font-extrabold drop-shadow-lg leading-[50px]">
            Hello<span className="font-semibold">"{user.displayName}"</span>
            <br />
            Welcome to Your profile
          </h1>
        </div>

        {/* User Info Card */}
        <div className="flex justify-center  mt-8">
          <div className=" w-full bg-white rounded-lg shadow-md p-6">
            <img
              src={user.photoURL}
              alt={`${user.displayName}'s photo`}
              className="w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h2 className="text-center text-xl font-semibold mt-4">
              {user.displayName}
            </h2>
            <p className="text-center text-gray-600 mt-2">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
