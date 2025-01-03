import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks/SocialLinks";
import { IoMenu } from "react-icons/io5";
import css from "./Header.module.css";
import { useState } from "react";
import Modal from "../ModalWindow/ModalWindow";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={`${css.item} ${css.descItem}`}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={`${css.item} ${css.descItem}`}>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className={`${css.item} ${css.logo}`}>
            <a href="/">Selve Restourant</a>
            <div className={css.line}></div>
          </li>
          <li className={`${css.item} ${css.descItem}`}>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <SocialLinks className={`${css.item} ${css.descItem}`} />
      <button
        onClick={() => setModalOpen(true)}
        className={css.openModalWindowBtn}
      >
        <IoMenu className={css.iconMenu} />
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} />
    </header>
  );
}
