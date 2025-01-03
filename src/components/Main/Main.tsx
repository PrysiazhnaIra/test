import LoadMore from "../LoadMore/LoadMore";
import MenuList from "../MenuList/MenuList";
import TitleMenu from "../TitleMenu/TitleMenu";
import AboutUs from "../AboutUs/AboutUs";
import css from "./Main.module.css";
import { useEffect, useState } from "react";
import { Meal } from "../../types";
import { fetchMealByName } from "../../config/api";

export default function Main() {
  const step: number = 5;
  const [size, setSize] = useState<number>(3);
  const [items, setItems] = useState<Meal[]>([]);

  useEffect(() => {
    fetchMealByName()
      .then((response) => setItems(response))
      .catch((error) => {
        console.error("ERORR: ", error);
      });
  }, []);

  const handleMore = (): void => {
    setSize((prevSize) => prevSize + step);
  };

  return (
    <main className={css.main}>
      <AboutUs />
      <TitleMenu />
      <MenuList items={items} size={size} />
      {size < items.length && <LoadMore onClick={handleMore} />}
    </main>
  );
}
