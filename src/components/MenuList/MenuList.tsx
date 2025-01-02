import css from "./MenuList.module.css";
import MenuItem from "./MenuItem/MenuItem";

export default function MenuList() {
  return (
    <section className={css.menu}>
      <ul className={css.list}>
        <MenuItem />
      </ul>
    </section>
  );
}
