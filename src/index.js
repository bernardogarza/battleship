import './styles/style.scss';
import Ship from './partials/ship-class';
import GameBoard from './partials/game-board-class';
import DOMelements from './partials/DOMelements';
import Player from './partials/player-class';

const startGame = () => {
  const ships = [Ship(0, 5), Ship(1, 4), Ship(2, 3), Ship(3, 2), Ship(4, 2)];
  const ships2 = [Ship(0, 5), Ship(1, 4), Ship(2, 3), Ship(3, 2), Ship(4, 2)];
  DOMelements.enableStartButton();
  DOMelements.pushPlayerTableArray();
  const board1 = GameBoard(ships);
  const board2 = GameBoard(ships2);
  const human = Player();
  const CPU = Player();
  DOMelements.putShipButtonAction(board1);
  DOMelements.putRandomShipsButtonAction(board1, board2);
  DOMelements.addActionToCells(board1, board2, human, CPU);
  DOMelements.reset();
};

startGame();
