/* eslint-disable import/prefer-default-export */

import './styles/style.scss';
import { putShip, resetValues } from './partials/put-ship';
import { createShips } from './partials/create-ships';
import { pushPlayerTableArray } from './partials/start-game';
import { createShipsCPU, shipsCPU } from './partials/create-ships-cpu';
import { randomPosition } from './partials/random-position';
import { randomShips } from './partials/random';
import { reset } from './partials/reset-game';

const table2 = document.querySelector('#table2');

putShip();
createShips();
createShipsCPU();
resetValues();
randomShips();
randomPosition(shipsCPU, table2);
pushPlayerTableArray();
reset();
