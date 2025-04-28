import PropagateLoader from "react-spinners/PropagateLoader";
import css from "./Loader.module.css";

type LoadingProps = {
  loading: boolean;
};

export default function Loader({ loading }: LoadingProps) {
  return (
    <div className={css.loader}>
      <PropagateLoader loading={loading} color="rgb(255, 0, 157)" />
    </div>
  );
}
