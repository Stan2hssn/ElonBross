// const slider = document.querySelector(".items");
// // const cursor = document.querySelector(".cursor");

// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', e => {
//   console.log("work");
//   isDown = true;
//   startX = e.pageX - slider.offsetLeft;
// });

// slider.addEventListener('mouseleave', e => {
//   let isDown = false;
//   console.log("worktwise");
// });

// slider.addEventListener('mouseup', e => {
//   let isDown = false;
// });

// slider.addEventListener('mousemove', e => {
//   //   cursor.style.transform = `translate(${(e.clientX - 10)}px, ${
//   //     (e.clientY - 10)
//   //   }px)`;
//   if (!isDown) return;
//   const x = e.pageX - slider.offsetLeft;
//   const walk = x - startX;
//   slider.scrollLeft = walk;
//   console.log(walk);
// });

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// document.addEventListener("mousedown", (e) => {
//   cursor.style.transform;
// });

// const slider = document.querySelector('.item');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//   isDown = false;
// });

// slider.addEventListener('mouseup', () => {
//   isDown = false;
// });

// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.style.transform = "translate-x(scrollLeft - walk)";
//   console.log(walk);
// });

const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft= [];

slider.addEventListener("mousedown", (e) => {
  isDown = true;
//   console.log(startX);
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
//   e.preventDefault();
  const x = e.pageX - slider.offsetLeft
  const walk = x - startX;
//   let travel = scrollLeft[0];
//   console.log("travel", travel);
slider.scrollLeft = scrollLeft - walk;
  slider.style.transform = `translateX(${walk + travel}px)`;
  
//   scrollLeft.push[slider.style.transform];

});
