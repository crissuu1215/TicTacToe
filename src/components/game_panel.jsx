import React from "react";

function GamePanel({ color, message }) {
  return (
    <>
      <div className="game_panel" style={{ backgroundColor: color }}>
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default GamePanel;
