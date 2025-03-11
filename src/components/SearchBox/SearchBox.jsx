import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const filterId = useId();
  const dispatch = useDispatch();

  function handleinput(e) {
    const filter = e.target.value.trim().toLowerCase();
    dispatch(changeFilter(filter));
  }
  return (
    <div className={css.searchBlock}>
      <label htmlFor={filterId} className={css.caption}>
        Find Contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        name="filter"
        id={filterId}
        onInput={handleinput}
      />
    </div>
  );
}
