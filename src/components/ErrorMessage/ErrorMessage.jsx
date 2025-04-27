import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorText}>Oops, error, reload the page.</p>
    </div>
  );
}
