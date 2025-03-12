import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLogged = useSelector(selectIsLoggedIn);
  return isLogged ? children : <Navigate to="/login" />;
}
