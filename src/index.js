import './styles/style.scss';
import Ship from './partials/ship-class';
import GameBoard from './partials/game-board-class';
import DOMelements from './partials/DOMelements';
import Player from './partials/player-class';

const startGame = () => {
  let ships = [Ship(0, 5), Ship(1, 4), Ship(2, 3), Ship(3, 2), Ship(4, 2)]
  let ships2 = [Ship(0, 5), Ship(1, 4), Ship(2, 3), Ship(3, 2), Ship(4, 2)]
  DOMelements.enableStartButton();
  DOMelements.pushPlayerTableArray();
  let board1 = GameBoard(ships);
  let board2 = GameBoard(ships2);
  let human = Player();
  let CPU = Player();
  DOMelements.putShipButtonAction(board1);
  DOMelements.putRandomShipsButtonAction(board1, board2);
  DOMelements.addActionToCells(board1, board2, human, CPU);
  DOMelements.reset();
}

startGame();