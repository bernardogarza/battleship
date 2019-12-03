/* eslint-disable import/prefer-default-export */
import { ships } from './create-ships';
import { startGame } from './start-game';

const putShipButton = document.querySelector('#put-ship');
const selectedShip = document.querySelector('#ships-list');
const selectedOrientation = document.querySelector('#ship-orientation');
const selectedRow = document.querySelector('#select-row');
const selectedColumn = document.querySelector('#select-column');
const table1 = document.querySelector('#table1');
const startGameButton = document.querySelector('#start-game');
let count = 0;


const validateEmpty = (ship, orientation, row, column) => {
  if (ship === '' || orientation === '' || row === '' || column === '') {
    return false;
  }
  return true;
};

const identifyShip = (shipSelected, shipArr) => {
  for (let i = 0; i < shipArr.length; i += 1) {
    if (parseInt(shipSelected) === shipArr[i].id) {
      return shipArr[i];
    }
  }
};

const validateLength = (shipSelected, shipArr, orientation, row, column) => {
  const ship = identifyShip(shipSelected, shipArr);
  if (parseInt(orientation) === 0) {
    if (10 - column < ship.size) {
      return false;
    }
    return true;
  }
  if (10 - row < ship.size) {
    return false;
  }
  return true;
};

const validateCell = (table, shipSel, shipArr, orientation, row, column) => {
  const ship = identifyShip(shipSel, shipArr);
  if (parseInt(orientation) === 0) {
    for (let i = parseInt(column); i < (parseInt(column) + ship.size); i++) {
      for (let j = 0; j < shipArr.length; j++) {
        if (shipArr[j].cells.includes(table.firstChild.children[parseInt(row)].children[i])) {
          return false;
        }
      }
    }
    return true;
  }
  for (let i = parseInt(row); i < (parseInt(row) + ship.size); i++) {
    for (let j = 0; j < shipArr.length; j++) {
      if (shipArr[j].cells.includes(table.firstChild.children[i].children[parseInt(column)])) {
        return false;
      }
    }
  }
  return true;
};

const markCell = (table, shipSel, shipArr, orientation, row, column, addClass) => {
  const ship = identifyShip(shipSel, shipArr);
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
};

const disableSelection = () => {
  selectedShip.options[selectedShip.options.selectedIndex].disabled = true;
};

const disableSelectionOnRandom = () => {
  for (let i = 0; i < selectedShip.options.length; i += 1) {
    selectedShip.options[i].disabled = true;
  }
};

const resetInputValues = () => {
  selectedShip.value = '';
  selectedOrientation.value = '';
  selectedRow.value = '';
  selectedColumn.value = '';
};

const resetValues = () => {
  resetInputValues();
  startGameButton.disabled = true;
  count = 0;
};

const addCount = () => {
  count++;
};

const enableStartGameButton = () => {
  startGameButton.disabled = false;
  startGame();
};

const cleanTable = (table) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      table.firstChild.children[i].children[j].classList.remove('ship');
    }
  }
};

const cleanShipCells = (ship) => {
  for (let i = 0; i < ship.length; i++) {
    ship[i].cells = [];
  }
};

const putShip = () => {
  putShipButton.addEventListener('click', () => {
    if (validateEmpty(selectedShip.value, selectedOrientation.value,
      selectedRow.value, selectedColumn.value)
    && validateLength(selectedShip.value, ships, selectedOrientation.value,
      selectedRow.value, selectedColumn.value)
    && validateCell(table1, selectedShip.value, ships, selectedOrientation.value,
      selectedRow.value, selectedColumn.value)) {
      markCell(table1, selectedShip.value, ships, selectedOrientation.value, selectedRow.value, selectedColumn.value, 'ship');
      addCount();
      disableSelection();
      resetInputValues();
      if (count === 5) {
        enableStartGameButton();
      }
    }
  });
};

export {
  putShip, resetValues, cleanTable, cleanShipCells, validateLength, validateCell,
  markCell, enableStartGameButton, disableSelectionOnRandom, validateEmpty,
};
