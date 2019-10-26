var dice = document.getElementsByClassName("dice");
var result_data = document.getElementsByClassName("result")[0];

function diceGame() {
  var random1 = Math.round(Math.random() * 5 + 1);
  var random2 = Math.round(Math.random() * 5 + 1);
  console.log(random1, random2);
  dice1(random1);
  dice2(random2);
  result(random1, random2);
}

function dice1(random) {
  if (random == 1) dice[0].innerHTML = "&#9856";
  else if (random == 2) dice[0].innerHTML = "&#9857";
  else if (random == 3) dice[0].innerHTML = "&#9858";
  else if (random == 4) dice[0].innerHTML = "&#9859";
  else if (random == 5) dice[0].innerHTML = "&#9860";
  else if (random == 6) dice[0].innerHTML = "&#9861";
}

function dice2(random) {
  if (random == 1) dice[1].innerHTML = "&#9856";
  else if (random == 2) dice[1].innerHTML = "&#9857";
  else if (random == 3) dice[1].innerHTML = "&#9858";
  else if (random == 4) dice[1].innerHTML = "&#9859";
  else if (random == 5) dice[1].innerHTML = "&#9860";
  else if (random == 6) dice[1].innerHTML = "&#9861";
}

function result(random1, random2) {
  if (random1 > random2) result_data.innerHTML = "Player1 Won!";
  else if (random1 < random2) result_data.innerHTML = "Player2 Won!";
  else if (random1 == random2) result_data.innerHTML = "Its'a tie";
}
