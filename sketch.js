var sc, mn, hr
var secondAngle, minuteAngle, hourAngle
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  translate (200, 200)
  rotate(-90)
 
hr = hour();
mn = minute();
sc = second();
stroke(255,0,0)
scAngle = map(sc, 0, 60, 0, 360)
stroke(0,0,255)
mnAngle = map(mn,0,60,0,360)
stroke(0,255,0)
hrAngle = map(hr % 12, 0, 12, 0, 360)
push();
rotate(scAngle);
stroke(255,0,0)
strokeWeight(7);
line(0,0,100,0);
pop();
push();
rotate(mnAngle);
stroke(0,0,255)
strokeWeight(7);
line(0,0,75,0);
pop();
push();
rotate(hrAngle);
stroke(0,255,0)
strokeWeight(7);
line(0,0,50,0);
pop();
stroke(255, 0, 255);
point(0,0);
strokeWeight(10);
noFill();
stroke(255, 0, 0);
arc(0, 0, 265, 265, 0,scAngle);
stroke(0,0,255)
arc(0, 0, 295, 295, 0,mnAngle);
stroke(0,255,0)
arc(0, 0, 325, 325, 0,hrAngle);


   drawSprites();
  }