import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

const Register = () => {
  const { setUser, createNewUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createNewUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        updateUserProfile({ displayName: name, photoURL: photo });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log({ name, photo, email, password });
  };

  // function for google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   for toggle password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="bg-base-200">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-12 flex flex-col-reverse md:flex md:flex-row">
          <div className="bg-white py-12 px-8 md:w-7/12">
            <div className="mb-4">
              <h1 className="flex items-center gap-2 text-3xl font-bold">
                <LuLogIn />
                Register
              </h1>
            </div>
            <div>
              <button
                onClick={handleGoogleLogin}
                className="btn bg-yellow-400 border-none w-full rounded-full 
                 flex gap-3 items-center text-lg text-white font-semibold"
              >
                <FaGoogle className="text-xl"></FaGoogle> Register By Google
              </button>
            </div>
            <div className="divider font-semibold">Or</div>
            <form onSubmit={handleRegister} className="card-body p-0 gap-0">
              {/* name & photo */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="form-control">
                  <label className="label px-0">
                    <span className="font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label px-0">
                    <span className="font-semibold">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo Url"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* name & photo */}
              {/* email & password */}
              <div className="form-control">
                <label className="label px-0">
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label px-0">
                  <span className="font-semibold">Password</span>
                </label>
                 //   for toggle password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
              </div>
              {/* button div */}
              <div className="form-control mt-4">
                <button className="btn w-full text-lg font-bold text-white bg-primary">
                  Register
                </button>
              </div>
              {/* button div */}
            </form>
          </div>
          <div className="bg-primary py-12 px-6 md:w-5/12 flex flex-col justify-center items-center text-center">
            <div className="text-white space-y-2 md:space-y-4">
              <h1 className="font-bold text-3xl md:text-4xl">
                Welcome to Register Page
              </h1>
              <p className="font-semibold text-lg md:text-xl">
                Already have an account
              </p>
              <Link
                to={"/login"}
                className="bg-transparent border-2 border-white btn w-full lg:btn-wide text-lg font-bold rounded-full text-white"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
