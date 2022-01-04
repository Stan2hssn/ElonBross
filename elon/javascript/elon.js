const littleCloud = document.querySelector(".little_cloud");
const cloud = document.querySelector(".cloud");
const smallCloud = document.querySelector(".small_cloud");
const bigCloud = document.querySelector(".big_cloud");
const block = document.querySelector(".block");
const elon = document.querySelector(".elon");
const gameStart = document.querySelector(".gameStart");
const timeOut = document.querySelector("#timeOut");

let isPlaying = false;
console.log(isPlaying);

// end();
let startPlaying = () => {
  const jumpForce = 10.0;
  const gravity = 0.2;

  let blockRect;
  let elonRect;

  let velocity = 0.0;
  let isGrounded = true;
  let coin = document.querySelector(".coin");

  if ((isPlaying = true)) {
    let startingMinutes = 1 / 2;
    let time = startingMinutes * 60;

    const countDownEl = document.querySelector("#countdown");

    function updateCountdown() {
      if (isPlaying == true) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        countDownEl.innerHTML = `${minutes} : ${seconds}`;

        time--;

        if (time < 5 && isPlaying == true) {
          countDownEl.classList.add("big");
        }

        if (time < !1 && isPlaying == true) {
          countDownEl.innerHTML = `0 : 00`;
          isPlaying = false;
          countDownEl.classList.remove("big");
          fadeIn();
          setTimeout(function () {
            end();
          }, 500);
        }
      }
    }

    function fadeIn() {
      timeOut.classList.add("fadeIn");
    }

    let count = 0;

    const getCount = document.querySelector("#score");

    function score() {
      getCount.innerHTML = `${count}`;
    }

    function end() {
      console.log("finish");
      document.querySelector(".explain").style.display = "none";
      document.querySelector("#playGround").style.display = "none";
      document.querySelector("#result").style.display = "block";
      block.style.display = "none";
      document.body.style.cursor = "auto";
      if (count > 100) {
        document.querySelector(".score_result").innerHTML = count;
        coin.style.display = "none";
      } else {
        document.querySelector(".score_result").innerHTML = "You suck !";
        document.querySelector(".score_result").style.fontSize = "48pt";
        // document.querySelector(".score_result").classList.add("translate");
        document.querySelector(".bitcoin").style.display = "none";
        document.querySelector(".column_result").classList.add("gap");
      }
    }

    setTimeout(function (n) {
      var f = function (e) {
        var c = e.which || e.keyCode;
        if (c == 13) {
          e.preventDefault();
          return false;
        }
      };

      document.body.onkeydown = function (y) {
        if (y.keyCode == 13 && isPlaying == false) {
          isPlaying = true;
          setInterval(updateCountdown, 1000);
          document.querySelector(".explain").style.display = "none";
          document.querySelector("#playGround").style.display = "block";
          console.log(isPlaying);
        }
      };
    }, 0);

    let update = () => {
      requestAnimationFrame(update);

      //on applique la gravité quoi qu'il arrive

      velocity += gravity;

      //on récupère la boite englobate de elon

      elonRect = elon.getBoundingClientRect();

      //on prédit la position à la frame d'après en ajout la position top et la velocity

      let top = elonRect.top + velocity;

      elon.style.top = window.innerHeight - elonRect.height - 180 + "px";

      //Si le haut de l'objet va être plus bas que le sol

      if (top >= window.innerHeight - elonRect.height - 180) {
        //on fixe la position d'elon

        elon.style.top = window.innerHeight - elonRect.height - 180 + "px";

        //on annule la vélocité

        velocity = 0;

        //on enlève la class 'fly' pour changer le backgound-image

        elon.classList.remove("fly");
        block.classList.remove("colision");

        //on dis qu'on est grounded

        isGrounded = true;
      } else {
        //Sinon on met à jour la position avec la vélocité
        elon.style.top = top + velocity + "px";
      }
    };

    update();

    function newCoin() {
      var div = document.createElement("div");

      div.id = "coin";

      div.className = "coin";

      document.body.appendChild(block);

      false;
    }

    console.log(blockRect);

    let init = () => {
      requestAnimationFrame(init);

      velocity += gravity;

      elonRect = elon.getBoundingClientRect();

      let top = elonRect.top + velocity;

      blockRect = block.getBoundingClientRect();
      let bottom = blockRect.bottom;

      if (top < bottom) {
        // coin.classList.add(".coinout")

        velocity = 0;

        block.classList.add("colision");

        console.log(count);

        blockRect = block.getBoundingClientRect();
        let bottom = blockRect.bottom;

        count += 100;
        score();
      }
    };

    init();

    document.body.onkeyup = function (e) {
      if (e.keyCode == 32 && isGrounded && isPlaying) {
        console.log("elon");

        console.log(isPlaying);

        //on enlève la class 'fly' pour changer le backgound-image

        elon.classList.add("fly");

        requestAnimationFrame(newCoin);

        //on récupère les données pour le saut

        velocity -= jumpForce;

        isGrounded = false;
      }
    };

    isPlaying = false;
    console.log(isPlaying);
  }
};

startPlaying();

// ^nuages //

document.addEventListener("mousemove", (e) => {
  littleCloud.style.transform = `translate(${e.clientX / 20}px, ${
    e.clientY / 20
  }px)`;
});

document.addEventListener("mousemove", (e) => {
  cloud.style.transform = `translate(${e.clientX / 20}px, ${e.clientY / 20}px)`;
});

document.addEventListener("mousemove", (e) => {
  smallCloud.style.transform = `translate(${e.clientX / 25}px, ${
    e.clientY / 25
  }px)`;
});

document.addEventListener("mousemove", (e) => {
  bigCloud.style.transform = `translate(${e.clientX / 30}px, ${
    e.clientY / 30
  }px)`;
});
