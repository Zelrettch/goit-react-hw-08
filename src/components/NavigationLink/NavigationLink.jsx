import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./NavigationLink.module.css";

export default function NavigationLink({ to, children }) {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
}
