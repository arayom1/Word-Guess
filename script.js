//variables
var countWins = 0;
var countLosses = 0;
var remainingGuesses = 10;

var selectedWord = " ";
var lettersInSelectedWord = [];
var emptySpaces = 0;
var emptyAndLetters = [];
var wrongLetters = [];
var listOfWords = ["lebron", "kobe", "durant", "curry", "kyrie"];

// Main process
startGame();
document.onkeyup = function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90){
    var letterGuessed = event.key.toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
  }
}

//functions

function startGame(){
    remainingGuesses = 10;
    selectedWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    lettersInSelectedWord = selectedWord.split("");
    emptySpaces = lettersInSelectedWord.length;
    console.log(selectedWord);

    emptyAndLetters = [];
    wrongLetters = [];
    for(var i = 0; i <emptySpaces; i++){
      emptyAndLetters.push("_");
    }
    console.log(emptyAndLetters);

    document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
    document.getElementById("empty_spaces").innerHTML = emptyAndLetters.join(" ");
    document.getElementById("wrong_letters").innerHTML = wrongLetters.join(" ");
}

function checkLetters(letter){
    var letterInWord = false;
    for (var i = 0; i < emptySpaces; i++){
      if (selectedWord[i] === letter){
        letterInWord = true;
      }
    }

    if (letterInWord) {
      for (var j = 0; j < emptySpaces; j++){
        if(selectedWord[j] === letter){
          emptyAndLetters[j] = letter;
        }
      }
      console.log(emptyAndLetters);
    }
    else{
      wrongLetters.push(letter);
      remainingGuesses--;
    }
}

function roundComplete(){
    console.log("wins: " + countWins + "| losses: " + countLosses + "| remaining guesses: " + remainingGuesses);

    document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
    document.getElementById("empty_spaces").innerHTML = emptyAndLetters.join(" ");
    document.getElementById("wrong_letters").innerHTML = wrongLetters.join(" ");

    if (lettersInSelectedWord.toString() === emptyAndLetters.toString()){
      
      alert("you win!");
      countWins++;
      document.getElementById("count_wins").innerHTML = countWins;
      startGame();
    }
    else if (remainingGuesses === 0) {
      alert("you lose!");
      countLosses++;
      document.getElementById("count_losses").innerHTML = countLosses;
      startGame();
    }
    
}