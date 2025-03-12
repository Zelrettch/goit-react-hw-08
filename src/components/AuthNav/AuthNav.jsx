import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";
export default function AuthNav() {
  return (
    <div className={css.block}>
      <Link to={"/login"} className={css.link}>
        Login
      </Link>
      <Link to={"/register"} className={css.link}>
        Register
      </Link>
    </div>
  );
}
