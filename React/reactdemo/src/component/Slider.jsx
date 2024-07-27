import { useState } from "react";
import "../style/Slider.css";

export default function Slider() {
  const numButtons = 10;
  const [activeDoor, setActiveDoor] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleButtonClick = (doorId) => {
    if (activeDoor === doorId) return;

    setActiveDoor(doorId);
    setClosing(false); // Reset closing state when opening a door
  };

  const handleCloseClick = () => {
    setClosing(true); // Set closing state to trigger closing animation
    setTimeout(() => {
      setActiveDoor(null); // Clear active door after closing animation completes
    }, 3000); // Match the duration of the animation
  };

  return (
    <div className="container">
      <div className="sidebar">
        {[...Array(numButtons)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(`door${index + 1}`)}
          >
            제목{index + 1}
          </button>
        ))}
      </div>
      <div className="window">
        {[...Array(numButtons)].map((_, index) => (
          <div
            key={index}
            className={`door ${
              activeDoor === `door${index + 1}` ? "expand" : "shrink"
            } ${closing && activeDoor === `door${index + 1}` ? "closing" : ""}`}
            style={{
              display: activeDoor === `door${index + 1}` ? "block" : "none",
            }}
          >
            <button className="close" onClick={handleCloseClick}>
              close{index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
