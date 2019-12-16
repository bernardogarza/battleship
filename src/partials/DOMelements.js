const DOMelements = (() => {
  const putRandomShipsButton = document.querySelector('#random');
  const putShipButton = document.querySelector('#put-ship');
  const selectedShip = document.querySelector('#ships-list');
  const selectedOrientation = document.querySelector('#ship-orientation');
  const selectedRow = document.querySelector('#select-row');
  const selectedColumn = document.querySelector('#select-column');
  const table1 = document.querySelector('#table1');
  const table2 = document.querySelector('#table2');
  const startGameButton = document.querySelector('#start-game');
  const messageArea = document.querySelector('#message-area');
  const resetButton = document.querySelector('#reset-game');
  const selectArea = document.querySelector('#select-area');
  const tablePlayerArray = [];
  let turn = 0;

  const pushPlayerTableArray = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        tablePlayerArray.push(table1.children[i].children[j]);
      }
    }
  };

  const enableStartButton = () => {
    startGameButton.disabled = true;
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

  const reset = () => {
    resetInputValues();
    resetButton.addEventListener('click', () => {
      location.reload();
    });
  };

  const cleanCells = () => {
    for (let i = 0; i < table1.children.length; i++) {
      for (let j = 0; j < table1.children[i].children.length; j++) {
        table1.children[i].children[j].classList.remove('ship');
        table2.children[i].children[j].classList.remove('ship');
      }
    }
  };

  const markCells = (board, table, auto) => {
    if (auto) {
      board.putShipAuto();
    }
    for (let i = 0; i < table.children.length; i++) {
      for (let j = 0; j < table.children[i].children.length; j++) {
        if (board.tableGrid[i][j].empty === false) {
          table.children[i].children[j].classList.add('ship');
        }
      }
    }
  };

  const addActionToCells = (board1, board2, human, CPU) => {
    startGameButton.addEventListener('click', () => {
      board2.putShipAuto();
      selectArea.classList.add('hide');
      table1.style.pointerEvents = 'none';
      startGameButton.disabled = true;
      for (let i = 0; i < table1.children.length; i++) {
        for (let j = 0; j < table1.children[i].children.length; j++) {
          table1.children[i].children[j].addEventListener('click', function clickCell(e) {
            if (board1.tableGrid[i][j].empty === false && board1.tableGrid[i][j].hit === false) {
              CPU.attack(board1, table1, i, j, 'ship-hit');
            } else {
              CPU.attack(board1, table1, i, j, 'miss-hit');
            }
            CPU.win(turn, board1.gameOver(), table2, messageArea);
            turn++;
            e.target.removeEventListener('click', clickCell);
          });
          table2.children[i].children[j].addEventListener('click', function clickCell(e) {
            if (board2.tableGrid[i][j].empty === false && board2.tableGrid[i][j].hit === false) {
              human.attack(board2, table2, i, j, 'ship-hit');
            } else {
              human.attack(board2, table2, i, j, 'miss-hit');
            }
            human.win(turn, board2.gameOver(), table2, messageArea);
            if (!board2.gameOver()) {
              turn++;
              CPU.randomAttack(table1);
            }
            e.target.removeEventListener('click', clickCell);
          });
        }
      }
    });
  };

  const putRandomShipsButtonAction = (board1, board2) => {
    putRandomShipsButton.addEventListener('click', () => {
      cleanCells();
      markCells(board1, table1, true);
      board2.putShipAuto();
      startGameButton.disabled = false;
      disableSelectionOnRandom();
    });
  };

  const putShipButtonAction = (board) => {
    let count = 0;
    putShipButton.addEventListener('click', () => {
      if (board.putShipManually(parseInt(selectedShip.value), parseInt(selectedRow.value),
        parseInt(selectedColumn.value), parseInt(selectedOrientation.value))) {
        markCells(board, table1);
        disableSelection();
        resetInputValues();
        putRandomShipsButton.disabled = true;
        count++;
        if (count === 5) {
          startGameButton.disabled = false;
        }
      }
    });
  };

  return {
    enableStartButton,
    putRandomShipsButtonAction,
    putShipButtonAction,
    addActionToCells,
    pushPlayerTableArray,
    reset,
  };
})();

export default DOMelements;
