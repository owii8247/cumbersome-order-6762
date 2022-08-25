import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AppContext";

function PrivateRoutes({ children }) {

  const { state } = useContext(AuthContext);
  //console.log("private", state);
  if (!state.isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoutes;