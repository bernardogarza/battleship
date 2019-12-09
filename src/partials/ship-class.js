/* eslint-disable import/prefer-default-export */
const Ship = (id, name, size) => ({
  id,
  name,
  size,
  cells: [],
  cellsHit: [],
  isSink: () => {
    if (cells == cellsHit) {
      return true
    } else {
      return false
    }
  }
});

export { Ship };
