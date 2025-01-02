import LoadMore from "../LoadMore/LoadMore";
import MenuList from "../MenuList/MenuList";
import TitleMenu from "../TitleMenu/TitleMenu";
import AboutUs from "../AboutUs/AboutUs";
import css from "./Main.module.css";

export default function Main() {
  return (
    <main className={css.main}>
      <AboutUs />
      <TitleMenu />
      <MenuList />
      <LoadMore />
    </main>
  );
}
