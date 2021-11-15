// From https://github.com/antiboredom/p5.riso/tree/master/examples/Halftone
let pink;
let img;

function preload() {
  img = loadImage('assets/mountains.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  pink = new Riso('fluorescentpink');
}

function draw() {
  background(220);

  clearRiso();

  let halftoned = halftoneImage(img, 'line', 3, 45, 90);

  pink.image(halftoned, 0, 0);

  drawRiso();
}