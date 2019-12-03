/* eslint-disable import/prefer-default-export */
const Ship = (id, name, size) => ({
  id,
  name,
  size,
  cells: [],
  cellsHit: [],
  isSink: false,
});

export { Ship };
