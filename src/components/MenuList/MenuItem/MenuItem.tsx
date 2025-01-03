import { Meal } from "../../../types";
import css from "./MenuItem.module.css";

type MenuItemProps = {
  item: Meal;
  isLast?: boolean;
};

export default function MenuItem({ item, isLast }: MenuItemProps) {
  return (
    <li key={item.idMeal} className={css.item}>
      <div className={css.contentWrapper}>
        <img
          src={item.strMealThumb}
          alt={item.strCategory}
          className={css.image}
        />
        <div className={css.textWrapper}>
          <h2 className={css.title}>{item.strMeal}</h2>
          <p className={css.instructions}>{item.strInstructions}</p>
        </div>
      </div>
      {!isLast && <div className={css.mealLineSeparator}></div>}
    </li>
  );
}
