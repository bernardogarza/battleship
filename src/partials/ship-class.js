const Ship = (idInput, sizeInput) => {
  const id = idInput;
  const size = sizeInput;
  const cells = [];
  const cellsHits = [];
  const isSink = () => {
    if (cellsHits.length === size) {
      return true;
    }
    return false;
  };

  return {
    id,
    size,
    cells,
    cellsHits,
    isSink,
  };
};

export default Ship;
