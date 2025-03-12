import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <NavLink to={"/"} className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to={"/contacts"} className={buildLinkClass}>
        Contacts
      </NavLink>
    </>
  );
}
