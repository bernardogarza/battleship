const Player = () => {
	let prev_attacks = new Array();

	let attack = (board, table, i, j, color) => {
		board.attack(i, j);
		table.children[i].children[j].classList.add(color);
		prev_attacks.push(table.children[i].children[j]);
	};

	const win = (turn, gameOver, table, messageArea) => {
		if (gameOver === true) {
			table.style.pointerEvents = 'none';
			if (turn % 2 === 0) {
				messageArea.innerHTML = 'Player Win';
			} else {
				messageArea.innerHTML = 'CPU Win';
			}
		}
	};

	const randomAttack = (table) => {
		let row;
		let col;
		do {
			row = Math.floor(Math.random() * 10);
			col = Math.floor(Math.random() * 10);
		} while (prev_attacks.includes(table.children[row].children[col]));
		{
			table.children[row].children[col].click();
		}
		return [ row, col ];
	};

	return {
		attack,
		win,
		randomAttack
	};
};

export default Player;
