import { useState, useEffect } from "react";
import "./tictactoe.css";
import X_Icon from "./components/x_icon";
import O_Icon from "./components/o_icon";
import checkVictory from "./utils/CheckVictory";
import GamePanel from "./components/game_panel";

const record = {
  cell1: [null, 0],
  cell2: [null, 0],
  cell3: [null, 0],
  cell4: [null, 0],
  cell5: [null, 0],
  cell6: [null, 0],
  cell7: [null, 0],
  cell8: [null, 0],
  cell9: [null, 0],
};

function TicTacToe_App() {
  const [panelColor, setPanelColor] = useState("");
  const [message, setMessage] = useState("");
  const [val, setVal] = useState(record);
  const [turn, setTurn] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const [occupiedList, setOccupiedList] = useState([]);

  useEffect(() => {
    checkVictory(
      val,
      setMessage,
      setPanelColor,
      setGameStatus,
      occupiedList,
      setOccupiedList
    );

    handleOccupied();
    console.log(occupiedList);

    // console.log(turn);
  }, [val]);

  const handleChange = (key, svg, code) => {
    const update = { ...val, [key]: [svg, code] };
    setVal(update);
  };

  const putBoard = (a) => {
    if (val[a][1] > 0) {
      return;
    }
    if (gameStatus != true) {
      turn % 2 == 0
        ? (handleChange(a, X_Icon("#b3b3b3"), 1), setTurn(1))
        : (handleChange(a, O_Icon("#1a1a1a"), 2), setTurn(0));
    }
  };

  const handleOccupied = () => {
    const occupiedTemp = [...occupiedList, 1];
    setOccupiedList(occupiedTemp);
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
        setOccupiedList={setOccupiedList}
        gameStats={gameStatus}
        turn={turn}
      />

      <div className="game_container">
        <div className="game_board">
          {Object.keys(val).map((key) => (
            <div
              key={key}
              className="board_cell"
              onClick={() => {
                putBoard(key);
                // handleOccupied();
              }}
            >
              {val[key][0]}
            </div>
          ))}
        </div>
      </div>

      {/* <a className="k">hello</a> */}
    </>
  );
}

export default TicTacToe_App;
