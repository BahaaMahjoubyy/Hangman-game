// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = 'letter-box';

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);

});

// Object Of Words + Categories
const words = {
  Mekla: ['kosksi','Mloukhiya','Mlewi','Mtabga','Hargma','Slata','Kafteji'],
  Mousalsel: ['Choufli hal','Maktoub','Macheer','sayed erim'],
  Mezwed: ['malek rouhy','darkom','bari fout','zinek yesher','galouli rawah'],
  Machahir: ['farhat hached','lamin nahdi','Hend sabri','Hanabaal']
}

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
 let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
  let randomValueValue = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select letters Guess Element
 let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter === ' ') {

    // Add Class To The Span
    emptySpan.className = 'with-space';

  }

  // Append Span To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);

});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {

  // Set The Choose Status
  let theStatus = false;

  if (e.target.className === 'letter-box') {

    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {

      // If The Clicked Letter Equal To One Of The Chosen Word Letter
      if (theClickedLetter == wordLetter) {

        // Set Status To Correct
        theStatus = true;

        // Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {

            span.innerHTML = theClickedLetter;

          }

        });

      }

    });

    // Outside Loop

    // If Letter Is Wrong
    if (theStatus !== true) {

      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

     

      if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add("finished");

      }

    } else {

      // Play Success Sound
      document.getElementById("success").play();

    }

  }

});

// End Game Function
function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);
  ////////new
  if (wrongAttempts === 8) {
    document.getElementById("fail").play();
  } else {
    document.getElementById("success").play();
  }

}


// Restart Game Function
function restartGame() {
  // Reset wrong attempts
  wrongAttempts = 0;

  // Remove the "finished" class from lettersContainer
  lettersContainer.classList.remove("finished");

  // Remove the "wrong-X" class from theDraw
  for (let i = 1; i <= 8; i++) {
    theDraw.classList.remove(`wrong-${i}`);
  }

  // Remove the popup if it exists
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
  }

  // Clear the letters guess container
  lettersGuessContainer.innerHTML = "";

  // Generate a new random word
  randomPropNumber = Math.floor(Math.random() * allKeys.length);
  randomPropName = allKeys[randomPropNumber];
  randomPropValue = words[randomPropName];
  randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
  randomValueValue = randomPropValue[randomValueNumber];

  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML = randomPropName;

  // Convert Chosen Word To Array
  lettersAndSpace = Array.from(randomValueValue);

  // Create Spans Depending On Word
  lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");

    if (letter === ' ') {
      emptySpan.className = 'with-space';
    }

    lettersGuessContainer.appendChild(emptySpan);
  });

  // Select Guess Spans
  guessSpans = document.querySelectorAll(".letters-guess span");
}

function goToChat() {
  window.location.href = "chat.html";
}





































































































































































