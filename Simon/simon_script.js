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
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
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
const onButton = document.querySelector("on");
// const startButton = document.querySelector('#start');

onButton.addEventListener("click", (event) => {
  if (onButton.clicked == true) {
    on = true;
    onButton.style.display = "block";
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

onButton.addEventListener("click", (event) => {
  if (on || win) {
    on = false;
    onButton.style.display = "none";
    turnCounter.innerHTML = "-";
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

  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(order);
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;
  if ((flesh = turn)) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor;
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
      if (order[flash] == 15) fifTeen();
      if (order[flash] == 16) sixTeen();
      flash++;
    }, 200);
  }
}

function clearColor() {
  box1.classList.remove(clicked1);
  box2.classList.remove(clicked2);
  box3.classList.remove(clicked3);
  box4.classList.remove(clicked4);
  box5.classList.remove(clicked5);
  box6.classList.remove(clicked6);
  box7.classList.remove(clicked7);
  box8.classList.remove(clicked8);
  box9.classList.remove(clicked9);
  box10.classList.remove(clicked10);
  box11.classList.remove(clicked11);
  box12.classList.remove(clicked12);
  box13.classList.remove(clicked13);
  box14.classList.remove(clicked14);
  box15.classList.remove(clicked15);
  box16.classList.remove(clicked16);
}

function flashColor() {
  box1.classList.add(clicked1);
  box2.classList.add(clicked2);
  box3.classList.add(clicked3);
  box4.classList.add(clicked4);
  box5.classList.add(clicked5);
  box6.classList.add(clicked6);
  box7.classList.add(clicked7);
  box8.classList.add(clicked8);
  box9.classList.add(clicked9);
  box10.classList.add(clicked10);
  box11.classList.add(clicked11);
  box12.classList.add(clicked12);
  box13.classList.add(clicked13);
  box14.classList.add(clicked14);
  box15.classList.add(clicked15);
  box16.classList.add(clicked16);
}

function one() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked1");
}

function two() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked2");
}

function three() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked3");
}

function four() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked4");
}

function five() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked5");
}

function six() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked6");
}

function seven() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked7");
}

function eight() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked8");
}

function nine() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked9");
}

function ten() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked10");
}

function eleven() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked11");
}

function twelve() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked12");
}

function thirTeen() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked13");
}

function fourTeen() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked14");
}

function fifTeen() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked15");
}

function sixTeen() {
  if (noise) {
    let audio = document.getElementById("");
    audio.play();
  }
  noise = true;
  box1.classList.add(".clicked1");
}

box1.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(1);
    checked();
    one();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box2.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(2);
    checked();
    two();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box3.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(3);
    checked();
    three();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box4.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(4);
    checked();
    four();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box5.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(5);
    checked();
    five();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box6.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(6);
    checked();
    six();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box7.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(7);
    checked();
    seven();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box8.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(8);
    checked();
    eight();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box9.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(9);
    checked();
    nine();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box10.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(10);
    checked();
    ten();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box11.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(11);
    checked();
    eleven();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box12.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(12);
    checked();
    twelve();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box13.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(13);
    checked();
    thirTeen();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box14.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(14);
    checked();
    fourTeen();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box15.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(15);
    checked();
    fifTeen();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

box16.addEventListener("clicked", (event) => {
  if (on) {
    playerOrder.push(16);
    checked();
    sixTeen();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

function checked() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 10 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "no";
    setTimeout(() => {
      turnCounter.innerHTML = trun;
      clearColor();
      compTurn = true;
      flash = 0;
      playerOrder = [];
      good = true;
      intervalId = setInterval(gameTurn, 800);
      //   if(strict){
      //       play();
      //   }
    }, 800);

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
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}
