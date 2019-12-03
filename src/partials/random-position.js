import { validateLength, validateCell, markCell } from "./put-ship";

let count = 0;

let randomOrientation = () => {
  return Math.floor(Math.random() * 2)
}

let randomRow = () => {
  return Math.floor(Math.random() * 10)
}

let randomColumn = () => {
  return Math.floor(Math.random() * 10)
}

let resetCount = () => {
  count = 0;
}

let randomPosition = (shipArr, table, clsName) => {
  resetCount();
  while (count < 5) {
    let ship = shipArr[count];
    let orientation = randomOrientation();
    let row = randomRow();
    let column = randomColumn();
    if (validateLength(ship.id, shipArr, orientation, row, column) && validateCell(table, ship.id, shipArr, orientation, row, column)) {
      markCell(table, ship.id, shipArr, orientation, row, column, clsName);
      count++;
    }
  }
}

export { randomPosition, randomRow, randomColumn }