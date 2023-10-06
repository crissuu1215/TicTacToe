import X_Icon from "../components/x_icon";
import O_Icon from "../components/o_icon";
const winningCode = {
  1: X_Icon("#10dd10", 0.5),
  2: O_Icon("#10dd10", 0.5),
};
export const colorizeRow = (starting, update_val, val) => {
  for (let cell = starting; cell < starting + 3; cell += 1) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
export const colorizeCol = (starting, update_val, val) => {
  for (let cell = starting; cell < 10; cell += 3) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
export const diagHighLow = (starting, update_val, val) => {
  for (let cell = starting; cell < 10; cell += 4) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
export const diagLowHigh = (starting, update_val, val) => {
  for (let cell = starting; cell > 2; cell -= 2) {
    update_val[`cell${cell}`] = [
      winningCode[val[`cell${cell}`][1]],
      val[`cell${cell}`][1],
      val[`cell${cell}`][2],
    ];
  }
};
