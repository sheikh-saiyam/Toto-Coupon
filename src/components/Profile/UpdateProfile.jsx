import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user , updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile({ displayName: name, photoURL: photo })
    .then(() => {
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
    })
    console.log({ name, photo });
  };

  return (
    <div className="animate__animated animate__bounceInLeft bg-gradient-to-r to-secondary  from-primary  my-12 mx-auto w-11/12 md:w-8/12 py-12 rounded-2xl">

    </div>
  );
};

export default UpdateProfile;
