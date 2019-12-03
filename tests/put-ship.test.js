import { createShips } from '../src/partials/create-ships';

test('Should Put a ship in the table', () => {
  let ships = [{"cells": [], "cellsHit": [], "id": 0, "isSink": false, "name": "Ship 1", "size": 5}, {"cells": [], "cellsHit": [], "id": 1, "isSink": false, "name": "Ship 2", "size": 4}, {"cells": [], "cellsHit": [], "id": 2, "isSink": false, "name": "Ship 3", "size": 3}, {"cells": [], "cellsHit": [], "id": 3, "isSink": false, "name": "Ship 4", "size": 2}, {"cells": [], "cellsHit": [], "id": 4, "isSink": false, "name": "Ship 5", "size": 2}];
  let newShips = []
  expect(createShips(newShips)).toBe(ships);
});