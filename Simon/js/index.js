let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const box10 = document.querySelector(".box10");
const box11 = document.querySelector(".box11");
const box12 = document.querySelector(".box12");
const box13 = document.querySelector(".box13");
const box14 = document.querySelector(".box14");
const box15 = document.querySelector(".box15");
const box16 = document.querySelector(".box16");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

startButton.addEventListener("click", (event) => {
  if (on == false || win) {
    startButton.classList.add("on");
    let audio = document.getElementById('on');
    audio.play();
    play();
  }
});

startButton.addEventListener("click", (event) => {
  if (on == true) {
    startButton.classList.remove("on");
    let audio = document.getElementById('off');
    audio.play();
    clearInterval(intervalId);
    compTurn = false;
    noneColor();
    on = false;
    turnCounter.innerHTML = "";
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  activeColor();
  for (var i = 0; i < 50; i++) {
    order.push(Math.floor(Math.random() * 16) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      if (order[flash] == 5) five();
      if (order[flash] == 6) six();
      if (order[flash] == 7) seven();
      if (order[flash] == 8) eight();
      if (order[flash] == 9) nine();
      if (order[flash] == 10) ten();
      if (order[flash] == 11) eleven();
      if (order[flash] == 12) twelve();
      if (order[flash] == 13) thirTeen();
      if (order[flash] == 14) fourTeen();
      if (order[flash] == 15) fiveTeen();
      if (order[flash] == 16) sixTeen();
      flash++;
    }, 200);
  }
}

function activeColor() {
  activeOne();
  activeTwo();
  activeThree();
  activeFour();
  activeFive();
  activeSix();
  activeSeven();
  activeEight();
  activeNine();
  activeTen();
  activeEleven();
  activeTwelve();
  activeThirTeen();
  activeFourTeen();
  activeFiveTeen();
  activeSixTeen();
}

function noneColor() {
  onenone();
  twonone();
  threenone();
  fournone();
  fivenone();
  sixnone();
  sevenone();
  eightnone();
  ninenone();
  tenone();
  elevenone();
  twelvenone();
  thirTeenone();
  fourTeenone();
  fivTeenone();
  sixTeenone();
}

function clearColor() {
  clearOne();
  clearTwo();
  clearThree();
  clearFour();
  clearFive();
  clearSix();
  clearSeven();
  clearEight();
  clearNine();
  clearTen();
  clearEleven();
  clearTwelve();
  clearThirTeen();
  clearFourTeen();
  clearFivTeen();
  clearSixTeen();
}

function flashColor() {
  flashOne();
  flashTwo();
  flashThree();
  flashFour();
  flashFive();
  flashSix();
  flashSeven();
  flashEight();
  flashNine();
  flashTen();
  flashEleven();
  flashTewlve();
  flashThirTeen();
  flashFourTeen();
  flashFivTeen();
  flashSixTeen();
}

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) {
    good = false;
    let audio = document.getElementById('error');
    audio.play();
  }
  if (playerOrder.length == 5 && good) {
    let audio = document.getElementById('win')
    setTimeout(() => {
      audio.play();
    }, 400);
    winGame();
  }
  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";

    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 2000);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }
}

function winGame() {
  compTurn = true;
  flash = 0;
  playerOrder = [];
  intervalId = setInterval(gameTurn, 800);
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
  setTimeout(() => {
    window.location.href = "fly.html";
  }, 5000);
}
