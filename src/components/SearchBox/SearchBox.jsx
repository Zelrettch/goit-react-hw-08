import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
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
      <input
        placeholder="Find Contacts by name"
        className={css.field}
        type="text"
        name="filter"
        id={filterId}
        onInput={handleinput}
      />
    </div>
  );
}
