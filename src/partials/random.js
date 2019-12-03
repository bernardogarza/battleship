/* eslint-disable import/prefer-default-export */
import { randomPosition } from './random-position';
import { ships } from './create-ships';
import {
  enableStartGameButton, cleanTable, cleanShipCells, disableSelectionOnRandom,
} from './put-ship';

const table1 = document.querySelector('#table1');
const randomButton = document.querySelector('#random');
let randomCount = 0;

const randomShips = () => {
  randomButton.addEventListener('click', () => {
    disableSelectionOnRandom();
    cleanTable(table1);
    cleanShipCells(ships);
    randomPosition(ships, table1, 'ship');
    if (randomCount < 1) {
      enableStartGameButton();
    }
    randomCount++;
  });
};

export { randomShips };
