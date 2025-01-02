import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import css from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <div className={css.links}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
}
