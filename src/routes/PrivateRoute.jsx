import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <span className="loading mx-auto block mt-52 loading-dots loading-lg"></span>;
    }


    if (user) {
        return children;
    }

    return <Navigate to='/login'/>

     
};

export default PrivateRoute;