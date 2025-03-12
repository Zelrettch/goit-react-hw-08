import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import {
  selectFilteredContact,
  selectLoading,
} from "../../redux/contacts/selectors.js";
import Loader from "../Loader/Loader.jsx";

export default function ContactList() {
  const isLoading = useSelector(selectLoading);

  const items = useSelector(selectFilteredContact);
  if (isLoading) return <Loader />;
  return (
    <ul className={css.contactList}>
      {items.map((e) => (
        <Contact data={e} key={e.id} />
      ))}
    </ul>
  );
}
