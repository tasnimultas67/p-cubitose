import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

  
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg !m-auto text-center justify-center"></span>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to="/team-login"
      replace={true}
      state={{ from: location }}
    ></Navigate>
  );
};

export default PrivateRoutes;
