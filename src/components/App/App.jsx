import css from "./App.module.css";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import {
  selectFilteredContact,
  selectLoading,
} from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
