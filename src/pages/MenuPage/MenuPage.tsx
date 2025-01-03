import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoadMore from "../../components/LoadMore/LoadMore";
import MenuList from "../../components/MenuList/MenuList";
import Search from "../../components/Search/Search";
import TitleMenu from "../../components/TitleMenu/TitleMenu";
import { Meal } from "../../types";
import { fetchMealByName } from "../../config/api";
import Loader from "../../components/Loader/Loader";

export default function MenuPage() {
  const step: number = 5;
  const [size, setSize] = useState<number>(5);
  const [items, setItems] = useState<Meal[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMealByName(searchText)
      .then((response) => setItems(response))
      .catch((error) => {
        console.error("ERROR: ", error);
      })
      .finally(() => setIsLoading(false));
  }, [searchText]);

  const handleMore = (): void => {
    setSize((prevSize) => prevSize + step);
  };

  const onChange = (text: string): void => {
    setSearchText(text);
    setSize(step);
  };

  return (
    <div>
      <Header />
      <TitleMenu />
      <Search onChange={onChange} />
      {isLoading && <Loader />}
      <MenuList items={items} size={size} />
      {size < items.length && <LoadMore onClick={handleMore} />}
      <Footer />
    </div>
  );
}
