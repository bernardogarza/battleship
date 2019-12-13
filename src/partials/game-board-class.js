const GameBoard = (ships) => {
  const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tableGrid = new Array(10);
  row.forEach((rowItem, i) => {
    tableGrid[i] = [];
    col.forEach((colItem) => {
      tableGrid[i].push({
        coord: `${rowItem}${colItem}`,
        empty: true,
        hit: false,
      });
    });
  });
  const validatePosition = (ship, row, col, orientation) => {
    if (orientation === 0) {
      for (let i = col; i < col + ship.size; i++) {
        if (!tableGrid[row][i] || !tableGrid[row][i].empty) {
          return false;
        }
      }
    } else {
      for (let i = row; i < row + ship.size; i++) {
        if (!tableGrid[i] || !tableGrid[i][col].empty) {
          return false;
        }
      }
    }
    return true;
  };

  let count = 0;
  const randomOrientation = () => Math.floor(Math.random() * 2);
  const randomRowColumn = () => Math.floor(Math.random() * 10);
  const resetValues = () => {
    count = 0;
    ships.forEach((ship) => {
      ship.cells = [];
    });
    tableGrid.forEach((row) => {
      row.forEach((col) => {
        col.empty = true;
      });
    });
  };

  const putShipAuto = () => {
    resetValues();
    while (count < ships.length) {
      const row = randomRowColumn();
      const col = randomRowColumn();
      const orientation = randomOrientation();
      if (validatePosition(ships[count], row, col, orientation)) {
        if (orientation === 0) {
          for (let i = col; i < col + ships[count].size; i++) {
            tableGrid[row][i].empty = false;
            ships[count].cells.push(tableGrid[row][i].coord);
          }
        } else {
          for (let i = row; i < row + ships[count].size; i++) {
            tableGrid[i][col].empty = false;
            ships[count].cells.push(tableGrid[i][col].coord);
          }
        }
        count++;
      }
    }
  };

  const putShipManually = (id, row, col, orientation) => {
    if (validatePosition(ships[id], row, col, orientation)) {
      if (orientation === 0) {
        for (let i = col; i < col + ships[id].size; i++) {
          tableGrid[row][i].empty = false;
          ships[id].cells.push(tableGrid[row][i].coord);
        }
      } else {
        for (let i = row; i < row + ships[id].size; i++) {
          tableGrid[i][col].empty = false;
          ships[id].cells.push(tableGrid[i][col].coord);
        }
      }
      return true;
    }
  };

  const attack = (row, col) => {
    const { coord } = tableGrid[row][col];
    const ship = ships.filter((ship) => ship.cells.includes(coord))[0];
    if (ship) {
      ship.cellsHits.push(coord);
      tableGrid[row][col].hit = true;
    } else {
      tableGrid[row][col].hit = true;
    }
  };

  const gameOver = () => {
    let sunkedShips = 0;
    ships.forEach((ship) => {
      if (ship.isSink()) {
        sunkedShips++;
      }
    });
    if (sunkedShips === 5) {
      return true;
    }
    return false;
  };

  return {
    tableGrid,
    putShipAuto,
    attack,
    gameOver,
    putShipManually,
  };
};

export default GameBoard;
