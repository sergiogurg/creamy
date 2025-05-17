import ReactPlayer from "react-player";
import "./AcceptanceWrapper.css";
import umBomDiaPraVoce from "../../video/um_bom_dia_pra_vc_trim.mp4";

function AcceptanceWrapper() {
  return (
    <div className="acceptance-wrapper">
      <h1>Parabéns! Você escolheu "Sim!" (livremente)</h1>
      <h2>
        Você acabou de se tornar o namorado mais &#10024;cremoso&#10024; de
        todos!
      </h2>
      <ReactPlayer url={umBomDiaPraVoce} loop playing />
    </div>
  );
}

export default AcceptanceWrapper;
