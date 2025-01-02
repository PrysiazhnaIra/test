import css from "./TitleMenu.module.css";

export default function TitleMenu() {
  return (
    <div className={css.titleWrapper}>
      <h3 className={css.title}>Menu</h3>
      <div className={css.line}></div>
    </div>
  );
}
