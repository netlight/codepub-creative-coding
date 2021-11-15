// From https://github.com/antiboredom/p5.riso/tree/master/examples/Halftone
let pink;
let img;

function preload() {
  img = loadImage('assets/mountains.png');
  background(100);
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width * 2, img.height * 2);

  pink = new Riso('fluorescentpink');
  orange = new Riso('fluorescentorange');
  yellow = new Riso('fluorescentyellow');
  green = new Riso('fluorescentgreen');
}

function draw() {
  background(220);

  clearRiso();

  let halftoned = halftoneImage(img, 'line', 3, 45, 90);

  pink.image(halftoned, 0, 0);
  orange.image(halftoned, img.width, img.height);
  yellow.image(halftoned, 0, img.height);
  green.image(halftoned, img.width, 0);

  drawRiso();
}