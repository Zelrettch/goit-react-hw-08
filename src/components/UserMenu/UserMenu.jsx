import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectEmail } from "../../redux/auth/selectors";

export default function UserMenu() {
  const email = useSelector(selectEmail);
  return (
    <div>
      <p>Welcome {email}</p>
      <button type="button">Logout</button>
    </div>
  );
}
