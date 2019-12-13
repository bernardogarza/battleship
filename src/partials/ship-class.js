const Ship = (id_input, size_input) => {
  let id = id_input;
  let size = size_input;
  let cells = [];
  let cellsHits = [];
  let isSink = () => {
    if (cellsHits.length === size) {
      return true
    }
    return false
  }

  return {
    id,
    size,
    cells,
    cellsHits,
    isSink
  }
}

export default Ship;
