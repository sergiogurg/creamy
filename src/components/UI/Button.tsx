import type ButtonPropsType from "../../types/Button/ButtonPropsType";
import "./Button.css";

function Button({
  title,
  onClick,
  className,
  additionalStyle,
}: ButtonPropsType) {
  return (
    <button className={className} style={additionalStyle} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
