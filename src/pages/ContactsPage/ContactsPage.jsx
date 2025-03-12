import css from "./ContactsPage.module.css";

import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactsPage() {
  return (
    <div className={css.phonebook}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
