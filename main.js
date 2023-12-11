// Quiz

document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Input
  let score = 0;
  let qone = document.getElementById("Q-1").value;
  let qtwo = document.getElementById("Q-2").value;
  let qthree = document.getElementById("Q-3").value;
  let qfour = document.getElementById("Q-4").value;

  // Process
  if (qone === "4") {
    document.getElementById("answer1").innerHTML = "Correct!";
    score = score + 1;
  } else if (qone === "four") {
    document.getElementById("answer1").innerHTML = "Correct!";
    score = score + 1;
  } else {
    document.getElementById("answer1").innerHTML =
      "Incorrect! (Correct Answer was 4)";
  }

  if (qtwo === "5") {
    document.getElementById("answer2").innerHTML = "Correct!";
    score = score + 1;
  } else if (qtwo === "five") {
    document.getElementById("answer1").innerHTML = "Correct!";
    score = score + 1;
  } else {
    document.getElementById("answer2").innerHTML =
      "Incorrect! (Correct Answer was 5)";
  }

  if (qthree === "30") {
    document.getElementById("answer3").innerHTML = "Correct!";
    score = score + 1;
  } else if (qthree === "thirty") {
    document.getElementById("answer1").innerHTML = "Correct!";
    score = score + 1;
  } else {
    document.getElementById("answer3").innerHTML =
      "Incorrect! (Correct Answer was 30)";
  }

  if (qfour === "4") {
    document.getElementById("answer4").innerHTML = "Correct!";
    score = score + 1;
  } else if (qfour === "four") {
    document.getElementById("answer1").innerHTML = "Correct!";
    score = score + 1;
  } else {
    document.getElementById("answer4").innerHTML =
      "Incorrect! (Correct Answer was 4)";
  }

  // Score Output
  if (score === 0) {
    document.getElementById("score").innerHTML =
      "0/4 Oops! Remember to keep Practicing!";
  } else if (score === 1) {
    document.getElementById("score").innerHTML =
      "1/4 Oops! Remember to keep Practicing!";
  } else if (score === 2) {
    document.getElementById("score").innerHTML = "2/4 Youre halfway there!";
  } else if (score === 3) {
    document.getElementById("score").innerHTML = "3/4 Nice! Almost there!";
  } else if (score === 4) {
    document.getElementById("score").innerHTML =
      "4/4 Congratulations you got them all!";
  }
}
