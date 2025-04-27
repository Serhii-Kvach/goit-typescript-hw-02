import PropagateLoader from "react-spinners/PropagateLoader";
import css from "./Loader.module.css";

export default function Loader({ loading }) {
  return (
    <div className={css.loader}>
      <PropagateLoader loading={loading} color="rgb(255, 0, 157)" />
    </div>
  );
}
