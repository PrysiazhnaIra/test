import css from "./LoadMore.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMore({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={css.btn} onClick={onClick}>
      More
    </button>
  );
}
