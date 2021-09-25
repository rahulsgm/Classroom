Y_MAX = 519;

function moveCircle(event) {
  if (!x) {
  }
  x = event.clientX;
  y = event.clientY;
  c.style.top = y;
  c.style.left = x;
}
var c = document.getElementById("circle");
var t = document.getElementById("timer");
let x = undefined;
let y = undefined;
let dropping = undefined;
let timer = 0;
let initialVelocity = 9.8;

function dropBall(event) {
  x = event.clientX;
  y = event.clientY;
  clearInterval(dropping);
  dropping = setInterval(() => {
    droppingBall(x, y);
  }, 100);
}

function droppingBall(bx, by) {
  if (y < Y_MAX) {
    timer += 0.1;
    let distance = Y_MAX - y;
    let u = 2 * (distance / timer);
    t.innerHTML = timer;
    y = y + u;
    console.log(y);
    c.style.top = y;
  }
}
