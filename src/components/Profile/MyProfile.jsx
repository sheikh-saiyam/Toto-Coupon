import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      
    </div>
  );
};

export default MyProfile;
