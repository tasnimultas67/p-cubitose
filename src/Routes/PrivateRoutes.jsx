import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner loading-lg !m-auto text-center justify-center"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/" replace={true}></Navigate>
};

export default PrivateRoutes;