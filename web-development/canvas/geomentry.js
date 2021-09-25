// function drawline() {
//   var c = document.getElementById("geomentry");
//   var ctx = c.getContext("2d");
//   ctx.beginPath();

//   for (x = 1; x <= 500; x++) {
// y = findLinePoint(x, 0.7, 0);
// ctx.lineTo(x, y);
//     y = findParabolaPoint(x, 200, 200, 1);
//     ctx.lineTo(x, y);
//   }

//   ctx.stroke();
// }
// drawline();
// function findLinePoint(x, m, b) {
//   return m * x + b;
// }
// function findParabolaPoint(x, h, k, a) {
//   return ((a * (x - h)) ^ 2) + k;
// }
function moveCircle(event) {
  if (!x) {
    ctx.moveTo(event.clientX, event.clientY);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, 1200, 550);
  x = event.clientX;
  y = event.clientY;
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
var c = document.getElementById("geomentry");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
let x = undefined;
let y = undefined;

function freeHand(event) {
  if (!x) {
    ctx.moveTo(event.clientX, event.clientY);
  }
  x = event.clientX;
  y = event.clientY;
  ctx.lineTo(x, y);
  ctx.stroke();
}
