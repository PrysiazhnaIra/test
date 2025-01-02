import css from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={css.hero}>
      <h1 className={css.title}>Feel in Italy with our restaurant</h1>
      <p className={css.text}>You can feel happy with us</p>
    </section>
  );
}
