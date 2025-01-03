import css from "./Search.module.css";

export default function Search() {
  return (
    <div className={css.search}>
      <div className={css.searchWrapper}>
        <input type="text" className={css.searchInput} placeholder="Search" />
        <div className={css.placeholderLine}></div>
      </div>
    </div>
  );
}
