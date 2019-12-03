import { ships } from './create-ships'
import { startGame } from './start-game';

let putShipButton = document.querySelector('#put-ship');
let selectedShip = document.querySelector('#ships-list');
let selectedOrientation = document.querySelector('#ship-orientation');
let selectedRow = document.querySelector('#select-row');
let selectedColumn = document.querySelector('#select-column');
let table1 = document.querySelector('#table1');
let startGameButton = document.querySelector('#start-game');
let count = 0;


let validateEmpty = (ship, orientation, row, column) => {
  if (ship === '' || orientation === '' || row === '' || column === '') {
    return false;
  } else {
    return true;
  }
}

let identifyShip = (shipSelected, shipArr) => {
  for (let i = 0; i < shipArr.length; i++) {
    if (parseInt(shipSelected) === shipArr[i].id) {
      return shipArr[i];
    }
  }
}

let validateLength = (shipSelected, shipArr, orientation, row, column) => {
  let ship = identifyShip(shipSelected, shipArr);
  if (parseInt(orientation) === 0) {
    if (10 - column < ship.size) {
      return false;
    } else {
      return true;
    }
  } else {
    if (10 - row < ship.size) {
      return false;
    } else {
      return true;
    }
  }
}

let validateCell = (table, shipSel, shipArr, orientation, row, column) => {
  let ship = identifyShip(shipSel, shipArr);
  if (parseInt(orientation) === 0) {
    for (let i = parseInt(column); i < (parseInt(column) + ship.size); i++) {
      for (let j = 0; j < shipArr.length; j++) {
        if (shipArr[j].cells.includes(table.firstChild.children[parseInt(row)].children[i])) {
          return false
        }
      }
    }
    return true;
  } else {
    for (let i = parseInt(row); i < (parseInt(row) + ship.size); i++) {
      for (let j = 0; j < shipArr.length; j++) {
        if (shipArr[j].cells.includes(table.firstChild.children[i].children[parseInt(column)])) {
          return false
        }
      }
    }
    return true;
  }
}

let markCell = (table, shipSel, shipArr, orientation, row, column, addClass) => {
  let ship = identifyShip(shipSel, shipArr);
  if (parseInt(orientation) === 0) {
    for (let i = parseInt(column); i < (parseInt(column) + ship.size); i++) {
      if (addClass) {
        table.firstChild.children[parseInt(row)].children[i].classList.add(addClass);
      }
      ship.cells.push(table.firstChild.children[parseInt(row)].children[i]);
    }
  } else {
    for (let i = parseInt(row); i < (parseInt(row) + ship.size); i++) {
      if (addClass) {
        table.firstChild.children[i].children[parseInt(column)].classList.add(addClass);
      }
      ship.cells.push(table.firstChild.children[i].children[parseInt(column)]);
    }
  }
}

let disableSelection = () => {
  selectedShip.options[selectedShip.options.selectedIndex].disabled = true;
}

let disableSelectionOnRandom = () => {
  for(let i = 0; i< selectedShip.options.length; i += 1){
    selectedShip.options[i].disabled = true;
  }
}

let resetInputValues = () => {
  selectedShip.value = '';
  selectedOrientation.value = '';
  selectedRow.value = '';
  selectedColumn.value = '';
}

let resetValues = () => {
  resetInputValues();
  startGameButton.disabled = true;
  count = 0;
}

let addCount = () => {
  count++;
}

let enableStartGameButton = () => {
  startGameButton.disabled = false;
  startGame();
}

let cleanTable = table => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      table.firstChild.children[i].children[j].classList.remove('ship');
    }
  }
}

let cleanShipCells = ship => {
  for (let i = 0; i < ship.length; i++) {
    ship[i].cells = []
  }
}

let putShip = () => {
  putShipButton.addEventListener('click', () => {
    if (validateEmpty(selectedShip.value, selectedOrientation.value, selectedRow.value, selectedColumn.value) && validateLength(selectedShip.value, ships, selectedOrientation.value, selectedRow.value, selectedColumn.value) && validateCell(table1, selectedShip.value, ships, selectedOrientation.value, selectedRow.value, selectedColumn.value)) {
      markCell(table1, selectedShip.value, ships, selectedOrientation.value, selectedRow.value, selectedColumn.value, 'ship');
      addCount();
      disableSelection();
      resetInputValues();
      if (count == 5) {
        enableStartGameButton();
      }
    }
  });
}

export { putShip, resetValues, cleanTable, cleanShipCells, validateLength, validateCell, markCell, enableStartGameButton, disableSelectionOnRandom, validateEmpty };