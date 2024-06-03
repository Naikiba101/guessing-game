let numbre = Math.trunc(Math.random() * 20) + 1 ;
let score = 20 ;
let hightScore =0 ;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when the user dont put a guess
  if (!guess) {
    document.querySelector(".message").textContent = "⚠️ Please enter a number";
    // when the user wins
  } else if (guess === numbre) {
    document.querySelector(".message").textContent = "Correct number !";
    document.querySelector(".number").textContent = numbre;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if(score > hightScore){
        hightScore = score
        document.querySelector('.highscore').textContent = hightScore
    }

    // when the user loses the geme but the user put a high score
  } else if (guess > numbre) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To High !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the game please try again later";
      document.querySelector(".score").textContent = 0;
    }

    // when the user loses the geme but the user put a low score
  } else if (guess < numbre) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To Low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the game please try again";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  numbre = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
