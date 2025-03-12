import css from "./Contact.module.css";
import { MdDeleteForever } from "react-icons/md";

import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function Contact({ data }) {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }
  return (
    <li className={css.contact}>
      <div className={css.container}>
        <div className={css.contactTextInfo}>
          <FaUserLarge size="20" />
          <p>{data.name}</p>
        </div>
        <div className={css.contactTextInfo}>
          <FaPhone size="20" />

          <p>{data.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.delBtn}
        onClick={() => handleDelete(data.id)}
      >
        <MdDeleteForever size="45px" />
      </button>
    </li>
  );
}
