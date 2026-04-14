var scroller = document.querySelector('.gallery-row-scroll');
var leftArrow = document.getElementById('leftArrow');

var direction = 0;
var active = false;
var max = 10;
var Vx = 0;
var x = 0.0;
var prevTime = 0;
var f = 0.2;
var prevScroll = 0;

function physics(time) {
  // Measure how much time has passed
  var diffTime = time - prevTime;
  if (!active) {
    diffTime = 80;
    active = true;
  }
  prevTime = time;

  // Give power to the scrolling


  Vx = (direction * max * f + Vx * (1-f)) * (diffTime / 20);

  x += Vx;
  var thisScroll = scroller.scrollLeft;
  var nextScroll = Math.floor(thisScroll + Vx);

  if (Math.abs(Vx) > 0.5 && nextScroll !== prevScroll) {
    scroller.scrollLeft = nextScroll;
    requestAnimationFrame(physics);
  } else {
    Vx = 0;
    active = false;
  }
  prevScroll = nextScroll;
}

leftArrow.addEventListener('mousedown', function () {
  direction = -1;
  if (!active) {
    requestAnimationFrame(physics);
  }
});

leftArrow.addEventListener('mouseup', function () {
  direction = 0;
});

rightArrow.addEventListener('mousedown', function () {
  direction = 1;
  if (!active) {
    requestAnimationFrame(physics);
  }
});
rightArrow.addEventListener('mouseup', function(event){
  direction = 0;
});