import Ship from '../src/partials/ship-class';

const ship = Ship(0, 5);

test('Should return the correct ID and size of the ship', () => {
  expect(ship.id).toBe(0);
  expect(ship.size).toBe(5);
});

test('Should return true if the ship is sink', () => {
  ship.cellsHits.push(0, 1, 2, 3, 4);
  expect(ship.isSink()).toBeTruthy;
});
