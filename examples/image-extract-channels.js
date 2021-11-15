let img;

function preload() {
    img = loadImage('./../assets/mountains.png')
  }

  function setup(){
    createCanvas(2000, 1100);
  
    let blue = new Riso("blue");
    let red = new Riso("red");
  
    let justBlues = extractRGBChannel(img, "blue"); //extract blue from img and save as new image
    let justReds = extractRGBChannel(img, "red"); //extract red from img and save as new image
  
    blue.image(justBlues, 0, 0); //draw justblues to blue layer
    red.image(justReds, 0, 0); //draw justred to red layer
  
    drawRiso();
  }