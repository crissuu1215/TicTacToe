import React from "react";
import RestartButton from "./restart_button";
import { useState, useEffect } from "react";
const turns = {
  0: "X",
  1: "O",
};
function GamePanel({
  color,
  setMessage,
  message,
  restart,
  origList,
  setGameStats,
  setPanelColor,
  setOccupiedList,
  gameStats,
  turn,
}) {
  const [visib, setVisib] = useState("hidden");
  const [visibDiv, setVisibDiv] = useState(1);

  const colorChange = () => {
    if (gameStats) {
      return "#ffffff";
    } else {
      return 0;
    }
  };

  const handleRestart = () => {
    if (gameStats) {
      setVisib("visible");
      setVisibDiv(0);
    } else {
      setVisibDiv(1);
    }
  };

  useEffect(() => {
    handleRestart();
  });

  return (
    <>
      <div className="game_panel" style={{ backgroundColor: color }}>
        <div className="first_sec">
          <h1>{message}</h1>
        </div>
        <div className="second_sec" style={{ opacity: visibDiv }}>
          <span>Turn</span>
          <h1>{turns[turn]}</h1>
        </div>

        <div className="third_sec">
          <RestartButton
            visib={visib}
            fill={colorChange()}
            onclick={() => {
              setMessage("");
              restart(origList);
              setGameStats(false);
              setPanelColor(null);
              setOccupiedList([]);
              setVisib("hidden");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default GamePanel;
