const updateScore = function(){
   document.getElementById('correct').innerHTML = type.correctKeys;
   document.getElementById('wrong').innerHTML = type.wrongKeys;
}

const evaluter = function(event){
  let key=event.key;
  if(event.keyCode == 8){
    type.updateIndexForBackSpace();
  }else
    if(type.isCorrectKey(key)){
      ++type.index;
      ++type.correctKeys;
      type.updateText();
  }else {
    ++type.index;
    ++type.wrongKeys
  }
  updateScore();
}

const stopGame = function(){
  document.getElementById('textArea').disabled = true;
}

const displayScore = function(){
  document.getElementById('scoreDiv').innerHTML = 'score:'+type.finalScore;
  stopGame();
}

const insertClickListner = function(){
  let stop = document.getElementById('stop');
  stop.onclick = displayScore;
}

const insertKeyListner = function(){
  let element = document.getElementById('textArea');
  element.onkeyup = evaluter;
}

const setText = function(){
  type.setText();
}

const loadGame = function(){
  insertKeyListner();
  insertClickListner();
  setText();
}

window.onload = loadGame;
