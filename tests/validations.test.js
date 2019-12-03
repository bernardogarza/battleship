import { validateLength, validateEmpty } from "../src/partials/put-ship";

test('Should validate the length of the ship depend of the row and column. Has to be true', () => {
  let ships = [{"cells": [], "cellsHit": [], "id": 0, "isSink": false, "name": "Ship 1", "size": 5}, {"cells": [], "cellsHit": [], "id": 1, "isSink": false, "name": "Ship 2", "size": 4}, {"cells": [], "cellsHit": [], "id": 2, "isSink": false, "name": "Ship 3", "size": 3}, {"cells": [], "cellsHit": [], "id": 3, "isSink": false, "name": "Ship 4", "size": 2}, {"cells": [], "cellsHit": [], "id": 4, "isSink": false, "name": "Ship 5", "size": 2}];
  let ship = 1;
  let orientation = 0;
  let row = 1;
  let column = 1;
  expect(validateLength(ship, ships, orientation, row, column)).toBe(true);
});

test('Should validate the length of the ship depend of the row and column. Has to be false', () => {
  let ships = [{"cells": [], "cellsHit": [], "id": 0, "isSink": false, "name": "Ship 1", "size": 5}, {"cells": [], "cellsHit": [], "id": 1, "isSink": false, "name": "Ship 2", "size": 4}, {"cells": [], "cellsHit": [], "id": 2, "isSink": false, "name": "Ship 3", "size": 3}, {"cells": [], "cellsHit": [], "id": 3, "isSink": false, "name": "Ship 4", "size": 2}, {"cells": [], "cellsHit": [], "id": 4, "isSink": false, "name": "Ship 5", "size": 2}];
  let ship = 0;
  let orientation = 1;
  let row = 8;
  let column = 9;
  expect(validateLength(ship, ships, orientation, row, column)).toBe(false);
});

test('Should validate the imputs. Has to be true', () => {
  let ship = 0;
  let orientation = 1;
  let row = 8;
  let column = 9;
  expect(validateEmpty(ship, orientation, row, column)).toBe(true);
});

test('Should validate the imputs. Has to be false', () => {
  let ship = 0;
  let orientation = 1;
  let row = '';
  let column = 9;
  expect(validateEmpty(ship, orientation, row, column)).toBe(false);
});