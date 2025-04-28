import { FormEvent } from "react";
import { toast as toastType, Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (searchQuery: string) => void;
  toast: typeof toastType;
};

function SearchBar({ onSubmit, toast }: SearchBarProps) {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.namedItem(
      "searchQuery"
    ) as HTMLInputElement;
    const query = inputValue.value.toLowerCase().trim();

    if (query === "") {
      toast.error("Enter text!");

      return;
    }

    onSubmit(query);
    e.currentTarget.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}

export default SearchBar;
