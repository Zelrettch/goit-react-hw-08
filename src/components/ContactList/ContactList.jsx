import css from "./ContactList.module.css";

import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectFilteredContact } from "../../redux/contacts/selectors.js";

export default function ContactList() {
  const items = useSelector(selectFilteredContact);
  return (
    <ul className={css.contactList}>
      {items.map((e) => (
        <Contact data={e} key={e.id} />
      ))}
    </ul>
  );
}
