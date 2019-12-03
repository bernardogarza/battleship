let Ship = (id, name, size) => {
  return {
    id,
    name,
    size,
    cells: [],
    cellsHit: [],
    sink: false
  }
}

export { Ship }