/* eslint-disable import/prefer-default-export */
import { validateLength, validateCell, markCell } from './put-ship';

let count = 0;

const randomOrientation = () => Math.floor(Math.random() * 2);

const randomRow = () => Math.floor(Math.random() * 10);

const randomColumn = () => Math.floor(Math.random() * 10);

const resetCount = () => {
  count = 0;
};

const randomPosition = (shipArr, table, clsName) => {
  resetCount();
  while (count < 5) {
    const ship = shipArr[count];
    const orientation = randomOrientation();
    const row = randomRow();
    const column = randomColumn();
    if (validateLength(ship.id, shipArr, orientation, row, column)
    && validateCell(table, ship.id, shipArr, orientation, row, column)) {
      markCell(table, ship.id, shipArr, orientation, row, column, clsName);
      count++;
    }
  }
};

export { randomPosition, randomRow, randomColumn };
