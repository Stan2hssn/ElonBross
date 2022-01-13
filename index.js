const cursor = document.querySelector(".cursor");
const background = document.querySelector(".background");
const fusee = document.querySelector(".background");
const slider = document.querySelector(".items");

let isDown = false;
let mousePosPct = undefined;

const windowWidth = window.innerWidth;
const itemWidth = slider.getBoundingClientRect().width;
let before = [""];

// var backgroundBefore = window.getComputedStyle(
//     document.querySelector('.cursor'), ':before'
// ).getPropertyValue('background-image');

// before.push(backgroundBefore);

// console.log(before);

document.addEventListener("mousedown", (e) => {
  isDown = true;
  cursor.classList.add("pushMouse");
  cursor.style.transform = `translate(${e.clientX - 15}px, ${
    e.clientY - 15
  }px)`;
});

document.addEventListener("mouseleave", () => {
  isDown = false;
});

document.addEventListener("mouseup", () => {
  isDown = false;
  cursor.classList.remove("pushMouse");
});

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

  if (!isDown) return;

  mousePosPct = ((e.clientX - windowWidth / 2) / windowWidth) * 2;

  console.log(mousePosPct);

  render();
});

background.addEventListener("mouseenter", () => {
  cursor.style.backgroundImage = "url('cursor/svg/pointer_black.svg')";
  // console.log(backgroundBefore);
});

background.addEventListener("mouseleave", () => {
  cursor.style.backgroundImage = "url('cursor/pointer.svg')";
});

fusee.addEventListener("mouseenter", () => {
  cursor.style.backgroundImage = "url('cursor/svg/pointer_black.svg')";
});

fusee.addEventListener("mouseleave", () => {
  cursor.style.backgroundImage = "url('cursor/pointer.svg')";
});


document.addEventListener("wheel", (e) => {
  const increment = 0.06;
  cursor.classList.add("pushMouse");

  if (mousePosPct === undefined) mousePosPct = 0;

  if (mousePosPct > 0) mousePosPct = mousePosPct - 1;

  if (e.deltaY) {
    setTimeout(() => {
        cursor.classList.remove("pushMouse");
      }, 1000);
  }

  if (e.deltaY > 0) {
    if (mousePosPct - increment > -1) {
      mousePosPct = mousePosPct - increment;
    } else {
      mousePosPct = -1;
    }
  } else {
    console.log("up", increment);
    if (mousePosPct + increment < 0) {
      mousePosPct = mousePosPct + increment;
    } else {
      mousePosPct = 0;
    }
  }

  render();
});

function render() {
  const mousePosPx = mousePosPct * (itemWidth - windowWidth);

  if (mousePosPct > 0) {
    slider.style.transform = `translateX(0px)`;
  } else if (mousePosPct < -1) {
    slider.style.transform = `translateX(${
      itemWidth * -1 - windowWidth * -1
    }px)`;
  } else {
    slider.style.transform = `translateX(${mousePosPx}px)`;
  }
}
