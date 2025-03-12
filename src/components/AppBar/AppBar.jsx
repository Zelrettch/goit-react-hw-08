import css from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

export default function Header() {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <Navigation />
      <p> {isLogged ? <UserMenu /> : <AuthNav />}</p>
    </nav>
  );
}
