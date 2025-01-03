import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import css from "./ModalWindow.module.css";
import { NavLink } from "react-router-dom";
import SocialLinks from "../Header/SocialLinks/SocialLinks";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ModalWindow({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalWrapper}>
        <div className={css.topWrapper}>
          <IoCloseOutline className={css.closeIcon} onClick={onRequestClose} />
          <div className={css.linkWrapper}>
            <ul className={css.linkList}>
              <li className={css.linkItem}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={css.linkItem}>
                <NavLink to="/menu">Menu</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.contactsWrapper}>
          <p>Contacts</p>
          <div className={css.contactsLine}></div>
          <a href="tel:+380777777777">+380 (77) 77 77 777</a>
          <SocialLinks />
        </div>
      </div>
    </Modal>
  );
}
