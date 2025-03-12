import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <Rings
      visible={true}
      height="80"
      width="80"
      color="#B9FF66"
      ariaLabel="rings-loading"
      wrapperClass={css.wrapper}
    />
  );
}
