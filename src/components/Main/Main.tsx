import LoadMore from "../LoadMore/LoadMore";
import MenuList from "../MenuList/MenuList";
import TitleMenu from "../TitleMenu/TitleMenu";
import AboutUs from "../AboutUs/AboutUs";
import css from "./Main.module.css";
import { useEffect, useState } from "react";
import { Meal } from "../../types";
import { fetchMealByName, getUserFriendlyErrorMessage } from "../../config/api";
import Loader from "../../components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";

export default function Main() {
  const step: number = 5;
  const [size, setSize] = useState<number>(3);
  const [items, setItems] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMealByName()
      .then((response) => setItems(response))
      .catch((error) => {
        const errorMessage: string = getUserFriendlyErrorMessage(error);
        toast.error(errorMessage);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleMore = (): void => {
    setSize((prevSize) => prevSize + step);
  };

  return (
    <main className={css.main}>
      <Toaster position="top-center" reverseOrder={false} />
      <AboutUs />
      <TitleMenu />
      {isLoading && <Loader />}
      <MenuList items={items} size={size} />
      {size < items.length && <LoadMore onClick={handleMore} />}
    </main>
  );
}
