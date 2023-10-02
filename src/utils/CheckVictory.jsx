import React from "react";

const turns = {
  1: "X",
  2: "O",
};
const checkVictory = (boardList, setMessage, setPanelColor, setGameStatus) => {
  // console.log(boardList);
  const whoWin = (turn) => {
    return `${turns[turn]} Wins!`;
  };
  for (let row = 0; row < 9; row += 3) {
    if (
      boardList[`cell${1 + row}`][1] == boardList[`cell${2 + row}`][1] &&
      boardList[`cell${2 + row}`][1] == boardList[`cell${3 + row}`][1] &&
      boardList[`cell${1 + row}`][1] != 0 &&
      boardList[`cell${2 + row}`][1] != 0 &&
      boardList[`cell${3 + row}`][1] != 0
    ) {
      setMessage(whoWin(boardList[`cell${1 + row}`][1]));
      setPanelColor("#00AA00");
      setGameStatus(true);
    }
  }
  for (let col = 0; col < 3; col += 1) {
    if (
      boardList[`cell${1 + col}`][1] == boardList[`cell${4 + col}`][1] &&
      boardList[`cell${4 + col}`][1] == boardList[`cell${7 + col}`][1] &&
      boardList[`cell${1 + col}`][1] != 0 &&
      boardList[`cell${4 + col}`][1] != 0 &&
      boardList[`cell${7 + col}`][1] != 0
    ) {
      setMessage(whoWin(boardList[`cell${1 + col}`][1]));
      setPanelColor("#00AA00");
      setGameStatus(true);
    }
  }
  if (
    boardList["cell1"][1] == boardList["cell5"][1] &&
    boardList["cell5"][1] == boardList["cell9"][1] &&
    boardList["cell1"][1] != 0 &&
    boardList["cell5"][1] != 0 &&
    boardList["cell9"][1] != 0
  ) {
    setMessage(whoWin(boardList["cell1"][1]));
    setPanelColor("#00AA00");
    setGameStatus(true);
  }

  if (
    boardList["cell7"][1] == boardList["cell5"][1] &&
    boardList["cell5"][1] == boardList["cell3"][1] &&
    boardList["cell7"][1] != 0 &&
    boardList["cell5"][1] != 0 &&
    boardList["cell3"][1] != 0
  ) {
    setMessage(whoWin(boardList["cell7"][1]));
    setPanelColor("#00AA00");
    setGameStatus(true);
  }
};

export default checkVictory;
