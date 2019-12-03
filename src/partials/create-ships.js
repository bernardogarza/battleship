import { Ship } from './ship-class';


let createShips = () => {
  let ships = [];
  ships.push(Ship(0, 'Ship 1', 5));
  ships.push(Ship(1, 'Ship 2', 4));
  ships.push(Ship(2, 'Ship 3', 3));
  ships.push(Ship(3, 'Ship 4', 2));
  ships.push(Ship(4, 'Ship 5', 2));
  return ships
}

let ships = createShips();

export { ships, createShips };