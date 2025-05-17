import type { MouseEventHandler } from "react";

export default interface ButtonPropsType {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  additionalStyle?: object;
}
