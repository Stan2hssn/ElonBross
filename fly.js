document.addEventListener('mousedown', () => {

document.querySelector('#click').style.display = 'none';

let audio = document.getElementById('musicHP');
audio.play();

setTimeout(() => {
    var div = document.createElement("div");

div.className = "gif";

var currentDiv = document.getElementById('play');
  document.body.insertBefore(div, play);
}, 1000);


setTimeout(() => {
    const cache = document.querySelector('.cache');
    cache.style.opacity = '1';

}, 4000);

setTimeout(() => {
    const fusee = document.querySelector('.gif');
    fusee.style.display = 'none';
}, 5500);

setTimeout(() => {
    const play = document.querySelector('#play');
    play.style.display = 'block';
    play.style.opacity = '1';
}, 6600);

setTimeout(() => {
    window.location.href = "index.html";
}, 7000);

})
