import css from "./ErrorBlock.module.css";

export default function ErrorBlock({ message }) {
  return (
    <div className={css.block}>
      <h1>{message}</h1>
    </div>
  );
}
