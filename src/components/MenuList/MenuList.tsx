import css from "./MenuList.module.css";
import MenuItem from "./MenuItem/MenuItem";
import { Meal } from "../../types";

type MenuListProps = {
  items: Meal[];
  size: number;
};

export default function MenuList({ items, size }: MenuListProps) {
  return (
    <section className={css.menu}>
      {items.length > 0 ? (
        <ul className={css.list}>
          {items.slice(0, size).map((item, index) => (
            <MenuItem
              key={item.idMeal}
              item={item}
              isLast={index === items.length - 1}
            />
          ))}
        </ul>
      ) : (
        <p>Nothing was found for your request. Please try again.</p>
      )}
    </section>
  );
}
