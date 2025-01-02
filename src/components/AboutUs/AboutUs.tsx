import css from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={css.mainWrapper}>
      <div className={css.infoWrapper}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>About Us</h2>
          <div className={css.line}></div>
        </div>
        <div className={css.textWrapper}>
          <p className={css.text}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you. This is a
            great space to write long text about your company and your services.
          </p>
          <p className={css.text}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you. This is a
            great space to write long
          </p>
        </div>
      </div>
      <img
        src="/public/chef.jpg"
        srcSet="/public/chef2x.jpg"
        alt="Chef"
        className={css.img}
      />
    </section>
  );
}
