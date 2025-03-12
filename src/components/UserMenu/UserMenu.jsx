import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { CiLogout } from "react-icons/ci";

export default function UserMenu() {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className={css.block}>
      <p className={css.text}>Welcome {name}!</p>
      <button type="button" onClick={handleLogout} className={css.btn}>
        <CiLogout size="28px" />
      </button>
    </div>
  );
}
