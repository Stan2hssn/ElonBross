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
  let audioLose = [
    document.getElementById("lose"),
    document.getElementById("lose2"),
    document.getElementById("lose3"),
  ];

  let audioWin = [
    document.getElementById("win"),
    document.getElementById("win2"),
    document.getElementById("win3"),
  ];

  let audioCoins = [
    document.getElementById("coins"),
    document.getElementById("coins1"),
    document.getElementById("coins1"),
    document.getElementById("coins2"),
    document.getElementById("coins3"),
  ];

  let audioMusic = [
    document.getElementById("music1"),
    document.getElementById("music2"),
    document.getElementById("music3"),
  ];

  let randomMusic = audioMusic[Math.floor(Math.random() * audioMusic.length)];

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
      randomMusic.pause();
      if (count > 9000) {
        document.querySelector('.lose').style.display = 'none';
        document.querySelector(".score_result").innerHTML = count;
        let randomWin = audioWin[Math.floor(Math.random() * audioWin.length)];
        randomWin.play();
      } else {
        document.querySelector('.win').style.display = 'none';
        document.querySelector(".score_result").innerHTML = "You suck !";
        document.querySelector(".score_result").style.fontSize = "48pt";
        // document.querySelector(".score_result").classList.add("translate");
        document.querySelector(".bitcoin").style.display = "none";
        document.querySelector(".column_result").classList.add("gap");
        let randomLose =
          audioLose[Math.floor(Math.random() * audioLose.length)];
        randomLose.play();
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
          let audio = document.getElementById("begin");
          audio.play();
          isPlaying = true;
          setInterval(updateCountdown, 1000);
          document.querySelector(".explain").style.display = "none";
          document.querySelector("#playGround").style.display = "block";
          console.log(isPlaying);
          randomMusic.volume = 0.4;
          randomMusic.play();
        }
      };
    }, 0);

    let update = () => {
      requestAnimationFrame(update);
      coinAnimation();

      //on applique la gravit?? quoi qu'il arrive

      velocity += gravity;

      //on r??cup??re la boite englobate de elon

      elonRect = elon.getBoundingClientRect();

      //on pr??dit la position ?? la frame d'apr??s en ajout la position top et la velocity

      let top = elonRect.top + velocity;

      elon.style.top = window.innerHeight - elonRect.height - 180 + "px";

      //Si le haut de l'objet va ??tre plus bas que le sol

      if (top >= window.innerHeight - elonRect.height - 180) {
        //on fixe la position d'elon

        elon.style.top = window.innerHeight - elonRect.height - 180 + "px";

        //on annule la v??locit??

        velocity = 0;

        //on enl??ve la class 'fly' pour changer le backgound-image

        elon.classList.remove("fly");
        block.classList.remove("colision");

        //on dis qu'on est grounded

        isGrounded = true;
      } else {
        //Sinon on met ?? jour la position avec la v??locit??
        elon.style.top = top + velocity + "px";
      }
    };

    update();

    function coinAnimation() {
      document.querySelectorAll(".coin").forEach((item) => {
        item.style.transform = `translate(${Number(
          item.getAttribute("move")
        )}px ,${
          Number(item.getAttribute("transform")) +
          Number(item.getAttribute("speed"))
        }px )`;

        item.setAttribute(
          "transform",
          Number(item.getAttribute("transform")) +
            Number(item.getAttribute("speed"))
        );

        item.setAttribute("speed", Number(item.getAttribute("speed")) + 0.1);

        if (Number(item.getAttribute("speed")) > 0) {
          item.style.zIndex = "9999";
        }

        // item.style.transform = `translateX(${Number(
        //   item.getAttribute("move")
        // )}px )`;

        // item.setAttribute(
        //   "move",
        //   Number(item.getAttribute("move")) +
        //     Math.sign(item.getAttribute("move"))
        // );

        if (Math.sign(Number(item.getAttribute("move"))) == 1) {
          item.setAttribute("move", Number(item.getAttribute("move")) + 2);
        } else {
          item.setAttribute("move", Number(item.getAttribute("move")) - 2);
        }
      });
    }

    function coin() {
      // var createTracer = document.createElement("div");

      // createTracer.id = "tracerLead";

      // createTracer.className = "tracerLead";

      // document.getElementById('tracer').prepend(createTracer);

      var div = document.createElement("div");

      div.className = "coin";

      div.setAttribute("speed", -5);

      div.setAttribute("transform", 0);

      div.setAttribute("move", (Math.floor(Math.random() * 2) - 0.5) * 2);

      console.log(Number(div.getAttribute("move")));

      document.querySelector("#tracer").appendChild(div);

      setTimeout(function () {
        // createTracer.remove();
        div.remove();
      }, 2000);
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
        let audioHurt = document.getElementById("hurt");
        audioHurt.volume = 0.5;
        audioHurt.play();

        let randomCoin =
          audioCoins[Math.floor(Math.random() * audioCoins.length)];

        randomCoin.volume = 0.1;
        randomCoin.play();

        velocity = 0;

        block.classList.add("colision");

        console.log(count);

        blockRect = block.getBoundingClientRect();
        let bottom = blockRect.bottom;

        requestAnimationFrame(coin);

        count += 100;
        score();
      }
    };

    init();

    document.body.onkeyup = function (e) {
      if (e.keyCode == 32 && isGrounded && isPlaying) {
        console.log("elon");

        let audio = document.getElementById("jump");
        audio.volume = 0.7;
        audio.play();

        console.log(isPlaying);

        //on enl??ve la class 'fly' pour changer le backgound-image

        elon.classList.add("fly");

        //on r??cup??re les donn??es pour le saut

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
