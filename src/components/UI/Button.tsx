import type ButtonPropsType from "../../types/Button/ButtonPropsType";
import "./Button.css";

function Button({ title, onClick, className }: ButtonPropsType) {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
