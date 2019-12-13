import Player from '../src/partials/player-class';
import GameBoard from '../src/partials/game-board-class';
import Ship from '../src/partials/ship-class';

let ships = [ Ship(0, 5), Ship(1, 4), Ship(2, 3), Ship(3, 2), Ship(4, 2) ];
let game = GameBoard(ships);

let messageArea = document.createElement('div');
let player = Player();
let table = document.createElement('tbody');

for (let i = 0; i < 10; i += 1) {
	let row = document.createElement('tr');
	for (let j = 0; j < 10; j += 1) {
		let col = document.createElement('td');
		row.appendChild(col);
	}
	table.appendChild(row);
}

test('Should attack and update the class', () => {
	player.attack(game, table, 0, 0, 'color');
	expect(table.children[0].children[0].classList.value).toBe('color');
});

test('Should return the winner', () => {
	player.win(2, true, table, messageArea);
	expect(messageArea.innerHTML).toBe('Player Win');
});

test('Should generate a random number between 0 and 9 to attack', () => {
	let rc = player.randomAttack(table);
	expect(rc[0]).toBeGreaterThanOrEqual(0);
	expect(rc[0]).toBeLessThanOrEqual(9);
	expect(rc[1]).toBeGreaterThanOrEqual(0);
	expect(rc[1]).toBeLessThanOrEqual(9);
});
