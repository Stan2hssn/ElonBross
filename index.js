const WheelSpeed = 2;
const sky = document.querySelector(".sky");
const mars = document.querySelector(".mars");
const earth = document.querySelector(".earth");
const simonGame = document.querySelector(".simon_card");
const elonGame = document.querySelector(".elon_card");
// const souris = document.querySelector(".pixelCursor");
// const tesla = document.querySelector(".move_tesla");
const block = document.querySelector(".block");

let cursor;
let slider;
let currentX = 0;
let previousX = 0;
let downX = 0;

let isDown = false;

let mousePos = { x: 0, y: 0 };

let windowWidth;
let itemWidth;

var init = (e) => {
  cursor = document.querySelector(".cursor");
  slider = document.querySelector(".items");

  windowWidth = window.innerWidth;
  itemWidth = slider.getBoundingClientRect().width;

  document.onmousedown = onMouseDown;
  document.onmouseleave = onMouseUp;
  document.onmouseup = onMouseUp;
  document.onmousemove = onMouseMove;
  document.onwheel = onWheel;

  cursor.classList.remove("pushMouse");

  tick();
};

var onMouseDown = (e) => {
  isDown = true;
  downX = e.clientX;
  previousX = currentX;

  setTimeout(() => {
    const cache = document.querySelector(".cache");
    cache.style.opacity = "0";
  }, 3000);

  document.querySelector("#play").style.opacity = "0";

  setTimeout(() => {
    document.querySelector("#play").style.display = "none";
    const cache = document.querySelector(".cache");
    cache.style.display = "none";
  }, 5000);

  let audio = document.getElementById("musicHP");
  audio.play();

  console.log("work");
  console.log("offset ", currentX);

  slider.style.display = "block";
};

var onMouseUp = (e) => {
  isDown = false;
};

var onMouseMove = (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;

  if (!isDown) {
    return;
  }

  let distance = e.clientX - downX;
  currentX = previousX + distance;

  return;
};

var checkBorder = () => {
  if (currentX > 0) {
    currentX = 0;
    return;
  }

  if (currentX < -(itemWidth - windowWidth)) {
    console.log(currentX, -(itemWidth - windowWidth));
    currentX = -(itemWidth - windowWidth);
    return;
  }
};

var onWheel = (e) => {
  currentX += e.deltaY * WheelSpeed;
};

var tick = () => {
  requestAnimationFrame(tick);

  checkBorder();

  slider.style.transform = `translateX(${currentX}px)`;

  document.addEventListener("mousemove", (e) => {
    block.style.transform = `translate(${e.clientX / 30 - 20}px, ${
      e.clientY / 30
    }px)`;
  });

  document.addEventListener("mousemove", (e) => {
    elonGame.style.transform = `translate(${e.clientX / 30 - 20}px, ${
      e.clientY / 30
    }px)`;
  });

  document.addEventListener("mousemove", (e) => {
    simonGame.style.transform = `translate(${e.clientX / 30}px, ${
      e.clientY / 30
    }px)`;
  });

  document.addEventListener("mousemove", (e) => {
    earth.style.transform = `translate(${e.clientX / 30}px, ${
      e.clientY / 30
    }px)`;
  });

  document.addEventListener("mousemove", (e) => {
    mars.style.transform = `translate(${e.clientX / 30}px, ${
      e.clientY / 30
    }px)`;
  });

  document.addEventListener("mousemove", (e) => {
    sky.style.transform = `translate(${e.clientX / 30}px, ${e.clientY / 30}px)`;
  });


  if (isDown) {
    cursor.style.transform = `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))`;
    cursor.classList.add("pushMouse");
  } else {
    cursor.style.transform = `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))`;
    cursor.classList.remove("pushMouse");

    elonGame.addEventListener("mouseenter", () => {
      cursor.classList.remove("cursor");
      cursor.classList.add("cursor2");
    });

    elonGame.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor2");
      cursor.classList.add("cursor");
    });

    elonGame.addEventListener("mousedown", () => {
      cursor.classList.remove("cursor2");
      cursor.classList.remove("cursor");
      cursor.classList.remove("cursor3");
    });

    simonGame.addEventListener("mouseenter", () => {
      cursor.classList.remove("cursor");
      cursor.classList.add("cursor2");
    });

    simonGame.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor2");
      cursor.classList.add("cursor");
    });

    simonGame.addEventListener("mousedown", () => {
      cursor.classList.remove("cursor2");
      cursor.classList.remove("cursor");
      cursor.classList.remove("cursor3");
    });


    mars.classList.remove("moveplanet");
    earth.classList.remove("moveplanet");
    simonGame.classList.remove("moveobject");
    elonGame.classList.remove("moveobject");
    sky.classList.remove("float");
    // tesla.classList.remove("pushMouse moveObject");
    // souris.classList.remove("pushMouse");
    block.classList.remove("moveobject");
  }
};

window.onload = init();
