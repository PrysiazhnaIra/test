import css from "./Search.module.css";

interface SearchProps {
  onChange: (arg: string) => void;
}

export default function Search({ onChange }: SearchProps) {
  return (
    <div className={css.search}>
      <div className={css.searchWrapper}>
        <input
          type="text"
          className={css.searchInput}
          placeholder="Search"
          onChange={(e) => onChange(e.target.value)}
        />
        <div className={css.placeholderLine}></div>
      </div>
    </div>
  );
}
