export const colorizeRow = (starting) => {
  for (let cell = starting; cell < starting + 3; cell += 1) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
export const colorizeCol = (starting) => {
  for (let cell = starting; cell < 10; cell += 3) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
export const diagHighLow = (starting) => {
  for (let cell = starting; cell < 10; cell += 4) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
export const diagLowHigh = (starting) => {
  for (let cell = starting; cell > 2; cell -= 2) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
