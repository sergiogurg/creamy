import "./App.css";
import Button from "./components/UI/Button";

function App() {
  function openModalHandler() {}

  function changeButtonPositionHandler() {}

  return (
    <div className="wrapper">
      <h1>XXXXXXXXXXXXXXXXXX &#128144; &#129392;</h1>
      <div className="button-container">
        <Button className="sim" title="Sim" onClick={openModalHandler} />
        <Button
          className="nao"
          title="Não"
          onClick={changeButtonPositionHandler}
        />
      </div>
    </div>
  );
}

export default App;
