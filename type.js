let type = {
  contents : words , index : 0 , text : 'hello', finalScore : -1  , correctKeys: 0 , wrongKeys : 0 , finalScore : -1
}

type.isCorrectKey =  function(key){
  return this.text[this.index] == key;
}

type.updateText = function(){
  if(this.index==this.text.length){
    type.setText();
  }
}

type.updateIndexForBackSpace = function(){
  if (this.index>0) {
    --this.index;
  }
}


type.setValues = function () {
  type.correctKeys = 0;
  type.wrongKeys = 0;
  type.index = 0;
  type.finalScore++;
}
type.setText = function(){
  type.setValues();
  document.getElementById('textArea').value = '';
  type.text = type.contents[Math.floor(Math.random()*type.contents.length)];
  document.getElementById('text').innerHTML =type.text;
}

type.updateDisplay = function(){
  ++this.index;
  ++this.correctKeys;
  this.updateText();
}
