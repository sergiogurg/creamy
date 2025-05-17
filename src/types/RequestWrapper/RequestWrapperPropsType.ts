import type { MouseEventHandler } from "react";

export default interface RequestWrapperPropsType {
  posStyle: object;
  onYesButtonHandler: MouseEventHandler<HTMLButtonElement>;
  onNoButtonHandler: MouseEventHandler<HTMLButtonElement>;
}
