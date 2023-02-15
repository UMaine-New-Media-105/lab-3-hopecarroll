function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawAbstractShape();
  strokeWeight(5);
  stroke("green");
  if (mouseIsPressed) {
    stroke("yellow");
  } else if (mouseX >= 100 && mouseX <= 300) {
    stroke("blue");
  } else if (mouseX > 300) {
    stroke("purple");
  }
  //abstract shape
  line(200, 200, 350, 100);
  line(200, 200, 200, 50);
  line(200, 200, 50, 100);
  line(200, 200, 50, 280);
  line(200, 200, 200, 330);
  line(200, 200, 350, 300);
}
