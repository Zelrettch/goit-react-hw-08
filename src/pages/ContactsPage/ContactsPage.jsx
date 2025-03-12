import css from "./ContactsPage.module.css";
import Loader from "../../components/Loader/Loader";
import {
  selectFilteredContact,
  selectLoading,
} from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useSelector } from "react-redux";

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const items = useSelector(selectFilteredContact);
  const empty = items.length === 0;
  return (
    <div className={css.phonebook}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {empty ? loading && <Loader render={true} /> : <ContactList />}
    </div>
  );
}
