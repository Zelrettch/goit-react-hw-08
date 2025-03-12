import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import NavigationLink from "../NavigationLink/NavigationLink";

export default function Navigation() {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <div className={css.block}>
      <NavigationLink to={"/"}>Home</NavigationLink>
      {isLogged && <NavigationLink to={"/contacts"}>Contacts</NavigationLink>}
    </div>
  );
}
