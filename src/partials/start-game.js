import { ships } from "./create-ships";
import { shipsCPU } from "./create-ships-cpu";

let startGameButton = document.querySelector('#start-game');
let selectArea = document.querySelector('#select-area');
let table1 = document.querySelector('#table1');
let table2 = document.querySelector('#table2');
let turn = 0;
let tablePlayerArray = [];
let messageArea = document.querySelector('#message-area');

let pushPlayerTableArray = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      tablePlayerArray.push(table1.firstChild.children[i].children[j]);
    }
  }
}

let randomClick = () => {
  let num = tablePlayerArray.length;
  let randomCell = Math.floor(Math.random() * num);
  tablePlayerArray[randomCell].click();
  tablePlayerArray.splice(randomCell, 1);
}

let turns = turn => {
  if (turn % 2 === 1){
    randomClick();
  }
}

let finishGame = (shipArr, turn) => {
  if (shipArr[0].isSink && shipArr[1].isSink && shipArr[2].isSink && shipArr[3].isSink && shipArr[4].isSink) {
    table2.style.pointerEvents = 'none';
    if (turn % 2 === 0) {
      messageArea.innerHTML = 'CPU Win';
    } else {
      messageArea.innerHTML = 'Player Win';
    }
  } else {
    turns(turn);
  }
}

let addActionToCell = (table, shipArr) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      table.firstChild.children[i].children[j].addEventListener('click', function clickCell(e) {
        for (let k = 0; k < shipArr.length; k++) {
          if (shipArr[k].cells.includes(e.target)) {
            e.target.classList.remove('miss-hit');
            e.target.classList.remove('ship-cpu');
            e.target.classList.add('ship-hit');
            shipArr[k].cellsHit.push(e.target);
            if (shipArr[k].cells.length === shipArr[k].cellsHit.length) {
              shipArr[k].isSink = true;
            }
            break;
          } else {
            e.target.classList.add('miss-hit');
          }
          console.log(e.target);
        }
        e.target.removeEventListener('click', clickCell);
        turn++;
        finishGame(shipArr, turn);
      })
    }
  }
}


let startGame = () => {
  startGameButton.addEventListener('click', () => {
    selectArea.classList.add('hide');
    addActionToCell(table1, ships);
    addActionToCell(table2, shipsCPU);
    table1.style.pointerEvents = 'none';
    startGameButton.disabled = true;
  })
}

export { startGame, pushPlayerTableArray }