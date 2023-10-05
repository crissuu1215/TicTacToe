import React from "react";

const turns = {
  1: "X",
  2: "O",
};

const checkVictory = (
  boardList,
  setMessage,
  setPanelColor,
  setGameStatus,
  occupiedList
) => {
  // console.log(boardList);
  const whoWin = (turn) => {
    return `${turns[turn]} Wins!`;
  };

  const checkOccupied = (v, i, arr) => {
    return arr.indexOf(v) === i;
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
      setPanelColor("rgba(16, 221, 16,1");
      setGameStatus(true);

      return [true, [row + 1, 0, 0]];
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
      setPanelColor("rgba(16, 221, 16,1");
      setGameStatus(true);
      // setWin([0, col + 1, 0]);
      return [true, [0, col + 1, 0]];
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
    setPanelColor("rgba(16, 221, 16,1");
    setGameStatus(true);
    // setWin([0, 0, 1]);
    return [true, [0, 0, 1]];
  }

  if (
    boardList["cell7"][1] == boardList["cell5"][1] &&
    boardList["cell5"][1] == boardList["cell3"][1] &&
    boardList["cell7"][1] != 0 &&
    boardList["cell5"][1] != 0 &&
    boardList["cell3"][1] != 0
  ) {
    setMessage(whoWin(boardList["cell7"][1]));
    setPanelColor("rgba(16, 221, 16,1");
    setGameStatus(true);
    // setWin([0, 0, 2]);
    return [true, [0, 0, 2]];
  }

  if (
    occupiedList.filter(checkOccupied).length == 1 &&
    occupiedList.filter(checkOccupied).includes(1)
  ) {
    setMessage("Draw!");
    setPanelColor("#6e2424");
    setGameStatus(true);
    return [true, [0, 0, 0]];
  }
  return [false, [0, 0, 0]];
};

export default checkVictory;
