import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.mainWrapper}>
      <div id="contacts" className={css.contentWrapper}>
        <div className={css.locationWrapper}>
          <h3 className={css.title}>Location</h3>
          <div className={css.locationLine}></div>
          <ul className={css.locationList}>
            <li className={`${css.locationItem} ${css.text}`}>
              130 Fulton St, New York{" "}
            </li>
            <div className={css.locationSeparator}></div>
            <li className={`${css.locationItem} ${css.text}`}>NY 10038, USA</li>
          </ul>
        </div>
        <div className={css.lineSeparator}></div>
        <div className={css.scheduleWrapper}>
          <h3 className={css.title}>Opening hours</h3>
          <div className={css.scheduleLine}></div>
          <ul className={css.scheduleList}>
            <li className={`${css.scheduleItem} ${css.text}`}>
              Mon - Sat: 11:00 - 23:00
            </li>
            <li className={`${css.scheduleItem} ${css.text}`}>
              Sun: 11:00 - 19:00
            </li>
          </ul>
          <p className={css.text}>Food in the restaurant and takeaway!</p>
        </div>
        <div className={css.lineSeparator}></div>
        <div className={css.socialWrapper}>
          <h3 className={css.title}>Sociale</h3>
          <div className={css.socialLine}></div>
          <ul className={css.socialList}>
            <li className={`${css.socialItem} ${css.text}`}>
              {" "}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className={`${css.socialItem} ${css.text}`}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className={`${css.socialItem} ${css.text}`}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.footerLine}></div>
      <p className={`${css.text} ${css.copyright}`}>
        Copyright ©2021 by Bonbons Chocolate
      </p>
    </footer>
  );
}
