// letters
let letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters
let lettersArray = Array.from(letters);

// sellect letters container
let lettersContainer = document.querySelector(".letters");

// generat letters
lettersArray.forEach((letter) => {
  // create span
  let span = document.createElement("span");

  // create letter text nod
  let theLetter = document.createTextNode(letter);

  // append the letter to span
  span.appendChild(theLetter);

  // add class to span
  span.className = "letter-box";

  // append span to letters container
  lettersContainer.appendChild(span);
});

// object of words + categories

let words = {
  programing: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "prestige",
    "inception",
    "parasite",
    "interstellar",
    "whiplash",
    "memento",
    "coco",
    "up",
  ],
  people: [
    "alpert eneshtein",
    "hitchcock",
    "alexander",
    "cleopatra",
    "mahatma ghandi",
  ],
  countries: ["syria", "phelastein", "pahrin", "egypt", "yaman", "qatar"],
};

//get random property
let allKeys = Object.keys(words);

// random numbers depend on keys length
let randPropNamber = Math.floor(Math.random() * allKeys.length);

// category
let randPropName = allKeys[randPropNamber];

// category words
let randPropValue = words[randPropName];

// random numbers depend on words
let randValueNamber = Math.floor(Math.random() * randPropValue.length);

// the chosen word
let randomValueValue = randPropValue[randValueNamber];

// set category info
document.querySelector(".game-info .category span").innerHTML = randPropName;

// sellect letters guess element
let lettersGuessContainer = document.querySelector(".letters-guess");

// convert chosen words to array
let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach((letter) => {
  // create empty span
  let epmtySpan = document.createElement("span");

  // if letters is space
  if (letter === " ") {
    // add class to span
    epmtySpan.className = "with-space";
  }

  // append span to letters guass container
  lettersGuessContainer.appendChild(epmtySpan);
});

let guessSpan = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let thedrow = document.querySelector(".hangman-drow");

// handle clicking on letters
document.addEventListener("click", (e) => {
  // set the chosen status
  let thestatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    //get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    theChosenWord.forEach((wordLetter, wordindex) => {
      // if the clicked letter equal to the chosen word
      if (theClickedLetter == wordLetter) {
        // set the correct status
        thestatus = true;
        // loop on all guess span
        guessSpan.forEach((span, spanindex) => {
          if (wordindex === spanindex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    //if the letter is wrong
    if (thestatus !== true) {
      // increase the wrong attempts
      wrongAttempts++;
      thedrow.classList.add(`Wrong-${wrongAttempts}`);

      if (wrongAttempts == 8) {
        lettersContainer.classList.add("finished");
        endGame();
      }
    } else {
    }
  }
});

// end game function
function endGame() {
  // create pop div
  let div = document.createElement("div");

  // creat text div
  let textDiv = document.createTextNode(
    `Game Over , The word is ${randomValueValue}`
  );

  //append text to div
  div.appendChild(textDiv);

  // add class to div
  div.className = "popup";

  // append div to body
  document.body.appendChild(div);
}
