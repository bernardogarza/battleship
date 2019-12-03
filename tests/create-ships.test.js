import { createShips } from '../src/partials/create-ships';
import { createShipsCPU } from '../src/partials/create-ships-cpu'
import { Ship } from '../src/partials/ship-class'

test('Should create user ships', () => {
  let ships = [{"cells": [], "cellsHit": [], "id": 0, "isSink": false, "name": "Ship 1", "size": 5}, {"cells": [], "cellsHit": [], "id": 1, "isSink": false, "name": "Ship 2", "size": 4}, {"cells": [], "cellsHit": [], "id": 2, "isSink": false, "name": "Ship 3", "size": 3}, {"cells": [], "cellsHit": [], "id": 3, "isSink": false, "name": "Ship 4", "size": 2}, {"cells": [], "cellsHit": [], "id": 4, "isSink": false, "name": "Ship 5", "size": 2}];
  let newShips = createShips()
  expect(newShips).toMatchObject(ships);
});

test('Should create CPU ships', () => {
  let ships = [{"cells": [], "cellsHit": [], "id": 0, "isSink": false, "name": "Ship 1", "size": 5}, {"cells": [], "cellsHit": [], "id": 1, "isSink": false, "name": "Ship 2", "size": 4}, {"cells": [], "cellsHit": [], "id": 2, "isSink": false, "name": "Ship 3", "size": 3}, {"cells": [], "cellsHit": [], "id": 3, "isSink": false, "name": "Ship 4", "size": 2}, {"cells": [], "cellsHit": [], "id": 4, "isSink": false, "name": "Ship 5", "size": 2}];
  let newShips = createShipsCPU()
  expect(newShips).toMatchObject(ships);
});

test('Should return ship info', () => {
  let ship = {"cells": [], "cellsHit": [], "id": 0, "isSink": false, "name": "Ship 1", "size": 5};

  expect(new Ship(0, 'Ship 1', 5)).toMatchObject(ship)
});

