import { useState } from "react";
import "./App.css";
import RequestWrapper from "./components/screen/RequestWrapper";

function App() {
  const [isSpecialModalOpen, setIsSpecialModalOpen] = useState(false);
  const initialPositionStyle = {
    top: 0,
    left: 0,
  };
  const [positionStyle, setPositionStyle] = useState(initialPositionStyle);

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  function openModalHandler() {
    setIsSpecialModalOpen(true);
  }

  function changeButtonPositionHandler() {
    setIsSpecialModalOpen(false);

    const newX = generateRandomNumber(-windowWidth / 2, windowWidth / 2);
    const newY = generateRandomNumber(-windowHeight / 2, windowHeight / 2);

    setPositionStyle({
      top: newX,
      left: newY,
    });
  }

  function generateRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      {isSpecialModalOpen ? (
        <div>VideoPlayer here</div>
      ) : (
        <RequestWrapper
          posStyle={positionStyle}
          onYesButtonHandler={openModalHandler}
          onNoButtonHandler={changeButtonPositionHandler}
        />
      )}
    </>
  );
}

export default App;
