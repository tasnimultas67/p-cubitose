import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const CaptchaRoutes = ({ children }) => {
//   const { user} = useContext(AuthContext);
//   const location = useLocation();

//   if (user) {
//     return children;
//   }
  return (
    <Navigate
      to="/login-captcha"
    //   replace={true}
    //   state={{ from: location }}
    ></Navigate>
  );
};

export default CaptchaRoutes;
