var c = document.getElementById("myCanvas");
let leftTopInterval;
let leftBottomInterval;
let rightBottomInterval;
let rightTopInterval;
const INTERVAL = 10;
var ctx = c.getContext("2d");

ctx.beginPath();
const MAX_WIDTH = 1100;
MAX_HEIGHT = 450;
ctx.moveTo(500, 400);
let point1 = hitAWall(500, 400, "left", "bottom");
let i = 0;
let timer;
let isStarted;
function restart() {
  if (!isStarted) {
    isStarted = true;
    ctx.beginPath();
    point1 = hitAWall(point1.x, point1.y, point1.d1, point1.d2);
    ctx.stroke();
  } else {
    isStarted = false;
    clearInterval(timer);
  }
}
function drawLine(x,y,d1,d2,xFn,yFn,checkBoundry,interval){
  ctx.strokeStyle = "#" + Math.random().toString(16).slice(2, 8);
  x = xFn();
  y = yFn();
  ctx.lineTo(x, y);
  ctx.stroke();
  if (!(checkBoundry(x,y))) {
    clearInterval(interval);
    let direction = findDirection(x, y, d1, d2);
    console.log(direction.x, direction.y, direction.d1, direction.d2);
    hitAWall(direction.x, direction.y, direction.d1, direction.d2);
  }
}
function hitAWall(x, y, d1, d2) {

   

  if (d1 == "left" && d2 == "top") {
    leftTopInterval = setInterval(() => drawLine(x,y,d1,d2,()=>++x,()=>--y,(xNew,yNew)=>(xNew < MAX_WIDTH && yNew > 0),leftTopInterval)
    ,INTERVAL);
  }
  if (d1 == "right" && d2 === "bottom") {
    rightBottomInterval = setInterval(() =>  drawLine(x,y,d1,d2,()=>--x,()=>++y,(x,y)=>(x > 0 && y < MAX_HEIGHT),rightBottomInterval)
    ,INTERVAL);
  }
  if(d1=="left"&& d2==="bottom"){
    leftBottomInterval = setInterval(()=> drawLine(x,y,d1,d2,()=>++x,()=>++y,(x,y)=>(x < MAX_WIDTH && y < MAX_HEIGHT),leftBottomInterval)
    ,INTERVAL);
  }
  if(d1=="right" && d2 === "top"){
    rightTopInterval = setInterval(()=> drawLine(x,y,d1,d2,()=>--x, ()=>--y, (x,y)=>(x > 0 && y > 0),rightTopInterval)
    ,INTERVAL);
  }
 
  ctx.lineTo(x, y);

 

  return { x, y, d1, d2 };
}
function findDirection(x, y, d1, d2) {
  d1 = calculateDirection(x >= MAX_WIDTH, d1 === "left",d1, "right","left");
  d2 = calculateDirection( y >= MAX_HEIGHT, d2 === "bottom",d2,"top","bottom");
  d1 = calculateDirection( x <= 0, d1 === "right",d1,"left","right");
  d2 = calculateDirection( y <= 0, d2 === "top",d2,"bottom","top");
  return { x, y, d1, d2 };
}

function calculateDirection(checkLimit, checkDirection, defaultValue,least, most) {
  if (checkLimit) {
    if (checkDirection) {
      return least;
    } else {
      return most;
    }
  }else{
    return defaultValue;
  }

}
