import { useState, useEffect } from "react";
import "./tictactoe.css";
import X_Icon from "./components/x_icon";
import O_Icon from "./components/o_icon";
import checkVictory from "./utils/CheckVictory";
import GamePanel from "./components/game_panel";
import React from "react";
import {
  colorizeRow,
  colorizeCol,
  diagHighLow,
  diagLowHigh,
} from "./utils/WinColorizer";

const record = {
  cell1: [null, 0, 0],
  cell2: [null, 0, 0],
  cell3: [null, 0, 0],
  cell4: [null, 0, 0],
  cell5: [null, 0, 0],
  cell6: [null, 0, 0],
  cell7: [null, 0, 0],
  cell8: [null, 0, 0],
  cell9: [null, 0, 0],
};
let occupiedList_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let clicked = null;
let win = [0, 0, 0];
function TicTacToe_App() {
  const [panelColor, setPanelColor] = useState("");
  const [message, setMessage] = useState("");
  const [val, setVal] = useState(record);
  const [turn, setTurn] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);

  useEffect(() => {
    handleOccupied();
    let [result, line] = checkVictory(
      val,
      setMessage,
      setPanelColor,
      setGameStatus,
      occupiedList_1
    );
    if (result) {
      console.log(line);

      win = line;
      occupiedList_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      clicked = null;
    }
  }, [val]);

  useEffect(() => {
    let update_val = { ...val };

    win.forEach((winning, i) => {
      if (winning > 0) {
        if (i == 0) {
          colorizeRow(winning, update_val, val);
        } else if (i == 1) {
          colorizeCol(winning, update_val, val);
        } else if (i == 2) {
          if (winning == 1) {
            diagHighLow(1, update_val, val);
          } else {
            diagLowHigh(7, update_val, val);
          }
        }
      }
    });

    setVal(update_val);
  }, [win]);
  const handleChange = (key, svg, code, state) => {
    const update = { ...val, [key]: [svg, code, state] };
    setVal(update);
  };

  const putBoard = (a, i) => {
    if (val[a][1] > 0) {
      return;
    }

    if (gameStatus != true) {
      turn % 2 == 0
        ? (handleChange(a, X_Icon("#b3b3b3", 0), 1), setTurn(1))
        : (handleChange(a, O_Icon("#1a1a1a", 0), 2), setTurn(0));
    }
    // X color: "#b3b3b3" Y color: "#1a1a1a"
  };

  const handleOccupied = () => {
    if (clicked == null) {
      return;
    }
    if (!gameStatus) occupiedList_1[clicked] = 1;
  };

  return (
    <>
      <GamePanel
        color={panelColor}
        setMessage={setMessage}
        message={message}
        restart={setVal}
        origList={record}
        setGameStats={setGameStatus}
        setPanelColor={setPanelColor}
        gameStats={gameStatus}
        turn={turn}
      />

      <div className="game_container">
        <div className="game_board">
          {Object.keys(val).map((key, index) => (
            <div
              key={key}
              className="board_cell"
              onClick={() => {
                if (!gameStatus) {
                  clicked = index;
                }
                putBoard(key, index);
              }}
            >
              {val[key][0]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TicTacToe_App;
