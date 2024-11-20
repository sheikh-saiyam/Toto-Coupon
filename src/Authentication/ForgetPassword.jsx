import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";

const ForgetPassword = () => {
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
          <form className="card-body p-0 gap-0">
            <div className="form-control">
              <label className="label px-0">
                <span className="font-semibold">Updated Name</span>
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
