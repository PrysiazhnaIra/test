import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.home}>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
