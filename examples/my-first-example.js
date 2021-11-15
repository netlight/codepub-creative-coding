/*
 * This example is described in more detail than the rest in this folder.
 * For more information about riso, see: 
 * - https://github.com/antiboredom/p5.riso/blob/master/tutorials/getting-started.md
 * - https://discourse.processing.org/t/a-p5-js-cheat-sheet-for-beginners/8236
 * - https://www.codecademy.com/learn/learn-p5js/modules/p5js-animation/cheatsheet 
 */


function setup(){
	
	let width = 1000;                      // Setting width of canvas
	let height = width * 1.41;             // Setting height of canvas
	let noOfRectangles = 6;
	let orange;
	
	createCanvas(width, height);           // Create the canvas and set the size you want to work with
	pixelDensity(1);                       // Making sure the canvas size is fixed
	background(250);                       //set the on screen background to be between 0 (black) and 255 (white)
	
	for(i = 0; i < noOfRectangles; i++) {
		orange = new Riso("orange");       // Create new orange riso object
		orange.stroke(255);                // Set the stroke opacity
		orange.strokeWeight(5);            // Set the thickness of the stroke
		orange.rect(10 + 50 * (i+i*1/3), 10 + 50 * (i+i*1/3), 200, 200); // Make the object a rectangle
	}
	
	//red = new Riso("red");           
	//red.strokeWeight(20)
	//red.line(210, 10, 460, 260);

	//red.cutout(orange);

	drawRiso();                            // Draw the object on the canvas
	noLoop();
  }