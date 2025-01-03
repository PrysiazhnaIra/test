import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoadMore from "../../components/LoadMore/LoadMore";
import MenuList from "../../components/MenuList/MenuList";
import Search from "../../components/Search/Search";
import TitleMenu from "../../components/TitleMenu/TitleMenu";
import { Meal } from "../../types";
import { fetchMealByName } from "../../config/api";

export default function MenuPage() {
  const step: number = 5;
  const [size, setSize] = useState<number>(5);
  const [items, setItems] = useState<Meal[]>([]);

  useEffect(() => {
    fetchMealByName()
      .then((response) => setItems(response))
      .catch((error) => {
        console.error("ERROR: ", error);
      });
  }, []);

  const handleMore = (): void => {
    setSize((prevSize) => prevSize + step);
  };

  return (
    <div>
      <Header />
      <TitleMenu />
      <Search />
      <MenuList items={items} size={size} />
      {size < items.length && <LoadMore onClick={handleMore} />}
      <Footer />
    </div>
  );
}
