let Ship = (id, name, size) => {
  return {
    id,
    name,
    size,
    cells: [],
    cellsHit: [],
    isSink: false
  }
}

export { Ship }