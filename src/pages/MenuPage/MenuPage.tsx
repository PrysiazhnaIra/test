import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoadMore from "../../components/LoadMore/LoadMore";
import MenuList from "../../components/MenuList/MenuList";
import Search from "../../components/Search/Search";
import TitleMenu from "../../components/TitleMenu/TitleMenu";

export default function MenuPage() {
  return (
    <div>
      <Header />
      <TitleMenu />
      <Search />
      <MenuList />
      <LoadMore />
      <Footer />
    </div>
  );
}
