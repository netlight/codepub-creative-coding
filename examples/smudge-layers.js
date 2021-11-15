// Based off example shown here: https://antiboredom.github.io/p5.riso/

let blue, red, yellow;
let iterations = 0;

function setup() {

  pixelDensity(1);
  createCanvas(8.5 * 150, 11 * 150);  // create an 8.5x11 inch canvas at 150dpi

  // create 3 riso layers
  yellow = new Riso('yellow');
  blue = new Riso('blue');
  red = new Riso('red');
}

function draw() {
  let s = 100;
  background(255);

  blue.noStroke();
  red.noStroke();
  yellow.noStroke();

  for (let x = 140; x < width - 140; x = x + 140) {
    iterations += 1;
    for (let y = 140; y < height - 140; y = y + 140) {
      if(iterations > 60) {
        noLoop();
      }
      console.log("Adding ellipse:", x, y, iterations);

      blue.fill(map(y, 0, height, 20, 220));
      blue.ellipse(
        x + random(-20, 20),
        y + random(-20, 20),
        s + random(-20, 20),
        s + random(-20, 20)
      );
      red.fill(map(x, 0, width, 20, 220));
      red.ellipse(
        x + random(-20, 20),
        y + random(-20, 20),
        s + random(-20, 20),
        s + random(-20, 20)
      );
      yellow.fill(map(x, 0, width, 220, 20));
      yellow.ellipse(
        x + random(-20, 20),
        y + random(-20, 20),
        s + random(-20, 20),
        s + random(-20, 20)
      );
    }
  }

  // make a small text graphic and cut it out of the image
  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Helvetica');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(20);
  textGraphic.text("CODEPUB x CODEEXCURSION", mouseX, mouseY);

  red.cutout(textGraphic);
  blue.cutout(textGraphic);
  yellow.cutout(textGraphic);

  drawRiso();
}

function mousePressed() {
  // when the user clicks, export the current image and stop
  exportRiso();
  noLoop();
}