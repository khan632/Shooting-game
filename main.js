var gamestart = false;
var turn1 = true,
  turn2 = false;
var onstart = document.getElementById("start-btn");
var onrestart = document.getElementById("restart-btn");
var score1 = document.getElementById("score1").value;
var score2 = document.getElementById("score2").value;
var health1 = document.getElementById("health1").value;
var health2 = document.getElementById("health2").value;
var win1 = document.getElementById("win1").value;
var win2 = document.getElementById("win2").value;
var shoot1 = document.getElementById("shoot1");
var shoot2 = document.getElementById("shoot2");

onstart.addEventListener("click", function () {
  if (gamestart == false) {
    document.getElementById("score1-dis").innerHTML = 0;
    document.getElementById("score2-dis").innerHTML = 0;
    document.getElementById("health1-dis").innerHTML = 100;
    document.getElementById("health2-dis").innerHTML = 100;
    document.getElementById("win1-dis").innerHTML = win1;
    document.getElementById("win2-dis").innerHTML = win2;
  }
  gamestart = true;
});

shoot1.addEventListener("click", function () {
  if (gamestart == false) {
    window.alert("Please Click on play button to start the game!");
    return;
  }
  if (turn2) {
    window.alert("2nd Person Turn");
  }
  // document.getElementById("play").style.display = "none";
  health2 = parseInt(health2) - parseInt(getRandomNumber());
  // health2= parseInt(health2)- 50;
  if (health2 <= 0) {
    score1 = parseInt(score1) + 1;
    document.getElementById("score1-dis").innerHTML = score1;
    document.getElementById("health1-dis").innerHTML = 100;
    health1 = 100;
    health2 = 100;
    document.getElementById("health2-dis").innerHTML = 100;
    if (score1 == 3) {
      document.getElementById("score1-dis").innerHTML = 0;
      gamestart = false;
      show_tournament_winner("Player 1");
      win1 = parseInt(win1) + 1;
      document.getElementById("win1-dis").innerHTML = win1;
      score1 = 0;
    }

    showresult();
    return;
  }
  document.getElementById("health2-dis").innerHTML = health2;
  turn1 = false;
  turn2 = true;
});

shoot2.addEventListener("click", function () {
  if (gamestart == false) {
    window.alert("Please Click on play button to start the game!");
    return;
  }
  if (turn1) {
    window.alert("1st Person Turn");
  }
  health1 = parseInt(health1) - parseInt(getRandomNumber());
  if (health1 <= 0) {
    score2 = parseInt(score2) + 1;
    document.getElementById("score2-dis").innerHTML = score2;
    document.getElementById("health1-dis").innerHTML = 100;
    document.getElementById("health2-dis").innerHTML = 100;
    health1 = 100;
    health2 = 100;

    if (score2 == 3) {
      document.getElementById("score2-dis").innerHTML = 0;
      gamestart = false;
      show_tournament_winner("Player 2");
      win2 = parseInt(win2) + 1;
      document.getElementById("win1-dis").innerHTML = win2;
      score2 = 0;
    }

    showresult();

    return;
  }
  document.getElementById("health1-dis").innerHTML = health1;
  turn2 = false;
  turn1 = true;
});

function getRandomNumber() {
  return Math.floor(Math.random() * (5 + 1));
}

function showresult() {
  document.getElementById("play").style.display = "none";
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("restart-btn").style.display = "block";

  if (health1 <= 0) {
    document.getElementById("winner2").style.display = "block";
    document.getElementById("winner1").style.display = "none";
  } else {
    document.getElementById("winner2").style.display = "none";
    document.getElementById("winner1").style.display = "block";
  }
  document.getElementById("result").style.display = "flex";

  onrestart.addEventListener("click", function () {
    document.getElementById("play").style.cssText =
      "display:block, flex-direction:row,justify-content: space-evenly,align-items: baseline,align-content: end,flex-wrap: nowrap,margin-top: 31vh,justify-content: space-around,padding: 2px";
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("result").style.display = "none";
  });
}

function show_tournament_winner(player) {
  window.alert(player + "wins!");
}
