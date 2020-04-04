// A simple guessing game for people

//STEP 1: Generate a random number - done
//STEP 2: Give the user ability to guess - done
//STEP 3: Give hint if they were wrong - done
//STEP 4: If they win - say they win! - done

// ALLOWS USER TO CLICK ENTER TO MAKE SUBMISSION
let input = document.getElementById("number");

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("submit").click();
  }
});

let randomNumber = Math.floor(Math.random() * 11);

function guessGame() {
  if (randomNumber === 0) {
    randomNumber + 1;
  }

  let hint = document.getElementById("hint");
  let guess = document.getElementById("number").value;

  if (isNaN(guess)) {
    console.log(randomNumber);
    hint.innerHTML = "<em> That's not a number.</em>";
  } else if (guess < 1) {
    console.log(randomNumber);
    hint.innerHTML = "<em>That's definitely lower than 1.</em>";
    randomNumber = Math.floor(Math.random() * 11);
  } else if (guess > 10) {
    console.log(randomNumber);
    hint.innerHTML = "<em>That's definitely higher than 10.</em>";
  } else if (randomNumber > guess) {
    console.log(randomNumber);
    hint.innerHTML = "<em>You guessed to low</em>";
  } else if (randomNumber < guess) {
    console.log(randomNumber);
    hint.innerHTML = "<em>You guessed to high</em>";
  } else {
    hint.innerHTML =
      "<em>You got it! If you want, you can try to guess another number.</em>";
    randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
  }
}
