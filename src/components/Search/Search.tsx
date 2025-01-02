import css from "./Search.module.css";

export default function Search() {
  return (
    <div>
      <input type="text" className={css.input} placeholder="Search" />
    </div>
  );
}
