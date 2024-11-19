import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, userLogin, googleLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log({ email, password });
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

  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-12 flex flex-col-reverse md:flex md:flex-row">
        <div className="bg-white py-12 px-8 md:w-1/2">
          <div className="mb-4">
            <h1 className="flex items-center gap-2 text-3xl font-bold">
              <LuLogIn />
              Login
            </h1>
          </div>
          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn bg-yellow-400 border-none w-full rounded-full 
              flex gap-3 items-center text-lg text-white font-semibold"
            >
              <FaGoogle className="text-xl"></FaGoogle> Log in Google
            </button>
          </div>
          <div className="divider font-semibold">Or</div>
          <form onSubmit={handleLogin} className="card-body p-0 gap-0">
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
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="font-semibold underline link link-hover my-2"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn w-full text-lg font-bold text-white bg-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="bg-primary py-12 px-4 md:w-1/2 flex flex-col justify-center items-center text-center">
          <div className="text-white space-y-2 md:space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl">
              Welcome to Login Page
            </h1>
            <p className="font-semibold text-lg md:text-xl">
              Don't have an account
            </p>
            <Link
              to={"/register"}
              className="bg-transparent border-2 border-white btn btn-wide text-lg font-bold rounded-full text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
