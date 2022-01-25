import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoute = ({children}) => {

    const {token} = useContext(AuthContext);

    return token ? children : <Navigate to='/login'/> ;
}