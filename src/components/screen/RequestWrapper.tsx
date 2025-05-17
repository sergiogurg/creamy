import type RequestWrapperPropsType from "../../types/RequestWrapper/RequestWrapperPropsType";
import Button from "../UI/Button";
import "./RequestWrapper.css";

function RequestWrapper({
  posStyle,
  onYesButtonHandler,
  onNoButtonHandler,
}: RequestWrapperPropsType) {
  return (
    <div className="request-wrapper">
      <h1>XXXXXXXXXXXXXXXXXX &#128144; &#129392;</h1>
      <div className="button-container">
        <Button className="sim" title="Sim" onClick={onYesButtonHandler} />
        <Button
          className="nao"
          additionalStyle={posStyle}
          title="Não"
          onClick={onNoButtonHandler}
        />
      </div>
    </div>
  );
}

export default RequestWrapper;
