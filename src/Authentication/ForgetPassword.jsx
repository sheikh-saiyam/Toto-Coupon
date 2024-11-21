import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Link Sent! 💌",
          text: "We've emailed you the link to reset your password. Please check your inbox",
          showConfirmButton: false,
          background: "#f0f8ff",
          color: "#4B0082",
          timer: 5000,
        });
        navigate("/login");
        // Redirect to Gmail / Open Gmail in a new tab
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login || ToTo-coupon</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="animate__animated animate__bounceInLeft bg-primary  my-12 mx-auto w-11/12 md:w-8/12 py-12 rounded-2xl">
        <div>
          <h1 className="text-center mb-6 text-white text-3xl lg:text-4xl font-extrabold drop-shadow-lg lg:leading-[50px] tracking-wide">
            <span>
              <Typewriter
                words={["Forget Password"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div className="mx-auto w-11/12 md:w-7/12 lg:w-5/12 py-12 bg-white px-8 rounded-xl">
          <form onSubmit={handleResetPassword} className="card-body p-0 gap-0">
            <div className="form-control">
              <label className="label px-0">
                <span className="font-semibold">Updated Name</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn w-full mt-6 text-lg font-bold text-white bg-primary">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
