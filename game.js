
const evaluter = function(event){
  let key=event.key;
  if(type.isCorrectKey(key)){
    type.updateDisplay();
  }else{
    displayScore()
  }
}

const stopGame = function(){
  document.getElementById('textArea').value +='\n game over';
  document.getElementById('textArea').disabled = true;
}

const displayScore = function(){
  document.getElementById('text').innerHTML += '\n score: '+type.finalScore;
  stopGame();
}

const setText = function(){
  type.finalScore = -1;
  type.setText();
  document.getElementById('textArea').disabled = false;

}

const insertStartClickListner = function () {
  let startGame = document.getElementById('startGame');
  startGame.onclick = setText;
}

const insertStopClickListner = function(){
  let stop = document.getElementById('stop');
  stop.onclick = displayScore;
}

const insertKeyListner = function(){
  let element = document.getElementById('textArea');
  element.onkeyup = evaluter;
}

const loadGame = function(){
  insertKeyListner();
  insertStopClickListner();
  insertStartClickListner();
}

window.onload = loadGame;
