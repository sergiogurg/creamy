import type RequestWrapperPropsType from "../../types/RequestWrapper/RequestWrapperPropsType";
import Button from "../UI/Button";
import "./RequestWrapper.css";
import song from "../../audio/marina_sena-combo_da_sorte-cut.mp3";
import ReactAudioPlayer from "react-audio-player";

function RequestWrapper({
  posStyle,
  onYesButtonHandler,
  onNoButtonHandler,
}: RequestWrapperPropsType) {
  return (
    <div className="request-wrapper">
      <ReactAudioPlayer src={song} autoPlay={true} />
      <h1>Quer namorar comigo? &#128144;&#129392;</h1>
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
