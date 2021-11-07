// Example from: https://happycoding.io/tutorials/p5js/input
function setup() {
	let width = 1000;
	let height = width * 1.41;
	
	createCanvas(width, height);
	pixelDensity(1);
	background(240);
  }
  
  function draw() {
	if (mouseIsPressed) {
	  circle(mouseX, mouseY, 25);
	}
  }