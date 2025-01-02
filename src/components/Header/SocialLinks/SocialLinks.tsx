import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import css from "./SocialLinks.module.css";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`${css.links} ${className || ""}`}>
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
