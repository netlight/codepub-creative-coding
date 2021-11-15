let blue;
let red;
let purple;
let green;
let bigPurple;

function setup() {
  createCanvas(1200, 1400); // width, height

  orchid = new Riso('ORCHID');
  red = new Riso('coral');
  blue = new Riso('blue');
  purple = new Riso('purple');
  bigPurple = new Riso('purple');
  green = new Riso('green');
  backgroundColor = new Riso('purple');
}

function draw() {
  clearRiso();
  console.log("run");

  backgroundColor.fill(100);
  backgroundColor.rect(0, 0, width, height);

  orchid.fill(150);
  orchid.ellipse(200, height / 2, 300, 300);
  
  blue.fill(255);
  blue.ellipse(400, height / 2, 300, 300);

  red.fill(255);
  red.ellipse(600, height / 2, 300, 300);

  purple.fill(255);
  purple.ellipse(800, height / 2, 300, 300);

  green.fill(200);
  green.ellipse(1000, height / 2, 300, 300);

  bigPurple.fill(205);
  bigPurple.ellipse(width / 2, height / 2, 1150, 1150);

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Roboto');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(40);
  textGraphic.text('CodePub', width / 2 + 5, height / 2);

  backgroundColor.cutout(textGraphic);
  bigPurple.cutout(textGraphic);
  red.cutout(textGraphic); // cut out the red layer from the text area
  purple.cutout(textGraphic); // cut out the purple layer from the text area
  blue.cutout(textGraphic);
  
  backgroundColor.cutout(bigPurple);
  backgroundColor.cutout(green);
  backgroundColor.cutout(purple);
  backgroundColor.cutout(red);
  orchid.cutout(blue); 
  blue.cutout(red); // cut out blue, fill with red
  purple.cutout(red); // cut out purple, fill with red
  green.cutout(purple); // cut out green, fill with purple
  bigPurple.cutout(purple);
  bigPurple.cutout(green); 
  bigPurple.cutout(orchid);
  green.cutout(red);
  green.cutout(blue); 

  drawRiso();
  noLoop();
}

/*function mouseClicked() {
  exportRiso();
}*/