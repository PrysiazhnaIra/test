import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <a href="/">Selve Restourant</a>
            <div></div>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <SocialLinks />
    </header>
  );
}
