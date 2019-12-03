import { Ship } from './ship-class';

let shipsCPU = [];

let createShipsCPU = () => {
  shipsCPU.push(Ship(0, 'Ship 1', 5));
  shipsCPU.push(Ship(1, 'Ship 2', 4));
  shipsCPU.push(Ship(2, 'Ship 3', 3));
  shipsCPU.push(Ship(3, 'Ship 4', 2));
  shipsCPU.push(Ship(4, 'Ship 5', 2));
}

export { shipsCPU, createShipsCPU };