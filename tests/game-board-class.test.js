import GameBoard from '../src/partials/game-board-class';
import Ship from '../src/partials/ship-class';

const ships = [Ship(0, 5), Ship(1, 4), Ship(2, 3), Ship(3, 2), Ship(4, 2)];
const game = GameBoard(ships);

test('It should have a 10x10 grid', () => {
  expect(game.tableGrid.length).toBe(10);
});

test('Game over should be false', () => {
  expect(game.gameOver()).toBeFlasy;
});

test('Should return true to the attack', () => {
  game.attack(1, 1);
  expect(game.tableGrid[1][1].hit).toBeTruthy;
});

test('Should put ship', () => {
  game.putShipManually(1, 1, 1, 1);
  expect(game.tableGrid[1][1].empty).toBeFlasy;
});
