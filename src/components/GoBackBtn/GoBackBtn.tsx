import { useNavigate } from "react-router-dom";

export default function GoBackBtn() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/");
  };

  return (
    <>
      <button type="button" onClick={handleBtnClick}>
        Go Back
      </button>
    </>
  );
}
