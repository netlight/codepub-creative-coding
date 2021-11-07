let blue;
let red;
let purple;
let green;
let bigPurple;

function setup() {
  createCanvas(1000, 900);
  red = new Riso('red');
  blue = new Riso('blue');
  purple = new Riso('purple');
  bigPurple = new Riso('purple');
  green = new Riso('green');
}

function draw() {
  background(220);
  clearRiso();

  
  blue.fill(255);
  blue.ellipse(200, height / 2, 300, 300);

  red.fill(255);
  red.ellipse(400, height / 2, 300, 300);

  purple.fill(255);
  purple.ellipse(600, height / 2, 300, 300);

  green.fill(255);
  green.ellipse(800, height / 2, 300, 300);

  bigPurple.fill(205);
  bigPurple.ellipse(500, height / 2, 900, 900);

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Roboto');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(40);
  textGraphic.text('CodePub', width / 2 + 5, height / 2);

  bigPurple.cutout(textGraphic);
  
  red.cutout(textGraphic); // cut out the red layer from the text area
  purple.cutout(textGraphic); // cut out the purple layer from the text area
  bigPurple.cutout(textGraphic); // cut text out of bigPurple
  red.cutout(blue); // cut out red, fill with blue
  purple.cutout(red); // cut out purple, fill with red
  green.cutout(purple); // cut out green, fill with purple
  bigPurple.cutout(purple);
  bigPurple.cutout(green); 
  green.cutout(red);
  green.cutout(blue); 

  drawRiso();
}

/*function mouseClicked() {
  exportRiso();
}*/