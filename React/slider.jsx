import { useState } from "react";
import "./styles.css";

export default function App() {
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
// css
// .container {
//     border: 1px solid black;
//     display: flex;
//     width: 500px;
//     height: 400px;
//   }

//   .sidebar {
//     border: 1px solid red;
//     width: 100px;
//     height: 400px;
//     display: flex;
//     flex-direction: column;
//   }

//   .window {
//     border: 1px solid blue;
//     position: relative;
//     width: 400px;
//     height: 400px;
//   }

//   .door {
//     border: 1px solid pink;
//     background-color: pink;
//     display: none;
//     position: absolute;
//     right: 0;
//     width: 400px;
//     height: 400px;
//     overflow: hidden;
//   }

//   .expand {
//     animation-name: expand;
//     animation-duration: 3s; /* Adjust speed here */
//     animation-fill-mode: forwards;
//   }

//   @keyframes expand {
//     from {
//       width: 0;
//     }
//     to {
//       width: 400px;
//     }
//   }

//   .shrink {
//     animation-name: shrink;
//     animation-duration: 3s; /* Adjust speed here */
//     animation-fill-mode: forwards;
//   }

//   @keyframes shrink {
//     from {
//       width: 400px;
//     }
//     to {
//       width: 0;
//     }
//   }

//   .closing {
//     animation-name: shrink; /* Reusing the shrink animation for closing */
//   }
