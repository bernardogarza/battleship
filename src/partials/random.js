import { randomPosition } from "./random-position";
import { ships } from "./create-ships";
import { enableStartGameButton, cleanTable, cleanShipCells, disableSelectionOnRandom } from "./put-ship";

let table1 = document.querySelector('#table1');
let randomButton = document.querySelector('#random');
let randomCount = 0;

let randomShips = () => {
  randomButton.addEventListener('click', () => {
    disableSelectionOnRandom()
    cleanTable(table1);
    cleanShipCells(ships);
    randomPosition(ships, table1, 'ship');
    if (randomCount < 1) {
      enableStartGameButton();
    }
    randomCount++;
  })
}

export { randomShips };