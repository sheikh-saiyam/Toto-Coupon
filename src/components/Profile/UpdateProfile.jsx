import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
      navigate("/profile");
      Swal.fire({
        icon: "success",
        title: "Your Profile Updated Successfully",
        text: "We're so glad to have you here. Enjoy exploring our site!",
        showConfirmButton: false,
        background: "#f0f8ff",
        color: "#4B0082",
        timer: 2000,
      });
    });
    console.log({ name, photo });
  };

  return (
    <div className="animate__animated animate__backInLeft bg-gradient-to-r to-secondary  from-primary my-12 mx-auto w-11/12 md:w-8/12 py-12 rounded-2xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update-Profile || ToTo-coupon</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <h1 className="text-center mb-6 text-white text-3xl lg:text-4xl font-extrabold drop-shadow-lg lg:leading-[50px] tracking-wide">
          <span>
            <Typewriter
              words={["Update Your Profile"]}
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
        <form
          onSubmit={handleUpdateUserProfile}
          className="card-body p-0 gap-0"
        >
          <div className="form-control">
            <label className="label px-0">
              <span className="font-semibold">Updated Name</span>
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
            <label className="label px-0 mt-2">
              <span className="font-semibold">Updated Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn w-full mt-6 text-lg font-bold text-white bg-primary">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
